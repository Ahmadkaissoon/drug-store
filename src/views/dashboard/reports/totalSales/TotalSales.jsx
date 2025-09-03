import Filter from "../../../../components/common/filter/Filter";
import ReusableTable from "../../../../components/common/ReusableTable";
import TotalSalesFilter from "../../../../components/dashboard/views/reports/totalSales/TotalSalesFilter";

const TotalSales = ({
  fetchTotalSalesFilter,
  filter,
  data,
  resourceData,
  isLoadingResource,
  isResourceError,
}) => {
  const damydata = [
    {
      name: "sda",
      lab_name: "das",
      quantity: 4,
      total_sales: 57,
    },
    {
      name: "sda",
      lab_name: "das",
      quantity: 4,
      total_sales: 57,
    },
  ];

  const columns = [
    {
      id: "name",
      header: "اسم الدواء",
      value: "name",
    },
    {
      id: "lab_name",
      header: "اسم المعمل",
      value: "lab_name",
    },
    {
      id: "quantity",
      header: "الكمية",
      value: "quantity",
    },
    {
      id: "total_sales",
      header: "إجمالي المبيعات",
      value: "total_sales",
    },
  ];

  return (
    <div className="w-full overflow-x-auto shadow rounded-lg">
      <Filter
        title={"بحث"}
        innerComponent={
          <TotalSalesFilter
            fetchTotalSalesFilter={fetchTotalSalesFilter}
            filter={filter}
          />
        }
      />
      <ReusableTable
        data={damydata}
        columns={columns}
        dir="rtl"
        actionsHeader="Actions"
      />
    </div>
  );
};

export default TotalSales;
