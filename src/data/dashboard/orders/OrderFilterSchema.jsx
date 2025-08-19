import { z } from "zod";

const ORDER_FILTER_SCHEMA = {
  name: z.string(),
  lab_name: z.string(),
  code: z.string(),
  date:z.string()
};

export const ORDER_FILTER_SCHEMA_INITIAL = {
  name: undefined,
  lab_name: undefined,
  code: undefined,
  date:undefined,
};

export default ORDER_FILTER_SCHEMA;