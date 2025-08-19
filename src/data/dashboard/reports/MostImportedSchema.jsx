import { z } from "zod";

const MOST_IMPORTED_FILTER_SCHEMA = {
  lab_name: z.string(),
};

export const MOST_IMPORTED_FILTER_SCHEMA_INITIAL = {
  lab_name: undefined,
};

export default MOST_IMPORTED_FILTER_SCHEMA;
