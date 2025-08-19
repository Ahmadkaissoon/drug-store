import DynamicForm from "../../../../common/DynamicForm";
import PHARMACIES_SCHEMA, {
  PHARMACIES_SCHEMA_INITIAL,
} from "../../../../../data/dashboard/basics/pharmacies/PharmaciesSchema";

const AddPharmacies = ({ data }) => {
  const formFields = [
    {
      name: "name",
      label: "اسم الصيدلية",
      type: "text",
      placeholder: "أدخل اسم الصيدلية",
    },
    {
      name: "location",
      label: "العنوان",
      type: "text",
      placeholder: "أدخل العنوان",
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
    {
      name: "phone",
      label: " رقم الهاتف",
      type: "text",
      placeholder: "أدخل رقم الهاتف",
    },
  ];

  const formButtons = [
    {
      label: "تأكيد",
      type: "submit",
    },
  ];

  return (
    <div className="w-full flex items-center  justify-center">
      <DynamicForm
        fields={formFields}
        buttons={formButtons}
        defaultValues={data ? data : PHARMACIES_SCHEMA_INITIAL}
        schema={PHARMACIES_SCHEMA}
      />
    </div>
  );
};

export default AddPharmacies;
