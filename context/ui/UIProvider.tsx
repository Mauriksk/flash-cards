import { FC, FunctionComponent, useReducer } from "react";
import { uiReducer, UIContext, ItemType } from ".";

export interface UIState {
    currentItem: string;
}

const UI_INITIAL_STATE: UIState = {
    currentItem: 'Folders',
};

export const UIProvider = ({ children }:any) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const selectItem = (itemType: ItemType) => {
    dispatch({ item: itemType })
  }


  return (
    <UIContext.Provider
      value={{
        ...state,
        //*Functions
        selectItem
      }}
    >
      {children}
    </UIContext.Provider>
  );
};