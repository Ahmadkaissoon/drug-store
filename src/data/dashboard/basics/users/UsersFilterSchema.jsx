import { z } from "zod";

const USERS_FILTER_SCHEMA = {
  name: z.string(),
    
};

export const USERS_FILTER_SCHEMA_INITIAL = {
  name: undefined,
};

export default USERS_FILTER_SCHEMA;
