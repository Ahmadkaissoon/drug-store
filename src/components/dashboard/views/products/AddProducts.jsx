import DynamicForm from "../../../../components/common/DynamicForm";
import PRODUCTS_SCHEMA, {
  PRODUCTS_SCHEMA_INITIAL,
} from "../../../../data/dashboard/products/ProductsSchema";

const AddProducts = ({ data , addMedicine , editMedicine }) => {
  console.log(data);
  const formFields = [
    {
      name: "name",
      label: "اسم الدواء :",
      type: "text",
      placeholder: "أدخل اسم الدواء",
    },
    {
      name: "lab_name",
      label: "اسم المعمل :",
      type: "text",
      placeholder: "أدخل اسم المعمل",
    },
    {
      name: "code",
      label: "رمز الدواء :",
      type: "text",
      placeholder: "أدخل رمز الدواء",
    },
    {
      name: "price",
      label: "سعر المعمل :",
      type: "text",
      placeholder: "أدخل سعر المعمل",
    },
    {
      name: "sale_price",
      label: "سعر المبيع :",
      type: "text",
      placeholder: "أدخل سعر المبيع",
    },
    {
      name: "quantity",
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
