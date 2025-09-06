// import USERS_SCHEMA, {
//   USERS_SCHEMA_INITIAL,
// } from "../../../../../data/dashboard/basics/users/UserSchema";
import { z } from "zod";
import DynamicForm from "../../../../common/DynamicForm";

const AddUser = ({ data, addUser, editUser }) => {
  const USERS_SCHEMA = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string(),
    password: z.string(),
    password_confirm: z.string(),
    role: z.string(),
  });
  const formFields = [
    {
      name: "first_name",
      label: "الاسم الاول",
      type: "text",
      placeholder: "أدخل الاسم الاول",
    },
    {
      name: "last_name",
      label: "الاسم الاخير",
      type: "text",
      placeholder: "أدخل الاسم الاخير",
    },
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
      name: "password_confirm",
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
        { name: "مدير", value: "manager" },
        { name: "محاسب", value: "accountant" },
        { name: "مندوب", value: "salesman" },
      ],
    },
  ];

  const formButtons = [
    {
      label: "تأكيد",
      type: "submit",
    },
  ];

  const USERS_SCHEMA_INITIAL = {
    email: "",
    password: "",
    password_confirm: "",
  };

  return (
    <div className="w-full flex items-center  justify-center">
      <DynamicForm
        fields={formFields}
        onSubmit={data ? editUser : addUser}
        buttons={formButtons}
        defaultValues={data ? data : USERS_SCHEMA_INITIAL}
        schema={USERS_SCHEMA}
      />
    </div>
  );
};

export default AddUser;
