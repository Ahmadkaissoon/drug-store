import MOST_REQUEST_FILTER_SCHEMA, { MOST_REQUEST_FILTER_SCHEMA_INITIAL } from "../../../../../data/dashboard/reports/MostRequestSchema";
import DynamicForm from "../../../../common/DynamicForm";
const MostRequestFilter = () => {
  const formFields = [
    {
      name: "name",
      label: "اسم الدواء :",
      type: "text",
      placeholder: "أدخل اسم الدواء",
    },
    {
      name: "code",
      label: "الكود : ",
      type: "text",
      placeholder: "أدخل الكود ",
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
        defaultValues={MOST_REQUEST_FILTER_SCHEMA_INITIAL}
        schema={MOST_REQUEST_FILTER_SCHEMA}
      />
    </div>
  );
}
 
export default MostRequestFilter;