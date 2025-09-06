import MOST_REQUEST_FILTER_SCHEMA, {
  MOST_REQUEST_FILTER_SCHEMA_INITIAL,
} from "../../../../../data/dashboard/reports/MostRequestSchema";
import DynamicForm from "../../../../common/DynamicForm";
const MostRequestFilter = ({ fetchMostRequestFilter, filter }) => {
  const formFields = [
    {
      name: "name",
      label: "اسم الدواء :",
      type: "text",
      placeholder: "أدخل اسم الدواء",
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
        onSubmit={(onsubmit) => {
          fetchMostRequestFilter(onsubmit);
        }}
      />
    </div>
  );
};

export default MostRequestFilter;
