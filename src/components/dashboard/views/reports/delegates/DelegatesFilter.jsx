import DELEGATES_FILTER_SCHEMA, {
  DELEGATES_FILTER_SCHEMA_INITIAL,
} from "../../../../../data/dashboard/reports/DelegatesSchema";
import DynamicForm from "../../../../common/DynamicForm";
const DelegateFilter = ({ fetchDelegatesFilter, filter }) => {
  const formFields = [
    {
      name: "delegate_name",
      label: "اسم المندوب :",
      type: "text",
      placeholder: "أدخل اسم المندوب",
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
        defaultValues={DELEGATES_FILTER_SCHEMA_INITIAL}
        schema={DELEGATES_FILTER_SCHEMA}
        onSubmit={(onsubmit) => {
          fetchDelegatesFilter(onsubmit);
        }}
      />
    </div>
  );
};

export default DelegateFilter;
