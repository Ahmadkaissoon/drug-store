import { useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import ButtonsContainer from "../../../components/common/floatBtn/ButtonsContainer";
import OrdersFilter from "../../../components/dashboard/views/orders/OrdersFilter";
import Button from "../../../components/common/Button";
import ReusableTable from "../../../components/common/ReusableTable";
import Filter from "../../../components/common/filter/Filter";
import { useNavigate } from "react-router";

const Orders = () => {
  const [edit, setEdit] = useState("");

  const navigate = useNavigate()

  const handleSelectedRow = (row) => {
    setEdit(row), navigate(`edit/${row.id}`);
  };
  const handleShowDetails = (row) => {
    setEdit(row), navigate(`details/${row.id}`);
  };

  const data = [
    {
      id:1,
      name: "test",
      lab_name: "test_name",
      city: "حمص",
      address: "العنوان",
    },
    {
      id:2,
      name: "test",
      lab_name: "test_name",
      city: "حمص",
      address: "العنوان",
    },
  ];

  const columns = [
    {
      id: "name",
      header: "اسم الصيدلية",
      value: "name",
    },
    {
      id: "lab_name",
      header: "اسم المعمل",
      value: "lab_name",
    },
    {
      id: "city",
      header: "المدينة",
      value: "city",
    },
    {
      id: "address",
      header: "العنوان",
      value: "address",
    },
  
  ];

  const actions = [
    {
      title: "تعديل",
      onClickFun: handleSelectedRow,
      color: "accept_color",
    },
    {
      title: "تفاصيل",
      onClickFun: handleShowDetails,
      color: "not_color",
    },
    {
      title: "حذف",
      onClickFun: (row) => console.log("Delete:", row),
      color: "error_color",
    },
  ];

  return (
    <div className="w-full overflow-x-auto shadow rounded-lg">
     
      <Filter title={"بحث"} innerComponent={<OrdersFilter />} />
      <ButtonsContainer>

        <Button
          title={"إدخال طلبية جديدة"}
          styleType="reg"
          onClickFun={() => {
            navigate("/orders/new")
          }}
          Icon={<AiOutlineAppstoreAdd />}
        />
      </ButtonsContainer>
      <ReusableTable
        data={data}
        columns={columns}
        actions={actions}
        dir="rtl"
        actionsHeader="Actions"
      />
    </div>
  );
}
 
export default Orders;