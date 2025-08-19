import { z } from "zod";

const TOTAL_SALES_FILTER_SCHEMA = {
  lab_name: z.string(),
};

export const TOTAL_SALES_FILTER_SCHEMA_INITIAL = {
  lab_name: undefined,
};

export default TOTAL_SALES_FILTER_SCHEMA;
