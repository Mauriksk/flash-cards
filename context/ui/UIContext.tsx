import { createContext } from "react";

interface ContextProps {
    currentItem: string;
    selectItem: (item: ItemType) => void;
    folders: Folder[]
}

export type ItemType = "Folders" | "Profiler" | "Statistics"
export type Folder = {
    name: string;
}


export const UIContext = createContext({} as ContextProps);