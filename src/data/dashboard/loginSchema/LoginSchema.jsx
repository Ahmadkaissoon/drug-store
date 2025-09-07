import { z } from "zod";

export const RESISTER_SCHEMA = {
  email: z
    .string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Please enter a valid email."),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  password: z.string().min(6, "Password must contain at least 6 characters."),
  password_confirm: z
    .string()
    .min(6, "Password confirm must contain at least 6 characters."),
};

const LOGIN_SCHEMA = {
  email: z
    .string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Please enter a valid email."),
  password: z.string().min(6, "Password must contain at least 6 characters."),
};

export default LOGIN_SCHEMA;
