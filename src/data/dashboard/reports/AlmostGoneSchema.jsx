import { z } from "zod";

const ALMOST_GONE_FILTER_SCHEMA = {
  name: z.string(),
  code: z.string(),
};

export const ALMOST_GONE_FILTER_SCHEMA_INITIAL = {
  name: undefined,
  code: undefined,
};

export default ALMOST_GONE_FILTER_SCHEMA;
