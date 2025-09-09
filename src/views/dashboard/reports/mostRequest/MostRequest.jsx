import Filter from "../../../../components/common/filter/Filter";
import Loader from "../../../../components/common/loader/Loader";
import ReusableTable from "../../../../components/common/ReusableTable";
import MostRequestFilter from "../../../../components/dashboard/views/reports/mostRequest/MostRequestFilter";

const MostRequest = ({ fetchMostRequestFilter, isLoading, data, filter }) => {
  const damydata = [
    {
      name: "أوميبرازول",
      quantity: 25,
    },
    {
      name: "أزيتروميسين",
      quantity: 10,
    },
    {
      name: "أزيتروميسين",
      quantity: 15,
    },
    {
      name: "سيبروفلوكساسين",
      quantity: 8,
    },
    {
      name: "لورازيبام",
      quantity: 40,
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
      header: "الكمية المصدرة",
      value: "quantity",
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
          <MostRequestFilter
            fetchMostRequestFilter={fetchMostRequestFilter}
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

export default MostRequest;
