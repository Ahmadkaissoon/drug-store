import USERS_SCHEMA, { USERS_SCHEMA_INITIAL } from "../../../../../data/dashboard/basics/users/UserSchema";
import DynamicForm from "../../../../common/DynamicForm";

const AddUser = ({data , addUser , editUser}) => {
  const formFields = [
    {
      name: "email",
      label: "البريد الإلكتروني",
      type: "text",
      placeholder: "أدخل البريد الإلكتروني",
    },
    {
      name: "password",
      label: "كلمة المرور",
      type: "text",
      placeholder: "أدخل كلمة المرور",
    },
    {
      name: "confirmPassword",
      label: "تأكيد كلمة المرور",
      type: "text",
      placeholder: "أدخل تأكيد كلمة المرور",
    },
    {
      name: "role",
      label: "صلاحية المستخدم",
      type: "select",
      placeholder: "أدخل صلاحية المستخدم",
      options: [
        { label: "أدمن", value: "admin" },
        { label: "مدير", value: "maneger" },
        { label: "مخاسب", value: "accountant" },
        { label: "مندوب", value: "representative" },
      ],
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
        onSubmit={data ? editUser : addUser}
        buttons={formButtons}
        defaultValues={data ? data : USERS_SCHEMA_INITIAL }
        schema={USERS_SCHEMA}
      />
    </div>
  );
}
 
export default AddUser;