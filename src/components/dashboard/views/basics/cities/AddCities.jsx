import DynamicForm from "../../../../common/DynamicForm";
import { z } from "zod";

const AddCities = ({ data }) => {
  const citiesSchema = z.object({
    name: z.string(),
  });

  const formFields = [
    {
      name: "name",
      label: "اسم المدينة",
      type: "text",
      placeholder: "أدخل اسم المدينة",
    },
  ];

  const formButtons = [
    {
      label: "تأكيد",
      type: "submit",
    },
  ];

  const defaultValues = {
    name: "",
  };

  return (
    <div className="w-full flex items-center  justify-center">
      <DynamicForm
        fields={formFields}
        buttons={formButtons}
        defaultValues={data ? data : defaultValues}
        schema={citiesSchema}
      />
    </div>
  );
};

export default AddCities;
