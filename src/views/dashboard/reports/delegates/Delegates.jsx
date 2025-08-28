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
      date: "5/5/2025",
      delegate_name: "ads",
      delegate: [
        {
          name: "ad",
          price: 5,
          quantity: 5,
          discount: 1,
          total: 25,
        },
      ],
    },

    {
      date: "5/5/2025",
      delegate_name: "ads",
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
