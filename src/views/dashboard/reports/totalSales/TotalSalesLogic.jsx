import useTotalSalesQuery from "../../../../hooks/reports/totalSales/useTotalSalesQuery";
import TotalSales from "./TotalSales";

const TotalSalesLogic = () => {
  const {
    fetchTotalSalesFilter,
    filter,
    totalSalesQuery,
    totalSalesResources,
  } = useTotalSalesQuery();
  return (
    <TotalSales
      data={totalSalesQuery.data}
      isLoading={totalSalesQuery.isPending}
      filter={filter}
      fetchTotalSalesFilter={fetchTotalSalesFilter}
      resourceData={totalSalesResources.data}
      isLoadingResource={totalSalesResources.isPending}
      isResourceError={totalSalesResources.isError}
    />
  );
};

export default TotalSalesLogic;
