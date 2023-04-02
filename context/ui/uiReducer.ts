import { UIState } from "./UIProvider";

type UIActionType =
  | { item: "Folders" }
  | { item: "Profiler" }
  | { item: "Statistics" };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.item) {
    case "Folders":
      return {
        ...state,
        currentItem: "Folders",
      };

    case "Profiler":
      return {
        ...state,
        currentItem: "Profiler",
      };

    case "Statistics":
      return {
        ...state,
        currentItem: "Statistics",
      };

    default:
      return { ...state };
  }
};
