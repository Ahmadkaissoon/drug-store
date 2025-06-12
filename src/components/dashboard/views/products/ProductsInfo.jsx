const ProductsInfo = ({ itemkey, itemvalue }) => {
  return (
    <div>
      <label className="w-max text-white-color font-black ">{itemkey}</label>
      <p className="mt-4  text-hover-color">{itemvalue ? itemvalue : "--"}</p>
    </div>
  );
};

export default ProductsInfo;
