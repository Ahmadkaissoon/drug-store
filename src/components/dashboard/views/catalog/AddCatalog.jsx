import { z } from "zod";
import DynamicForm from "../../../common/DynamicForm";

const AddCatalog = ({ data, addCatalog, resourceData }) => {
  const catalogSchema = z.object({
    name: z.string(),
    manufacturing_lab: z.string(),
    type: z.string(),
    man_price: z.string(),
    sell_price: z.string(),
  });

  const formFields = [
    {
      name: "name",
      label: "اسم الدواء",
      type: "text",
      placeholder: "أدخل اسم الدواء",
    },
    {
      name: "manufacturing_lab",
      label: "اسم المعمل",
      type: "select",
      placeholder: "أدخل اسم المعمل",
      options: resourceData,
    },
    {
      name: "type",
      label: "النوع",
      type: "select",
      placeholder: "أدخل النوع",
      options: [
        { name: "Tablet", value: "Tablet" },
        { name: "Syrup", value: "Syrup" },
        { name: "Cream", value: "Cream" },
        { name: "Sanitizer", value: "Sanitizer" },
      ],
    },
    {
      name: "man_price",
      label: "سعر المعمل",
      type: "text",
      placeholder: "أدخل سعر المعمل",
    },
    {
      name: "sell_price",
      label: "سعر المبيع",
      type: "text",
      placeholder: "أدخل سعر المبيع",
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
  };

  return (
    <div className="w-full flex items-center  justify-center">
      <DynamicForm
        fields={formFields}
        onSubmit={addCatalog}
        buttons={formButtons}
        defaultValues={data ? data : defaultValues}
        schema={catalogSchema}
      />
    </div>
  );
};

export default AddCatalog;
