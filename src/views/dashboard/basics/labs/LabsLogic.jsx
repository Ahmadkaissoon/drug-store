import useLabsQuery from "../../../../hooks/basics/labs/useLabsQuery";
import Labs from "./Labs";

const LabsLogic = () => {
  const { labsQuery, filter, fetchLabsFilter } = useLabsQuery();
  return (
    <Labs data={labsQuery} filter={filter} fetchLabsFilter={fetchLabsFilter} />
  );
};

export default LabsLogic;
