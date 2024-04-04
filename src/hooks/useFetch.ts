import { Instance } from "@/apis";
import { isAxiosError, Method } from "axios";
import { useCallback, useState } from "react";

interface ErrorType {
  [status: number]: string;
}

interface Props<T> {
  url: string;
  method: Method;
  onSuccess?: (data: T) => void | Promise<void>;
  onFailure?: (e: unknown) => void | Promise<void>;
  successMessage?: string;
  errors?: ErrorType | string;
  autoPushToggle?: boolean;
}

const useFetch = <T>({
  url,
  method,
  onSuccess,
  onFailure,
  successMessage,
  errors,
  autoPushToggle = true,
}: Props<T>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);

  const fetch = useCallback(
    async (body?: any) => {
      setIsLoading(true);

      try {
        const { data } = await Instance({
          url,
          method,
          data: body,
        });

        if (successMessage) console.log(successMessage)

        setData(data);
        if (onSuccess) await onSuccess(data);
      } catch (e) {
        if (!isAxiosError(e)) {
          console.error("알 수 없는 에러가 발생했습니다");
          return;
        }

        if (e.response && e.response.status >= 500) {
          console.error("알 수 없는 에러가 발생했습니다");
        } else if (typeof errors === "string") {
          console.error(errors);
        } else if (errors && e.response && errors[e.response.status]) {
          console.error(errors[e.response.status]);
        }
        if (onFailure) await onFailure(e);

        if (autoPushToggle) window.location.href = "/";
      } finally {
        setIsLoading(false);
      }
    },
    [url, method, onSuccess, onFailure, successMessage, errors]
  );

  return { fetch, isLoading, data };
};

export default useFetch;
