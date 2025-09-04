import { z } from "zod";
import DynamicForm from "../../../../common/DynamicForm";
// import PHARMACIES_SCHEMA, {
//   PHARMACIES_SCHEMA_INITIAL,
// } from "../../../../../data/dashboard/basics/pharmacies/PharmaciesSchema";

const AddPharmacies = ({ data, resourceData, addPharmacy, editPharmacy }) => {
  const PHARMACIES_SCHEMA = z.object({
    name: z.string(),
    pharmacy_name: z.string(),
    location: z.string(),
    email: z.string(),
    city: z.string(),
    phone_number: z.string(),
    pharmacy_number: z.string(),
  });

  const formFields = [
    {
      name: "name",
      label: "اسم المالك",
      type: "text",
      placeholder: "أدخل اسم المالك",
    },
    {
      name: "pharmacy_name",
      label: "اسم الصيدلية ",
      type: "text",
      placeholder: "أدخل اسم الصيدلية ",
    },
    {
      name: "location",
      label: "العنوان",
      type: "text",
      placeholder: "أدخل العنوان",
    },
    {
      name: "email",
      label: "البريد الالكتروني",
      type: "email",
      placeholder: "أدخل البريد الالكتروني",
    },
    {
      name: "city",
      label: "اسم المدينة",
      type: "select",
      placeholder: "أدخل اسم المدينة",
      options: resourceData,
    },
    {
      name: "phone_number",
      label: " رقم الهاتف",
      type: "text",
      placeholder: "أدخل رقم الهاتف",
    },
    {
      name: "pharmacy_number",
      label: " رقم الهاتف الثابت",
      type: "text",
      placeholder: "أدخل رقم الهاتف الثابت",
    },
  ];

  const formButtons = [
    {
      label: "تأكيد",
      type: "submit",
    },
  ];

  const PHARMACIES_SCHEMA_INITIAL = {
    name: undefined,
    pharmacy_name: undefined,
    location: undefined,
    email: undefined,
    city: null,
    phone_number: undefined,
    pharmacy_number: undefined,
  };

  return (
    <div className="w-full flex items-center  justify-center">
      <DynamicForm
        fields={formFields}
        onSubmit={data ? editPharmacy : addPharmacy}
        buttons={formButtons}
        defaultValues={data ? data : PHARMACIES_SCHEMA_INITIAL}
        schema={PHARMACIES_SCHEMA}
      />
    </div>
  );
};

export default AddPharmacies;
