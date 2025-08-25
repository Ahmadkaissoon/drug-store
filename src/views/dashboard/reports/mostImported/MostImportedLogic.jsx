import useMostImportedQuery from "../../../../hooks/reports/mostImported/useMostImportedQuery";
import MostImported from "./MostImported";

const MostImportedLogic = () => {
  const { fetchMostImportedFilter, filter, mostImportedQuery } =
    useMostImportedQuery();
  return (
    <MostImported
      data={mostImportedQuery}
      filter={filter}
      fetchMostImportedFilter={fetchMostImportedFilter}
    />
  );
};

export default MostImportedLogic;
