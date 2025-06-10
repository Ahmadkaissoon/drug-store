import DynamicForm from "../../../../common/DynamicForm";
import { z } from "zod";
const CitiesFilter = () => {
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
      label: "بحث",
      type: "submit",
    },
    {
      label: "إعادة تعيين",
      type: "reset",
    },
  ];

  const defaultValues = {
    name: "",
  };

  return (
    <div className="w-full flex items-center justify-center">
      <DynamicForm
        fields={formFields}
        buttons={formButtons}
        defaultValues={defaultValues}
        schema={citiesSchema}
        className=" p-6 rounded-lg shadow-md"
      />
    </div>
  );
};

export default CitiesFilter;
