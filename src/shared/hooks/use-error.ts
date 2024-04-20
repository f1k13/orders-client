import { useMemo } from "react";
import { errorsList } from "../lib/errors-handlers/error-list";

export const useError = (error: string | undefined) => {
  return useMemo(() => {
    if (error) return [errorsList[error]];
  }, [error]);
};
