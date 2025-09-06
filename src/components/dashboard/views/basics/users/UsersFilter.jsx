// import USERS_FILTER_SCHEMA, {
//   USERS_FILTER_SCHEMA_INITIAL,
// } from "../../../../../data/dashboard/basics/users/UsersFilterSchema";
import { z } from "zod";
import DynamicForm from "../../../../common/DynamicForm";

const UsersFilter = ({ filter, fetchUsersFilter }) => {
  const USERS_FILTER_SCHEMA = {
    firstname: z.string(),
  };
  const formFields = [
    {
      name: "firstname",
      label: "اسم المستخدم :",
      type: "text",
      placeholder: "أدخل اسم المستخدم",
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

  const USERS_FILTER_SCHEMA_INITIAL = {
    firstname: "",
  };

  return (
    <div className="w-full flex items-center justify-center">
      <DynamicForm
        fields={formFields}
        buttons={formButtons}
        defaultValues={USERS_FILTER_SCHEMA_INITIAL}
        schema={USERS_FILTER_SCHEMA}
        onSubmit={(onSubmit) => {
          console.log(onSubmit);
          fetchUsersFilter(onSubmit);
        }}
      />
    </div>
  );
};

export default UsersFilter;
