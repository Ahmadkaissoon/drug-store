import { z } from "zod";

const PHARMACIES_SCHEMA = {
  name: z.string(),
  location: z.string(),
  city_id: z.number({
    required_error: "ادخل المدينة",
    invalid_type_error: "ادخل المدينة",
  }),
  phone: z.string(),
};

export const PHARMACIES_SCHEMA_INITIAL = {
  name: undefined,
  location: undefined,
  city_id: null,
  phone: undefined,
};

export default PHARMACIES_SCHEMA;
