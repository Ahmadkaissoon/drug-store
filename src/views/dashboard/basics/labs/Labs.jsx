import { useState } from "react";
import Filter from "../../../../components/common/filter/Filter";
import ReusableTable from "../../../../components/common/ReusableTable";
import LabsFilter from "../../../../components/dashboard/views/basics/labs/LabsFilter";
import AddLabs from "../../../../components/dashboard/views/basics/labs/AddLabs";
import Button from "../../../../components/common/Button";
import ButtonsContainer from "../../../../components/common/floatBtn/ButtonsContainer";
import { PopupContainer } from "../../../../components/common/popupContainer/PopUpContainer";
import { LuMapPinPlusInside } from "react-icons/lu";

const Labs = ({
  data,
  filter,
  fetchLabsFilter,
  addLab,
  editLab,
  deleteLab,
  resourceData,
  isLoadingResources,
  isErrorResources,
}) => {
  // console.log(resourceData);
  const [openAddLabs, setOpenAddLabs] = useState(false);
  const [openEditLabs, setOpenEditLabs] = useState(false);
  const [edit, setEdit] = useState("");

  console.log(data);
  const handleSelectedRow = (row) => {
    setEdit(row);
    setOpenEditLabs(true);
  };

  const handleDeleteLab = (row) => {
    if (row && row.id) {
      deleteLab(row.id);
    }
  };

  //  data
  // const users = [{ name: "تاميكو" }];

  const columns = [
    {
      id: "name",
      header: "اسم المعمل",
      value: "name",
    },
    {
      id: "city",
      header: "المدينة",
      value: "city",
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
      onClickFun: handleDeleteLab,
      color: "error_color",
    },
  ];
  return (
    <div className="w-full overflow-x-auto shadow rounded-lg">
      <PopupContainer
        setIsModalOpen={setOpenAddLabs}
        isModalOpen={openAddLabs}
        component={
          <AddLabs
            resourceData={resourceData}
            addLab={(data) => addLab(data, setOpenAddLabs)}
          />
        }
      />
      <PopupContainer
        setIsModalOpen={setOpenEditLabs}
        isModalOpen={openEditLabs}
        component={
          <AddLabs
            data={edit}
            resourceData={resourceData}
            editLab={(data) => editLab(data, edit.id, setOpenEditLabs)}
          />
        }
      />
      <Filter
        title={"بحث"}
        innerComponent={
          <LabsFilter filter={filter} fetchLabsFilter={fetchLabsFilter} />
        }
      />
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
        data={data}
        columns={columns}
        actions={actions}
        dir="rtl"
        actionsHeader="Actions"
      />
    </div>
  );
};

export default Labs;
