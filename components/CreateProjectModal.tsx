"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useCreateProjectModal from "@/hooks/useCreateProjectModal";
import { useUser } from "@/hooks/useUser";

import Modal from "./Modal";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import TextArea from "./TextArea";

import { toast } from "react-hot-toast";
import uniqid from "uniqid";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Technology } from "@/types";

interface CreateProjectModalProps {
  technologies: Technology[];
}

const CreateProjectModal: React.FC<CreateProjectModalProps> = ({
  technologies,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const createProjectModal = useCreateProjectModal();
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      image: null,
      technologies: [],
      author: "",
      link: "",
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      createProjectModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);

      const imageFile = values.image[0];

      if (!imageFile || !user) {
        toast.error("Missing fields");
        return;
      }

      const uniqueID = uniqid();

      const sanitizedTitle = values.title.replace(/[^\w-]/g, "");

      // Upload image
      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`image-${sanitizedTitle}-${uniqueID}`, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });

      if (imageError) {
        setIsLoading(false);
        return toast.error("Failed image upload - " + imageError.message);
      }

      const { error: supabaseError } = await supabaseClient
        .from("projects")
        .insert({
          user_id: user.id,
          title: values.title,
          description: values.description,
          link: values.link,
          technologies: Array.isArray(values.technologies)
            ? values.technologies
            : [values.technologies],
          image_path: imageData.path,
        });

      if (supabaseError) {
        setIsLoading(false);
        return toast.error(supabaseError.message);
      }

      router.refresh();
      setIsLoading(false);
      toast.success("Project created!");
      reset();
      createProjectModal.onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Add a project"
      description="Create a new project"
      isOpen={createProjectModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Project title"
        />
        <TextArea
          id="description"
          disabled={isLoading}
          {...register("description", { required: true })}
          placeholder="Project description"
          rows={5}
        />
        <Input
          id="link"
          disabled={isLoading}
          {...register("link", { required: false })}
          placeholder="Project link"
        />
        <p className="text-sm leading-normal">Technologies</p>
        <div className="grid grid-cols-2 gap-4">
          {technologies.map((technology) => (
            <div key={technology.id} className="flex items-center">
              <Input
                id={technology.id}
                type="checkbox"
                disabled={isLoading}
                {...register("technologies", { required: true })}
                value={technology.name}
                className="w-4 h-4 text-green-600 accent-green-500 rounded"
              />
              <label
                className="ml-2 text-sm flex items-center"
                htmlFor={technology.id}
              >
                <span className="flex-grow">{technology.name}</span>
              </label>
            </div>
          ))}
        </div>
        <div>
          <p className="text-sm leading-normal pb-1">Select a project image</p>
          <Input
            id="image"
            type="file"
            disabled={isLoading}
            accept="image/*"
            {...register("image", { required: true })}
          />
        </div>
        <Button disabled={isLoading} type="submit">
          Create project
        </Button>
      </form>
    </Modal>
  );
};

export default CreateProjectModal;
