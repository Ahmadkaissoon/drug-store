import DynamicForm from "../../../../common/DynamicForm";
import { z } from "zod";

const AddLabs = () => {
  const labsSchema = z.object({
    name: z.string(),
  });

  const formFields = [
    {
      name: "name",
      label: "اسم المعمل",
      type: "text",
      placeholder: "أدخل اسم المعمل",
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
        defaultValues={defaultValues}
        schema={labsSchema}
        className="bg-white p-6 rounded-lg shadow-md"
      />
    </div>
  );
};

export default AddLabs;
