import { useState } from "react";
import Filter from "../../../../components/common/filter/Filter";
import MostImportedFilter from "../../../../components/dashboard/views/reports/mostImported/MostImportedFilter";
import ReusableTable from "../../../../components/common/ReusableTable";
import { PopupContainer } from "../../../../components/common/popupContainer/PopUpContainer";
import MostImportedDetails from "../../../../components/dashboard/views/reports/mostImported/MostImportedDetails";

const MostImported = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [edit, setEdit] = useState("");

  const handleShowDetails = (row) => {
    setEdit(row), setOpenDetails(true);
  };

  const data = [
    {
      date: "2/25/5858",
      lab_name: "test_name",
      quantity: "1",
      medicines: [
        {
          name: "ads",
          quantity: 5,
        },
        {
          name: "ads",
          quantity: 5,
        },
        {
          name: "ads",
          quantity: 5,
        },
        {
          name: "ads",
          quantity: 5,
        },
      ],
    },
    {
      date: "2/25/5858",
      lab_name: "test_name",
      quantity: "1",
      medicines: [
        {
          name: "ads",
          quantity: 5,
        },
      ],
    },
    {
      date: "2/25/5858",
      lab_name: "test_name",
      quantity: "1",
      medicines: [
        {
          name: "ads",
          quantity: 5,
        },
        {
          name: "ads",
          quantity: 5,
        },
        {
          name: "ads",
          quantity: 5,
        },
        {
          name: "ads",
          quantity: 5,
        },
      ],
    },
  ];

  const columns = [
    {
      id: "date",
      header: "التاريخ",
      value: "date",
    },
    {
      id: "lab_name",
      header: "اسم المعمل",
      value: "lab_name",
    },
    {
      id: "quantity",
      header: "عدد المواد",
      value: "quantity",
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
        component={<MostImportedDetails data={edit} />}
      />
      <Filter title={"بحث"} innerComponent={<MostImportedFilter />} />
      <ReusableTable
        data={data}
        columns={columns}
        actions={actions}
        dir="rtl"
        actionsHeader="Actions"
      />
    </div>
  );
};

export default MostImported;
