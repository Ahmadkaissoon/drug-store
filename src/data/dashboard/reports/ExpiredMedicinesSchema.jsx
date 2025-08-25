import { z } from "zod";

const EXPIRED_MEDICINES_FILTER_SCHEMA = {
  name: z.string(),
  code: z.string(),
};

export const EXPIRED_MEDICINES_FILTER_SCHEMA_INITIAL = {
  name: undefined,
  code: undefined,
};

export default EXPIRED_MEDICINES_FILTER_SCHEMA;
