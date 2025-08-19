import { PopupContainer } from "../../../../components/common/popupContainer/PopUpContainer";
import ButtonsContainer from "../../../../components/common/floatBtn/ButtonsContainer";
import Button from "../../../../components/common/Button";
import Filter from "../../../../components/common/filter/Filter";
import ReusableTable from "../../../../components/common/ReusableTable";
import { useState } from "react";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import AddPharmacies from "../../../../components/dashboard/views/basics/pharmacies/AddPharmacies";
import PharmaciesFilter from "../../../../components/dashboard/views/basics/pharmacies/PharmaciesFilter";

const Pharmacies = () => {
  const [openAddPharmacies, setOpenAddPharmacies] = useState(false);
  const [openEditPharmacies, setOpenEditPharmacies] = useState(false);
  const [edit, setEdit] = useState("");

  const handleSelectedRow = (row) => {
    setEdit(row), setOpenEditPharmacies(true);
  };

  const data = [
    {
      name: "test1",
      city: "homs",
    },
    {
      name: "test2",
      city: "hama",
    },
    {
      name: "test3",
      city: "idleb",
    },
  ];

  const columns = [
    {
      id: "name",
      header: "اسم الصيدلية",
      value: "name",
    },
    {
      id: "city",
      header: "اسم المدينة",
      value: "city",
    },
  ];

  const actions = [
    {
      title: "تعديل",
      onClickFun: handleSelectedRow,
      color: "accept_color",
    },
    {
      title: "حذف",
      onClickFun: (row) => console.log("Delete:", row),
      color: "error_color",
    },
  ];

  return (
    <div className="w-full overflow-x-auto shadow rounded-lg">
      <PopupContainer
        setIsModalOpen={setOpenAddPharmacies}
        isModalOpen={openAddPharmacies}
        component={<AddPharmacies />}
      />
      <PopupContainer
        setIsModalOpen={setOpenEditPharmacies}
        isModalOpen={openEditPharmacies}
        component={<AddPharmacies data={edit} />}
      />
      <Filter title={"بحث"} innerComponent={<PharmaciesFilter />} />
      <ButtonsContainer>
        <Button
          title={"إدخال صيدلية"}
          styleType="reg"
          onClickFun={() => {
            setOpenAddPharmacies(true);
          }}
          Icon={<MdOutlineLocalPharmacy />}
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
};

export default Pharmacies;
