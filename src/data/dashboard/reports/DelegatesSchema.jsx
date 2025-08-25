import { z } from "zod";

const DELEGATES_FILTER_SCHEMA = {
  delegate_name: z.string(),
};

export const DELEGATES_FILTER_SCHEMA_INITIAL = {
  delegate_name: undefined,
};

export default DELEGATES_FILTER_SCHEMA;
