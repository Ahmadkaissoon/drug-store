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

const Cities = () => {
  const [openAddCity, setOpenAddCity] = useState(false);

  //  data
  const users = [{ name: "حمص" }];

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
      onClickFun: (row) => console.log("Edit:", row),
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
        setIsModalOpen={setOpenAddCity}
        isModalOpen={openAddCity}
        component={<AddCities />}
      />
      <Filter title={"بحث"} innerComponent={<CitiesFilter />} />
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
        data={users}
        columns={columns}
        actions={actions}
        dir="rtl"
        actionsHeader="Actions"
      />
    </div>
  );
};

export default Cities;
