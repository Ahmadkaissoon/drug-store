import PHARMACIES_FILTER_SCHEMA, {
  PHARMACIES_FILTER_SCHEMA_INITIAL,
} from "../../../../../data/dashboard/basics/pharmacies/PharmaciesFilterSchema";
import DynamicForm from "../../../../common/DynamicForm";

const PharmaciesFilter = () => {
  const formFields = [
    {
      name: "name",
      label: "اسم الصيدلية",
      type: "text",
      placeholder: "أدخل اسم الصيدلية",
    },
    {
      name: "city_id",
      label: "اسم المدينة",
      type: "select",
      placeholder: "أدخل اسم المدينة",
      options: [
        { label: "homs", value: "homs" },
        { label: "hama", value: "hama" },
        { label: "idlib", value: "idlib" },
      ],
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
      />
    </div>
  );
};

export default PharmaciesFilter;
