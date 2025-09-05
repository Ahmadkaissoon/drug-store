import { z } from "zod";
import DynamicForm from "../../../../components/common/DynamicForm";
// import PRODUCTS_SCHEMA, {
//   PRODUCTS_SCHEMA_INITIAL,
// } from "../../../../data/dashboard/products/ProductsSchema";

const AddProducts = ({ data, resourceData, addMedicine, editMedicine }) => {
  const PRODUCTS_SCHEMA = z.object({
    product: z.coerce.number(),
    stock: z.coerce.number(),
  });
  console.log(resourceData);
  const formFields = [
    {
      name: "product",
      label: "اسم الدواء :",
      type: "select",
      placeholder: "أدخل اسم الدواء",
      options: resourceData,
    },
    {
      name: "stock",
      label: "الكمية :",
      type: "text",
      placeholder: "أدخل الكمية",
    },
  ];

  const formButtons = [
    {
      label: "تأكيد",
      type: "submit",
    },
  ];

  const PRODUCTS_SCHEMA_INITIAL = {
    product: "",
    stock: "",
  };

  return (
    <div className="w-full flex items-center justify-center">
      <DynamicForm
        fields={formFields}
        onSubmit={data ? editMedicine : addMedicine}
        buttons={formButtons}
        defaultValuew={data ? data : PRODUCTS_SCHEMA_INITIAL}
        schema={PRODUCTS_SCHEMA}
      />
    </div>
  );
};

export default AddProducts;
