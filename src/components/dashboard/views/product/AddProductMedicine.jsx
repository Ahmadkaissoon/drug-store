import { z } from "zod";
import DynamicForm from "../../../common/DynamicForm";

const AddProductMedicine = ({ addProduct }) => {
  const productSchema = z.object({
    name: z.string(),
    quantity: z.string(),
  });

  const formFields = [
    {
      name: "name",
      label: "اسم الدواء",
      type: "text",
      placeholder: "ادخل اسم الدواء",
    },
    {
      name: "quantity",
      label: "الكمية",
      type: "text",
      placeholder: "ادخل الكمية",
    },
  ];

  const formButtons = [
    {
      label: "تأكيد",
      type: "submit",
    },
  ];

  const defaultValues = {
    name: "",
    quantity: "",
  };

  return (
    <div className="w-full flex items-center  justify-center">
      <DynamicForm
        fields={formFields}
        onSubmit={addProduct}
        buttons={formButtons}
        defaultValues={defaultValues}
        schema={productSchema}
      />
    </div>
  );
};

export default AddProductMedicine;
