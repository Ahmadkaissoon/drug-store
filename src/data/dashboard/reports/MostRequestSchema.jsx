import { z } from "zod";

const MOST_REQUEST_FILTER_SCHEMA = {
  name: z.string(),
  code: z.string(),
};

export const MOST_REQUEST_FILTER_SCHEMA_INITIAL = {
  name: undefined,
  code: undefined,
};

export default MOST_REQUEST_FILTER_SCHEMA;
