import useTotalSalesQuery from "../../../../hooks/reports/totalSales/useTotalSalesQuery";
import TotalSales from "./TotalSales";

const TotalSalesLogic = () => {
  const { fetchTotalSalesFilter, filter, totalSalesQuery } =
    useTotalSalesQuery();
  return (
    <TotalSales
      data={totalSalesQuery.data}
      filter={filter}
      fetchTotalSalesFilter={fetchTotalSalesFilter}
    />
  );
};

export default TotalSalesLogic;
