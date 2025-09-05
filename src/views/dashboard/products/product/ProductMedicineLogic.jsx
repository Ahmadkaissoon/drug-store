import useProductMedicineMutation from "../../../../hooks/products/product/useProductMedicineMutation";
import useProductMedicineQuery from "../../../../hooks/products/product/useProductMedicineQuery";
import ProductMedicine from "./ProductMedicine";

const ProductMedicineLogic = () => {
  const { citiesQuery } = useProductMedicineQuery();
  const { addProductMedicines, handleAddProductMedicines } =
    useProductMedicineMutation();

  return (
    <ProductMedicine
      data={citiesQuery?.data}
      addProductMedicine={handleAddProductMedicines}
    />
  );
};

export default ProductMedicineLogic;
