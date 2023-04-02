import { createContext } from "react";

interface ContextProps {
    currentItem: string;
    selectItem: (item: ItemType) => void;
}

export type ItemType = "Folders" | "Profiler" | "Statistics"


export const UIContext = createContext({} as ContextProps);