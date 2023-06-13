"use client";

import Image from "next/image";

import { useUser } from "@/hooks/useUser";
import Button from "@/components/Button";

import { BiPencil } from "react-icons/bi";
import { MdVerified } from "react-icons/md";

interface PageContentProps {}

const AboutHeader: React.FC<PageContentProps> = ({}) => {
  const { user } = useUser();

  return (
    <div className="mb-2 flex flex-row items-center gap-x-6">
      <div className="relative aspect-square w-48 md:w-60 h-full overflow-hidden">
        <Image
          className="object-cover w-full h-full rounded-full"
          src={"/images/about_me_clr.png"}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-row gap-x-2 items-center">
          <MdVerified size={24} className="fill-sky-400" />
          <p className="text-sm">Digital Designer Intern @ EDP</p>
        </div>
        <div className="flex flex-row gap-x-4">
          <h1 className="text-neutral-50 text-2xl md:text-4xl font-bold">
            Simão Amaral
          </h1>
          {user && (
            <div className="flex gap-x-4 items-center">
              <Button
                onClick={() => {
                  console.log("TODO: Edit page.");
                }}
                className="bg-white"
              >
                <BiPencil size={16} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
