import useMostImportedQuery from "../../../../hooks/reports/mostImported/useMostImportedQuery";
import MostImported from "./MostImported";

const MostImportedLogic = () => {
  const {
    fetchMostImportedFilter,
    filter,
    mostImportedQuery,
    mostImportedResources,
  } = useMostImportedQuery();
  return (
    <MostImported
      data={mostImportedQuery.data}
      filter={filter}
      fetchMostImportedFilter={fetchMostImportedFilter}
      resourceData={mostImportedResources.data}
      isLoadingResource={mostImportedResources.isPending}
      isResourceError={mostImportedResources.isError}
    />
  );
};

export default MostImportedLogic;
