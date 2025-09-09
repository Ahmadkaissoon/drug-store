import { useState } from "react";
import Filter from "../../../../components/common/filter/Filter";
import ReusableTable from "../../../../components/common/ReusableTable";
import CitiesFilter from "../../../../components/dashboard/views/basics/cities/CitiesFilter";
import { FaUserTie } from "react-icons/fa6";
import Button from "../../../../components/common/Button";
import ButtonsContainer from "../../../../components/common/floatBtn/ButtonsContainer";
import { PopupContainer } from "../../../../components/common/popupContainer/PopUpContainer";
import { LuMapPinPlusInside } from "react-icons/lu";
import AddCities from "../../../../components/dashboard/views/basics/cities/AddCities";
import Loader from "../../../../components/common/loader/Loader";

const Cities = ({
  data,
  isLoading,
  filter,
  fetchCitiesFilter,
  addCity,
  editCity,
  deleteCity,
}) => {
  // console.log(data);
  const [openAddCity, setOpenAddCity] = useState(false);
  const [openEditCity, setOpenEditCity] = useState(false);
  const [edit, setEdit] = useState("");

  const handleSelectedRow = (row) => {
    setEdit(row);
    setOpenEditCity(true);
  };

  const handleDeleteCity = (row) => {
    if (row && row.id) {
      deleteCity(row.id);
    }
  };

  const columns = [
    {
      id: "name",
      header: "اسم المدينة",
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
      onClickFun: handleDeleteCity,
      color: "error_color",
    },
  ];
  return isLoading ? (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader />
    </div>
  ) : (
    <div className="w-full h-full overflow-x-auto shadow rounded-lg">
      <PopupContainer
        setIsModalOpen={setOpenAddCity}
        isModalOpen={openAddCity}
        component={
          <AddCities addCity={(data) => addCity(data, setOpenAddCity)} />
        }
      />
      <PopupContainer
        setIsModalOpen={setOpenEditCity}
        isModalOpen={openEditCity}
        component={
          <AddCities
            data={edit}
            editCity={(data) => editCity(data, edit.id, setOpenEditCity)}
          />
        }
      />
      <Filter
        title={"بحث"}
        innerComponent={
          <CitiesFilter filter={filter} fetchCitiesFilter={fetchCitiesFilter} />
        }
      />
      <ButtonsContainer>
        <Button
          title={"إدخال مدينة"}
          styleType="reg"
          onClickFun={() => {
            setOpenAddCity(true);
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

export default Cities;
