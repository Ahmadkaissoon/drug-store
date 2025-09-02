import useLabsQuery from "../../../../hooks/basics/labs/useLabsQuery";
import useLabsMutation from "../../../../hooks/basics/labs/useLabsMutation";
import Labs from "./Labs";

const LabsLogic = () => {
  const { labsQuery, filter, fetchLabsFilter } = useLabsQuery();
  const { handleAddLab, handleEditLab, handleDeleteLab } = useLabsMutation();
  console.log(labsQuery);
  return (
    <Labs
      data={labsQuery.data}
      filter={filter}
      fetchLabsFilter={fetchLabsFilter}
      addLab={handleAddLab}
      editLab={handleEditLab}
      deleteLab={handleDeleteLab}
    />
  );
};

export default LabsLogic;
