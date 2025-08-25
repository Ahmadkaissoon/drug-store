import Filter from "../../../../components/common/filter/Filter";
import ReusableTable from "../../../../components/common/ReusableTable";
import ExpiredMedicinesFilter from "../../../../components/dashboard/views/reports/expiredMedicines/ExpiredMedicinesFilter";

const ExpiredMedicines = () => {
  const data = [
    {
      date: "2/25/5858",
      name: "ads",
    },
    {
      date: "2/25/5858",
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
      id: "date",
      header: "الزمن المتبقي",
      value: "date",
    },
  ];

  return (
    <div className="w-full overflow-x-auto shadow rounded-lg">
      <Filter title={"بحث"} innerComponent={<ExpiredMedicinesFilter />} />
      <ReusableTable
        data={data}
        columns={columns}
        dir="rtl"
        actionsHeader="Actions"
      />
    </div>
  );
};

export default ExpiredMedicines;
