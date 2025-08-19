import MOST_IMPORTED_FILTER_SCHEMA, { MOST_IMPORTED_FILTER_SCHEMA_INITIAL } from "../../../../../data/dashboard/reports/MostImportedSchema";
import DynamicForm from "../../../../common/DynamicForm";

const MostImportedFilter = () => {
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
        defaultValues={MOST_IMPORTED_FILTER_SCHEMA_INITIAL}
        schema={MOST_IMPORTED_FILTER_SCHEMA}
      />
    </div>
  );
}
 
export default MostImportedFilter;