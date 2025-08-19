import { useState } from "react";
import { PopupContainer } from "../../../../components/common/popupContainer/PopUpContainer";
import Filter from "../../../../components/common/filter/Filter";
import ButtonsContainer from "../../../../components/common/floatBtn/ButtonsContainer";
import Button from "../../../../components/common/Button";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import ReusableTable from "../../../../components/common/ReusableTable";
import AddProducts from "../../../../components/dashboard/views/products/AddProducts";
import ProductsFilter from "../../../../components/dashboard/views/products/ProductsFilter";
import ProductsDetails from "../../../../components/dashboard/views/products/ProductsDetails";

const Medicines = () => {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [openEditProduct, setOptenEditProduct] = useState(false);
  const [openDetailsProduct, setOpenDetailsProduct] = useState(false);
  const [edit, setEdit] = useState("");

  const handleSelectedRow = (row) => {
    setEdit(row), setOptenEditProduct(true);
  };
  const handleShowDetails = (row) => {
    setEdit(row), setOpenDetailsProduct(true);
  };

  const data = [
    {
      name: "test",
      lab_name: "test_name",
      quantity: "1",
      code: "1234",
      price: "900",
      sale_price: "1000",
    },
    {
      name: "test",
      lab_name: "test_name",
      quantity: "1",
      code: "1234",
      price: "1000",
      sale_price: "1100",
    },
  ];

  const columns = [
    {
      id: "name",
      header: "اسم الدواء",
      value: "name",
    },
    {
      id: "lab_name",
      header: "اسم المعمل",
      value: "lab_name",
    },
    {
      id: "quantity",
      header: "الكمية",
      value: "quantity",
    },
    {
      id: "code",
      header: "الكود",
      value: "code",
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
      onClickFun: (row) => console.log("Delete:", row),
      color: "error_color",
    },
  ];

  return (
    <div className="w-full overflow-x-auto shadow rounded-lg">
      <PopupContainer
        setIsModalOpen={setOpenAddProduct}
        isModalOpen={openAddProduct}
        component={<AddProducts />}
      />
      <PopupContainer
        setIsModalOpen={setOptenEditProduct}
        isModalOpen={openEditProduct}
        component={<AddProducts data={edit} />}
      />
      <PopupContainer
        setIsModalOpen={setOpenDetailsProduct}
        isModalOpen={openDetailsProduct}
        component={<ProductsDetails data={edit} />}
      />
      <Filter title={"بحث"} innerComponent={<ProductsFilter />} />
      <ButtonsContainer>
        <Button
          title={"رفع ملف إكسل"}
          styleType="reg"
          color="accept_color"
          onClickFun={() => {
            console.log("import_excel");
          }}
          Icon={<PiMicrosoftExcelLogoFill />}
        />
        <Button
          title={"إدخال دواء"}
          styleType="reg"
          onClickFun={() => {
            setOpenAddProduct(true);
          }}
          Icon={<AiOutlineAppstoreAdd />}
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

export default Medicines;
