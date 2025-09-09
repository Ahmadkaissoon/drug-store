import Filter from "../../../../components/common/filter/Filter";
import Loader from "../../../../components/common/loader/Loader";
import ReusableTable from "../../../../components/common/ReusableTable";
import ExpiredMedicinesFilter from "../../../../components/dashboard/views/reports/expiredMedicines/ExpiredMedicinesFilter";

const ExpiredMedicines = ({
  data,
  isLoading,
  fetchExpiredMedicinesFilter,
  filter,
}) => {
  const damydata = [
    {
      name: "باراسيتامول",
      date: "30 يوم",
    },
    {
      name: "أموكسيسيلين",
      date: "15 يوم",
    },
    {
      name: "إيبوبروفين",
      date: "60 يوم",
    },
    {
      name: "سيبروفلوكساسين",
      date: "10 أيام",
    },
    {
      name: "لورازيبام",
      date: "90 يوم",
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

  return isLoading ? (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader />
    </div>
  ) : (
    <div className="w-full overflow-x-auto shadow rounded-lg">
      <Filter
        title={"بحث"}
        innerComponent={
          <ExpiredMedicinesFilter
            filter={filter}
            fetchExpiredMedicinesFilter={fetchExpiredMedicinesFilter}
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

export default ExpiredMedicines;
