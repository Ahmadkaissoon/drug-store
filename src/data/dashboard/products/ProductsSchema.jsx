import { z } from "zod";

const PRODUCTS_SCHEMA = {
  name: z.string(),
  lab_name: z.string(),
  quantity: z.string(),
  code: z.string(),
  price: z.string(),
  sale_price: z.string(),
};

export const PRODUCTS_SCHEMA_INITIAL = {
  name: undefined,
  lab_name: undefined,
  quantity: undefined,
  code: undefined,
  price: undefined,
  sale_price: undefined,
};

export default PRODUCTS_SCHEMA;
