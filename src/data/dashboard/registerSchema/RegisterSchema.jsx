import { z } from "zod";

const REGISTER_SCHEMA = {
  email: z
    .string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Please enter a valid email."),
  password: z.string().min(6, "Password must contain at least 6 characters."),
  confirmPassword: z.string().min(6 , "assword must contain at least 6 characters."),
};

export default REGISTER_SCHEMA;
