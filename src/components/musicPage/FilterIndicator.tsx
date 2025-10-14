import MutedText from "../elements/MutedText";
import type { Filters } from "./musicPageCommon";

type FilterIndicatorProps = {
  filters: Filters;
};

const FilterIndicator: React.FC<FilterIndicatorProps> = ({ filters }) => {
  let filterUsed = "Filter type";
  let filterValue = "All";

  if (filters.typeFilter !== "") {
    filterValue = filters.typeFilter;
  } else if (filters.searchFilter !== "") {
    filterValue = filters.searchFilter;
    filterUsed = "Custom filter";
  }
  return (
    <MutedText>
      {filterUsed}: {filterValue}
    </MutedText>
  );
};

export default FilterIndicator;
