// import USERS_SCHEMA, {
//   USERS_SCHEMA_INITIAL,
// } from "../../../../../data/dashboard/basics/users/UserSchema";
import { z } from "zod";
import DynamicForm from "../../../../common/DynamicForm";

const AddUser = ({ data, addUser, editUser }) => {
  const USERS_SCHEMA = z.object({
    email: z.string(),
    password: z.string(),
    password_confirm: z.string(),
  });
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
      name: "password_confirm",
      label: "تأكيد كلمة المرور",
      type: "text",
      placeholder: "أدخل تأكيد كلمة المرور",
    },
    // {
    //   name: "role",
    //   label: "صلاحية المستخدم",
    //   type: "select",
    //   placeholder: "أدخل صلاحية المستخدم",
    //   options: [
    //     { label: "أدمن", value: "admin" },
    //     { label: "مدير", value: "maneger" },
    //     { label: "مخاسب", value: "accountant" },
    //     { label: "مندوب", value: "representative" },
    //   ],
    // },
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
