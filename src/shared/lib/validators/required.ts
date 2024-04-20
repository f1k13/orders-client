import { DateTime } from "@gravity-ui/date-utils";

export const required = () => {
  return {
    name: "required",
    validator: (value: string | null | DateTime) => Boolean(value),
  };
};
