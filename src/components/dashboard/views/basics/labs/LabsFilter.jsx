import DynamicForm from "../../../../common/DynamicForm";
import { z } from "zod";
const LabsFilter = ({ filter, fetchLabsFilter }) => {
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
        schema={labsSchema}
        onSubmit={(onSubmit) => {
          fetchLabsFilter(onSubmit);
        }}
      />
    </div>
  );
};

export default LabsFilter;
