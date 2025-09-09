import { PopupContainer } from "../../../../components/common/popupContainer/PopUpContainer";
import ButtonsContainer from "../../../../components/common/floatBtn/ButtonsContainer";
import Button from "../../../../components/common/Button";
import Filter from "../../../../components/common/filter/Filter";
import ReusableTable from "../../../../components/common/ReusableTable";
import { useState } from "react";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import AddPharmacies from "../../../../components/dashboard/views/basics/pharmacies/AddPharmacies";
import PharmaciesFilter from "../../../../components/dashboard/views/basics/pharmacies/PharmaciesFilter";
import PharmaciesDetails from "../../../../components/dashboard/views/basics/pharmacies/PharmaciesDetails";
import Loader from "../../../../components/common/loader/Loader";

const Pharmacies = ({
  data,
  isLoading,
  filter,
  fetchPharmaciesFilter,
  setCurrentPharmacyId,
  currentPharmacyId,
  pharmacyDetails,
  addPharmacy,
  editPharmacy,
  deletePharmacy,
  resourceData,
  isLoadingResource,
  isResourceError,
}) => {
  const [openAddPharmacies, setOpenAddPharmacies] = useState(false);
  const [openEditPharmacies, setOpenEditPharmacies] = useState(false);
  const [openShowPharmacies, setOpenShowPharmacies] = useState(false);
  const [edit, setEdit] = useState("");

  // console.log(resourceData);

  const mockData = {
    name: "fadi",
    pharmacy_name: "shohfi pharmacy",
    address: "alhamadia",
    email: "fadi@test.com",
    city: "HOMS",
    phone: "0999999999",
    telephone: "0312142364",
  };

  const handleSelectedRow = (row) => {
    setEdit(row), setOpenEditPharmacies(true);
  };
  const handleShowDetails = (row) => {
    setCurrentPharmacyId(row.id); // تخزين ID الصيدلية
    setOpenShowPharmacies(true); // فتح البوب أب
  };

  const handleDeletePharmacy = (row) => {
    if (row && row.id) {
      deletePharmacy(row.id);
    }
  };

  const damydata = [
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
      id: "pharmacy_name",
      header: "اسم الصيدلية",
      value: "pharmacy_name",
    },
    {
      id: "city",
      header: "المدينة",
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
      title: "تفاصيل",
      onClickFun: handleShowDetails,
      color: "not_color",
    },
    {
      title: "حذف",
      onClickFun: handleDeletePharmacy,
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
        setIsModalOpen={setOpenAddPharmacies}
        isModalOpen={openAddPharmacies}
        component={
          <AddPharmacies
            resourceData={resourceData}
            addPharmacy={(data) => addPharmacy(data, setOpenAddPharmacies)}
          />
        }
      />
      <PopupContainer
        setIsModalOpen={setOpenEditPharmacies}
        isModalOpen={openEditPharmacies}
        component={
          <AddPharmacies
            data={edit}
            resourceData={resourceData}
            editPharmacy={(data) =>
              editPharmacy(data, edit.id, setOpenEditPharmacies)
            }
          />
        }
      />
      <PopupContainer
        setIsModalOpen={(isOpen) => {
          setOpenShowPharmacies(isOpen);
          if (!isOpen) setCurrentPharmacyId(-1); // إعادة تعيين ID عند إغلاق البوب أب
        }}
        isModalOpen={openShowPharmacies}
        component={
          pharmacyDetails ? (
            <PharmaciesDetails data={pharmacyDetails} />
          ) : (
            <div className="p-10 text-center text-red-500">
              لا يوجد تفاصيل للصيدلية
            </div>
          )
        }
      />
      <Filter
        title={"بحث"}
        innerComponent={
          <PharmaciesFilter
            resourceData={resourceData}
            filter={filter}
            fetchPharmaciesFilter={fetchPharmaciesFilter}
          />
        }
      />
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
