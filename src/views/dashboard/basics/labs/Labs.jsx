import { useState } from "react";
import Filter from "../../../../components/common/filter/Filter";
import ReusableTable from "../../../../components/common/ReusableTable";
import LabsFilter from "../../../../components/dashboard/views/basics/labs/LabsFilter";
import AddLabs from "../../../../components/dashboard/views/basics/labs/AddLabs";
import { FaUserTie } from "react-icons/fa6";
import Button from "../../../../components/common/Button";
import ButtonsContainer from "../../../../components/common/floatBtn/ButtonsContainer";
import { PopupContainer } from "../../../../components/common/popupContainer/PopUpContainer";
import { LuMapPinPlusInside } from "react-icons/lu";
const Labs = () => {
 const [openAddLabs, setOpenAddLabs] = useState(false);
  const [openEditLabs, setOpenEditLabs] = useState(false);
  const [edit, setEdit] = useState("");

  const handleSelectedRow = (row) => {
    setEdit(row);
    setOpenEditLabs(true);
  };

  //  data
  const users = [{ name: "تاميكو" }];

  const columns = [
    {
      id: "name",
      header: "اسم المعمل",
      value: "name",
    },
  ];

  // Action buttons
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
        setIsModalOpen={setOpenAddLabs}
        isModalOpen={openAddLabs}
        component={<AddLabs />}
      />
      <PopupContainer
        setIsModalOpen={setOpenEditLabs}
        isModalOpen={openEditLabs}
        component={<AddLabs data={edit} />}
      />
      <Filter title={"بحث"} innerComponent={<LabsFilter />} />
      <ButtonsContainer>
        <Button
          title={"إدخال معمل"}
          styleType="reg"
          onClickFun={() => {
            setOpenAddLabs(true);
          }}
          Icon={<LuMapPinPlusInside />}
        />
      </ButtonsContainer>
      <ReusableTable
        data={users}
        columns={columns}
        actions={actions}
        dir="rtl"
        actionsHeader="Actions"
      />
    </div>
  );
};

export default Labs;
