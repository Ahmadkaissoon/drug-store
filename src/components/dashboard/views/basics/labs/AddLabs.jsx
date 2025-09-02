import DynamicForm from "../../../../common/DynamicForm";
import { z } from "zod";

const AddLabs = ({ data , addLab , editLab }) => {
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
        onSubmit={data ? editLab : addLab}
        buttons={formButtons}
        defaultValues={data ? data : defaultValues}
        schema={labsSchema}
      />
    </div>
  );
};

export default AddLabs;
