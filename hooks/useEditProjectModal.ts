import { Project } from "@/types";
import { create } from "zustand"    

interface EditProjectModalStore {
    isOpen: boolean;
    project: Project | null;
    onOpen: (project: Project) => void;
    onClose: () => void;
};

const useEditProjectModal = create<EditProjectModalStore>((set) => ({
    isOpen: false,
    project: null,
    onOpen: (project) => set({ isOpen: true, project }),
    onClose: () => set({ isOpen: false, project: null }),
}));

export default useEditProjectModal;