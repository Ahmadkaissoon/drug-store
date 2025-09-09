import useMostRequestQuery from "../../../../hooks/reports/mostRequest/useMostRequestQuery";
import MostRequest from "./MostRequest";

const MostRequestLogic = () => {
  const { fetchMostRequestFilter, mostRequestQuery, filter } =
    useMostRequestQuery();
  return (
    <MostRequest
      data={mostRequestQuery.data}
      isLoading={mostRequestQuery.isPending}
      filter={filter}
      fetchMostRequestFilter={fetchMostRequestFilter}
    />
  );
};

export default MostRequestLogic;
