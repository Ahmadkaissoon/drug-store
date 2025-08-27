import useLabsQuery from "../../../../hooks/basics/labs/useLabsQuery";
import Labs from "./Labs";

const LabsLogic = () => {
  const { labsQuery, filter, fetchLabsFilter } = useLabsQuery();
  console.log(labsQuery);
  return (
    <Labs
      data={labsQuery.data}
      filter={filter}
      fetchLabsFilter={fetchLabsFilter}
    />
  );
};

export default LabsLogic;
