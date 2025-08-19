import Filter from "../../../../components/common/filter/Filter";
import ReusableTable from "../../../../components/common/ReusableTable";
import MostRequestFilter from "../../../../components/dashboard/views/reports/mostRequest/MostRequestFilter";

const MostRequest = () => {


  const data = [
    {
      name: "sda",
      quantity:"4"
    },
    {
      name: "sda",
      quantity:"4"
    },
    {
      name: "sda",
      quantity:"4"
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

  

  return (
    <div className="w-full overflow-x-auto shadow rounded-lg">

      <Filter title={"بحث"} innerComponent={<MostRequestFilter />} />
      <ReusableTable
        data={data}
        columns={columns}
        dir="rtl"
        actionsHeader="Actions"
      />
    </div>
  );
}
 
export default MostRequest;