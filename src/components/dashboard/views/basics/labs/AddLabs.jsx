import DynamicForm from "../../../../common/DynamicForm";
import { z } from "zod";

const AddLabs = ({ data, resourceData, addLab, editLab }) => {
  const labsSchema = z.object({
    name: z.string(),
    city: z.string(),
  });

  // console.log(resourceData);
  const formFields = [
    {
      name: "name",
      label: "اسم المعمل",
      type: "text",
      placeholder: "أدخل اسم المعمل",
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
      label: "تأكيد",
      type: "submit",
    },
  ];

  const defaultValues = {
    name: "",
    city: {},
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
