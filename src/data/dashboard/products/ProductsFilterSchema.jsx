import { z } from "zod";

const PRODUCTS_FILTER_SCHEMA = {
  name: z.string(),
  lab_name: z.string(),
  code: z.string(),
};

export const PRODUCTS_FILTER_SCHEMA_INITIAL = {
  name: undefined,
  lab_name: undefined,
  code: undefined,
};

export default PRODUCTS_FILTER_SCHEMA;
