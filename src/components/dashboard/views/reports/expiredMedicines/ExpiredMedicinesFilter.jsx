import EXPIRED_MEDICINES_FILTER_SCHEMA, {
  EXPIRED_MEDICINES_FILTER_SCHEMA_INITIAL,
} from "../../../../../data/dashboard/reports/ExpiredMedicinesSchema";
import DynamicForm from "../../../../common/DynamicForm";
const ExpiredMedicinesFilter = ({ fetchExpiredMedicinesFilter, filter }) => {
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
        defaultValues={EXPIRED_MEDICINES_FILTER_SCHEMA_INITIAL}
        schema={EXPIRED_MEDICINES_FILTER_SCHEMA}
        onSubmit={(onsubmit) => {
          fetchExpiredMedicinesFilter(onsubmit);
        }}
      />
    </div>
  );
};

export default ExpiredMedicinesFilter;
