import Filter from "../../../../components/common/filter/Filter";
import ReusableTable from "../../../../components/common/ReusableTable";
import AlmostGoneFilter from "../../../../components/dashboard/views/reports/almostGone/AlomostGoneFilter";

const AlmostGone = ({ data, fetchAlmostGoneFilter, filter }) => {
  const damydata = [
    {
      name: "باراسيتامول",
      quantity: 5,
    },
    {
      name: "أموكسيسيلين",
      quantity: 2,
    },
    {
      name: "إيبوبروفين",
      quantity: 3,
    },
    {
      name: "سيبروفلوكساسين",
      quantity: 1,
    },
    {
      name: "لورازيبام",
      quantity: 4,
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
      <Filter
        title={"بحث"}
        innerComponent={
          <AlmostGoneFilter
            filter={filter}
            fetchAlmostGoneFilter={fetchAlmostGoneFilter}
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

export default AlmostGone;
