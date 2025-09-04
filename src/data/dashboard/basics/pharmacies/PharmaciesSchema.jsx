import { z } from "zod";

const PHARMACIES_SCHEMA = {
  name: z.string(),
  pharmacy_name: z.string(),
  location: z.string(),
  email: z.string(),
  city: z.string(),
  phone_number: z.string(),
  pharmacy_number: z.string(),
};

export const PHARMACIES_SCHEMA_INITIAL = {
  name: undefined,
  pharmacy_name: undefined,
  location: undefined,
  email: undefined,
  city: null,
  phone_number: undefined,
  pharmacy_number: undefined,
};

export default PHARMACIES_SCHEMA;
