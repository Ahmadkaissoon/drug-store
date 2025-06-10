import { z } from "zod";

const PHARMACIES_FILTER_SCHEMA = {
  name: z.string().nullable(),
  city_id: z
    .number({
      required_error: "ادخل المدينة",
      invalid_type_error: "ادخل المدينة",
    })
    .nullable(),
};

export const PHARMACIES_FILTER_SCHEMA_INITIAL = {
  name: undefined,
  city_id: null,
};

export default PHARMACIES_FILTER_SCHEMA;
