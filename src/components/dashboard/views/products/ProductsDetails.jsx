import PRODUCTS_DICT from "../../../../data/dashboard/products/ProductsDict";
import ProductsInfo from "./ProductsInfo";
("../../../../data/dashboard/products/ProductsDict");

const ProductsDetails = ({ data }) => {
  // console.log(data);
  return (
    <div
      dir="rtl"
      className="grid grid-cols-2 h-max md:min-w-[350px] overflow-y-auto md:gap-10 gap-4"
    >
      {Object.keys(PRODUCTS_DICT).map((item, index) => {
        return (
          <ProductsInfo
            key={index}
            itemkey={PRODUCTS_DICT[item]}
            itemvalue={data[item]}
          />
        );
      })}
    </div>
  );
};

export default ProductsDetails;
