import { LuMapPinPlusInside } from "react-icons/lu";
import ButtonsContainer from "../../../../components/common/floatBtn/ButtonsContainer";
import ReusableTable from "../../../../components/common/ReusableTable";
import { PopupContainer } from "../../../../components/common/popupContainer/PopUpContainer";
import { useState } from "react";
import AddCatalog from "../../../../components/dashboard/views/catalog/AddCatalog";
import Button from "../../../../components/common/Button";
import Loader from "../../../../components/common/loader/Loader";

const Catalog = ({
  data,
  isLoading,
  addCatalog,
  editCatalog,
  deleteCatalog,
  resourceData,
}) => {
  // console.log(data);
  const [openAddCatalog, setOpenAddCatalog] = useState(false);
  const [openEditCatalog, setOpenEditCatalog] = useState(false);
  const [edit, setEdit] = useState("");

  const handleSelectedRow = (row) => {
    setEdit(row);
    setOpenEditCatalog(true);
  };

  const handleDeleteCity = (row) => {
    console.log(row);
    if (row && row.id) {
      deleteCatalog(row.id);
    }
  };

  const columns = [
    {
      id: "name",
      header: "اسم الدواء",
      value: "name",
    },
    {
      id: "manufacturing_lab",
      header: "المعمل",
      value: "manufacturing_lab",
    },
    {
      id: "type",
      header: "النوع",
      value: "type",
    },
    {
      id: "man_price",
      header: "سعر المعمل",
      value: "man_price",
    },
    {
      id: "sell_price",
      header: "سعر المبيع",
      value: "sell_price",
    },
    {
      id: "code",
      header: "رمز",
      value: "code",
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
      onClickFun: handleDeleteCity,
      color: "error_color",
    },
  ];
  return isLoading ? (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader />
    </div>
  ) : (
    <div className="w-full overflow-x-auto shadow rounded-lg">
      <PopupContainer
        setIsModalOpen={setOpenAddCatalog}
        isModalOpen={openAddCatalog}
        component={
          <AddCatalog
            addCatalog={(data) => addCatalog(data, setOpenAddCatalog)}
            resourceData={resourceData}
          />
        }
      />
      <PopupContainer
        setIsModalOpen={setOpenEditCatalog}
        isModalOpen={openEditCatalog}
        component={
          <AddCatalog
            data={edit}
            addCatalog={(data) =>
              editCatalog(data, edit.id, setOpenEditCatalog)
            }
            resourceData={resourceData}
          />
        }
      />

      <ButtonsContainer>
        <Button
          title={"إدخال كاتالوغ"}
          styleType="reg"
          onClickFun={() => {
            setOpenAddCatalog(true);
          }}
          Icon={<LuMapPinPlusInside />}
        />
      </ButtonsContainer>
      <ReusableTable
        data={data || []}
        columns={columns}
        actions={actions}
        dir="rtl"
        actionsHeader="Actions"
      />
    </div>
  );
};

export default Catalog;
