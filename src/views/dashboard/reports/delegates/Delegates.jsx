import Filter from "../../../../components/common/filter/Filter";
import { PopupContainer } from "../../../../components/common/popupContainer/PopUpContainer";
import ReusableTable from "../../../../components/common/ReusableTable";
import DelegateDetails from "../../../../components/dashboard/views/reports/delegates/DelegatesDetails";
import DelegateFilter from "../../../../components/dashboard/views/reports/delegates/DelegatesFilter";
import { useState } from "react";

const Delegates = ({ data, fetchDelegatesFilter, filter }) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [edit, setEdit] = useState("");

  const handleShowDetails = (row) => {
    setEdit(row), setOpenDetails(true);
  };

  const damydata = [
    {
      delegate_name: "أحمد علي",
      date: "05/05/2025",
      delegate: [
        { name: "باراسيتامول", price: 10, quantity: 5, total: 50 },
        { name: "أموكسيسيلين", price: 15, quantity: 2, total: 30 },
      ],
    },
    {
      delegate_name: "محمد حسن",
      date: "06/05/2025",
      delegate: [
        { name: "إيبوبروفين", price: 8, quantity: 3, total: 24 },
        { name: "سيبروفلوكساسين", price: 12, quantity: 1, total: 12 },
      ],
    },
    {
      delegate_name: "سارة خالد",
      date: "07/05/2025",
      delegate: [
        { name: "لورازيبام", price: 20, quantity: 4, total: 80 },
        { name: "أوميبرازول", price: 18, quantity: 3, total: 54 },
        { name: "أزيتروميسين", price: 25, quantity: 2, total: 50 },
      ],
    },
    {
      delegate_name: "علي فهد",
      date: "08/05/2025",
      delegate: [
        { name: "سيتريزين", price: 5, quantity: 10, total: 50 },
        { name: "ميترونيدازول", price: 12, quantity: 1, total: 12 },
      ],
    },
  ];

  const columns = [
    {
      id: "delegate_name",
      header: "اسم المندوب",
      value: "delegate_name",
    },
    {
      id: "date",
      header: "تاريخ الطلبية",
      value: "date",
    },
  ];
  const actions = [
    {
      title: "تفاصيل",
      onClickFun: handleShowDetails,
      color: "not_color",
    },
  ];

  return (
    <div className="w-full overflow-x-auto shadow rounded-lg">
      <PopupContainer
        setIsModalOpen={setOpenDetails}
        isModalOpen={openDetails}
        component={<DelegateDetails data={edit} />}
      />
      <Filter
        title={"بحث"}
        innerComponent={
          <DelegateFilter
            filter={filter}
            fetchDelegatesFilter={fetchDelegatesFilter}
          />
        }
      />
      <ReusableTable
        data={damydata}
        columns={columns}
        actions={actions}
        dir="rtl"
        actionsHeader="Actions"
      />
    </div>
  );
};

export default Delegates;
