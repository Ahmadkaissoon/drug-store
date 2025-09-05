import { useState } from "react";
import ButtonsContainer from "../../../../components/common/floatBtn/ButtonsContainer";
import { PopupContainer } from "../../../../components/common/popupContainer/PopUpContainer";
import ReusableTable from "../../../../components/common/ReusableTable";
import { LuMapPinPlusInside } from "react-icons/lu";
import Button from "../../../../components/common/Button";
import AddProductMedicine from "../../../../components/dashboard/views/product/AddProductMedicine";

const ProductMedicine = ({ data, addProductMedicine }) => {
  console.log(data);
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const columns = [
    {
      id: "name",
      header: "اسم الدواء",
      value: "name",
    },
    {
      id: "quantity",
      header: "كمية الدواء",
      value: "quantity",
    },
  ];

  return (
    <div className="w-full overflow-x-auto shadow rounded-lg">
      <PopupContainer
        setIsModalOpen={setOpenAddProduct}
        isModalOpen={openAddProduct}
        component={
          <AddProductMedicine
            addProduct={(data) => addProductMedicine(data, setOpenAddProduct)}
          />
        }
      />

      <ButtonsContainer>
        <Button
          title={"إدخال مادة"}
          styleType="reg"
          onClickFun={() => {
            setOpenAddProduct(true);
          }}
          Icon={<LuMapPinPlusInside />}
        />
      </ButtonsContainer>
      <ReusableTable
        data={data || []}
        columns={columns}
        // actions={actions}
        dir="rtl"
        // actionsHeader="Actions"
      />
    </div>
  );
};

export default ProductMedicine;
