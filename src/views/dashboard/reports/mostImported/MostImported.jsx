import { useState } from "react";
import Filter from "../../../../components/common/filter/Filter";
import MostImportedFilter from "../../../../components/dashboard/views/reports/mostImported/MostImportedFilter";
import ReusableTable from "../../../../components/common/ReusableTable";
import { PopupContainer } from "../../../../components/common/popupContainer/PopUpContainer";
import MostImportedDetails from "../../../../components/dashboard/views/reports/mostImported/MostImportedDetails";

const MostImported = ({
  data,
  filter,
  fetchMostImportedFilter,
  resourceData,
  isLoadingResource,
  isResourceError,
}) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [edit, setEdit] = useState("");

  const handleShowDetails = (row) => {
    setEdit(row), setOpenDetails(true);
  };

  const damydata = [
    {
      date: "2025-09-01",
      lab_name: "مختبر الشفاء",
      quantity: 3,
      medicines: [
        { name: "باراسيتامول", quantity: 50 },
        { name: "أموكسيسيلين", quantity: 30 },
        { name: "إيبوبروفين", quantity: 20 },
      ],
    },
    {
      date: "2025-08-28",
      lab_name: "مختبر الحياة",
      quantity: 2,
      medicines: [
        { name: "أزيتروميسين", quantity: 8 },
        { name: "سيبروفلكس", quantity: 12 },
      ],
    },
    {
      date: "2025-08-30",
      lab_name: "مختبر النور",
      quantity: 4,
      medicines: [
        { name: "ميترونيدازول", quantity: 6 },
        { name: "ديكلوفيناك", quantity: 9 },
        { name: "لورازيبام", quantity: 3 },
        { name: "بانادول", quantity: 10 },
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
      <Filter
        title={"بحث"}
        innerComponent={
          <MostImportedFilter
            filter={filter}
            fetchMostImportedFilter={fetchMostImportedFilter}
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

export default MostImported;
