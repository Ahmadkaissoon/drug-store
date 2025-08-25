import DynamicForm from "../../../../components/common/DynamicForm";
import PRODUCTS_FILTER_SCHEMA, {
  PRODUCTS_FILTER_SCHEMA_INITIAL,
} from "../../../../data/dashboard/products/ProductsFilterSchema";

const ProductsFilter = ({ filter, fetchMedicinesFilter }) => {
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
  ];

  const formButtons = [
    {
      label: "بحث",
      type: "submit",
    },
    {
      label: "إعادة تعيين",
      type: "reset",
    },
  ];
  return (
    <div className="w-full flex items-center justify-center">
      <DynamicForm
        fields={formFields}
        buttons={formButtons}
        defaultValues={PRODUCTS_FILTER_SCHEMA_INITIAL}
        schema={PRODUCTS_FILTER_SCHEMA}
        onSubmit={(onSubmit) => {
          fetchMedicinesFilter(onSubmit);
        }}
      />
    </div>
  );
};

export default ProductsFilter;
