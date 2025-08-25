import TOTAL_SALES_FILTER_SCHEMA, {
  TOTAL_SALES_FILTER_SCHEMA_INITIAL,
} from "../../../../../data/dashboard/reports/TotalSalesSchema";
import DynamicForm from "../../../../common/DynamicForm";
const TotalSalesFilter = ({ fetchTotalSalesFilter, filter }) => {
  const formFields = [
    {
      name: "lab_name",
      label: "اسم المعمل :",
      type: "text",
      placeholder: "أدخل اسم المعمل",
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
        defaultValues={TOTAL_SALES_FILTER_SCHEMA_INITIAL}
        schema={TOTAL_SALES_FILTER_SCHEMA}
        onSubmit={(onsubmit) => {
          fetchTotalSalesFilter(onsubmit);
        }}
      />
    </div>
  );
};

export default TotalSalesFilter;
