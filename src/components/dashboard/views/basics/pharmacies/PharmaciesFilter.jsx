import PHARMACIES_FILTER_SCHEMA, {
  PHARMACIES_FILTER_SCHEMA_INITIAL,
} from "../../../../../data/dashboard/basics/pharmacies/PharmaciesFilterSchema";
import DynamicForm from "../../../../common/DynamicForm";

const PharmaciesFilter = ({ filter, fetchPharmaciesFilter, resourceData }) => {
  const formFields = [
    {
      name: "name",
      label: "اسم الصيدلية",
      type: "text",
      placeholder: "أدخل اسم الصيدلية",
    },
    {
      name: "city",
      label: "اسم المدينة",
      type: "select",
      placeholder: "اختر المدينة",
      options: resourceData,
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
        defaultValues={PHARMACIES_FILTER_SCHEMA_INITIAL}
        schema={PHARMACIES_FILTER_SCHEMA}
        onSubmit={(onSubmit) => {
          fetchPharmaciesFilter(onSubmit);
        }}
      />
    </div>
  );
};

export default PharmaciesFilter;
