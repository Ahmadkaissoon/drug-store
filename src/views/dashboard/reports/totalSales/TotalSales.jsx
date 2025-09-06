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
      name: "باراسيتامول",
      lab_name: "مختبر الشفاء",
      quantity: 10,
      total_sales: 1500,
    },
    {
      name: "أموكسيسيلين",
      lab_name: "مختبر الحياة",
      quantity: 5,
      total_sales: 1200,
    },
    {
      name: "إيبوبروفين",
      lab_name: "مختبر النور",
      quantity: 8,
      total_sales: 2000,
    },
    {
      name: "سيبروفلوكساسين",
      lab_name: "مختبر السلامة",
      quantity: 3,
      total_sales: 900,
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
