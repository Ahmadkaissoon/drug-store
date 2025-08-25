import { z } from "zod";

const USERS_SCHEMA = {
  email: z
    .string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Please enter a valid email."),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
  role: z.enum(["admin", "representative", "user", "maneger"]), // adjust roles as needed
};

export const USERS_SCHEMA_INITIAL = {
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
  role: undefined,
};

export default USERS_SCHEMA;
