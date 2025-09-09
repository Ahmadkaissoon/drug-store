import useLabsQuery from "../../../../hooks/basics/labs/useLabsQuery";
import useLabsMutation from "../../../../hooks/basics/labs/useLabsMutation";
import Labs from "./Labs";

const LabsLogic = () => {
  const { labsQuery, filter, fetchLabsFilter, labsResources } = useLabsQuery();
  const { handleAddLab, handleEditLab, handleDeleteLab } = useLabsMutation();
  // console.log(labsResources.data);
  return (
    <Labs
      data={labsQuery.data}
      isLoading={labsQuery.isPending}
      filter={filter}
      fetchLabsFilter={fetchLabsFilter}
      addLab={handleAddLab}
      editLab={handleEditLab}
      deleteLab={handleDeleteLab}
      resourceData={labsResources.data}
      isLoadingResources={labsResources.isPending}
      isErrorResources={labsResources.isError}
    />
  );
};

export default LabsLogic;
