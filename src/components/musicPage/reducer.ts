import type { FilterAction, Filters } from "./musicPageCommon";

export const filtersReducer = (
  state: Filters,
  action: FilterAction
): Filters => {
  switch (action.type) {
    case "SET_SEARCH_FILTER":
      return {
        ...state,
        searchFilter: action.payload,
        typeFilter: "",
      };
    case "SET_TYPE_FILTER":
      return {
        ...state,
        typeFilter: action.payload,
        searchFilter: "",
      };
    case "RESET":
      return { searchFilter: "", typeFilter: "" };
    default:
      return state;
  }
};
