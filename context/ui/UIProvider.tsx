import { FC, FunctionComponent, useReducer } from "react";
import { uiReducer, UIContext, ItemType, Folder } from ".";
import { Folders } from "../../components/ui/bodies/folders/Folders";

export interface UIState {
  currentItem: string;
  folders: Folder[];
  modalCreateFolder: boolean;
}

const UI_INITIAL_STATE: UIState = {
  currentItem: "Folders",
  folders: [
    {
      name: "English Folder",
    },
    {
      name: "German Folder",
    },
    {
      name: "Spanish Folder",
    },
  ],
  modalCreateFolder: false,
};

export const UIProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const selectItem = (itemType: ItemType) => {
    dispatch({ item: itemType });
  };


  return (
    <UIContext.Provider
      value={{
        ...state,
        //*Functions
        selectItem,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
