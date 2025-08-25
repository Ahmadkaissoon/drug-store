import USERS_FILTER_SCHEMA, {
  USERS_FILTER_SCHEMA_INITIAL,
} from "../../../../../data/dashboard/basics/users/UsersFilterSchema";
import DynamicForm from "../../../../common/DynamicForm";

const UsersFilter = ({ filter, fetchUsersFilter }) => {
  const formFields = [
    {
      name: "name",
      label: "اسم المستخم :",
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
  return (
    <div className="w-full flex items-center justify-center">
      <DynamicForm
        fields={formFields}
        buttons={formButtons}
        defaultValues={USERS_FILTER_SCHEMA_INITIAL}
        schema={USERS_FILTER_SCHEMA}
        onSubmit={(onSubmit) => {
          fetchUsersFilter(onSubmit);
        }}
      />
    </div>
  );
};

export default UsersFilter;
