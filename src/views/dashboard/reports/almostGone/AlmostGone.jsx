import Filter from "../../../../components/common/filter/Filter";
import ReusableTable from "../../../../components/common/ReusableTable";
import AlmostGoneFilter from "../../../../components/dashboard/views/reports/almostGone/AlomostGoneFilter";

const AlmostGone = () => {
  const data = [

    {
      quantity: 10,
      name: "ads",
    },

    {
      quantity: 10,
      name: "ads",
    },
  ];

  const columns = [
    {
      id: "name",
      header: "اسم الدواء",
      value: "name",
    },
    {
      id: "quantity",
      header: "الكمية المتبقية",
      value: "quantity",
    },
  ];

  return (
    <div className="w-full overflow-x-auto shadow rounded-lg">
      <Filter title={"بحث"} innerComponent={<AlmostGoneFilter />} />
      <ReusableTable
        data={data}
        columns={columns}
        dir="rtl"
        actionsHeader="Actions"
      />
    </div>
  );
};

export default AlmostGone;
