import useDelegatesQuery from "../../../../hooks/reports/delegates/useDelegatesQuery";
import Delegates from "./Delegates";

const DelegatesLogic = () => {
  const { delegatesQuery, fetchDelegatesFilter, filter } = useDelegatesQuery();
  return (
    <Delegates
      data={delegatesQuery.data}
      isLoading={delegatesQuery.isPending}
      fetchDelegatesFilter={fetchDelegatesFilter}
      filter={filter}
    />
  );
};

export default DelegatesLogic;
