import { useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import ButtonsContainer from "../../../components/common/floatBtn/ButtonsContainer";
import OrdersFilter from "../../../components/dashboard/views/orders/OrdersFilter";
import Button from "../../../components/common/Button";
import ReusableTable from "../../../components/common/ReusableTable";
import Filter from "../../../components/common/filter/Filter";
import { useNavigate } from "react-router";
import Loader from "../../../components/common/loader/Loader";

const Orders = ({
  data,
  isLoading,
  filter,
  fetchOrderFilter,
  setCurrentOrderId,
  currentOrderId,
  getOneOrderQuery,
  addOrder,
  editOrder,
  deleteOrder,
  resourceData,
  isLoadingResource,
  isResourceError,
}) => {
  const [edit, setEdit] = useState("");

  const navigate = useNavigate();

  const handleSelectedRow = (row) => {
    setEdit(row), navigate(`edit/${row.id}`);
  };
  const handleShowDetails = (row) => {
    setEdit(row), navigate(`details/${row.id}`);
  };

  const handleDeleteOrder = (row) => {
    if (row && row.id) {
      deleteOrder(row.id);
    }
  };
  console.log(data);

  // 🔹 بيانات وهمية
  const mockOrdersData = [
    {
      id: 1,
      client: "صيدلية الشفاء",
      order_serial_number: "ORD-2025-001",
      total_fund: "150000",
      city: "دمشق",
      address: "شارع الثورة - بناء 10",
    },
    {
      id: 2,
      client: "صيدلية ابن سينا",
      order_serial_number: "ORD-2025-002",
      total_fund: "200000",
      city: "حلب",
      address: "الجميلية - مقابل الحديقة",
    },
    {
      id: 3,
      client: "صيدلية الربيع",
      order_serial_number: "ORD-2025-003",
      total_fund: "100000",
      city: "حمص",
      address: "الشارع الرئيسي",
    },
  ];

  // 🔹 لو مافي بيانات حقيقية نعرض البيانات الوهمية
  const displayData = data && data.length > 0 ? data : mockOrdersData;

  const columns = [
    {
      id: "client",
      header: "اسم الصيدلية",
      value: "client",
    },
    {
      id: "order_serial_number",
      header: "الكود",
      value: "order_serial_number",
    },
    {
      id: "total_fund",
      header: "السعر الاجمالي",
      value: "total_fund",
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
    // {
    //   title: "حذف",
    //   onClickFun: handleDeleteOrder,
    //   color: "error_color",
    // },
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
          <OrdersFilter
            resourceData={resourceData}
            filter={filter}
            fetchOrderFilter={fetchOrderFilter}
          />
        }
      />
      <ButtonsContainer>
        <Button
          title={"إدخال طلبية جديدة"}
          styleType="reg"
          onClickFun={() => {
            navigate("/orders/new");
          }}
          Icon={<AiOutlineAppstoreAdd />}
        />
      </ButtonsContainer>
      <ReusableTable
        data={mockOrdersData}
        columns={columns}
        actions={actions}
        dir="rtl"
        actionsHeader="Actions"
      />
    </div>
  );
};

export default Orders;
