import { useCallback } from "react";

interface SendRequestProps {
  url: RequestInfo | URL;
  init?: RequestInit | undefined;
  cache?: RequestCache;
}

type ResponseType<T> = {
  success: boolean;
  data?: T;
  errorMessage?: string;
};

export const useRequest = () => {
  // T implies the type of the expected data
  const sendRequest = useCallback(
    async <T,>({
      url,
      init,
      cache,
    }: SendRequestProps): Promise<ResponseType<T>> => {
      let output: ResponseType<T> = { success: false };

      try {
        const result = await fetch(
          url,
          init ?? {
            method: "GET",
            cache: cache ?? "no-cache",
          }
        );

        const response = await result.json();

        if ("error" in response) {
          output = {
            success: false,
            errorMessage: response?.error.message,
          };
        } else {
          output = {
            success: true,
            data: response,
          };
        }
      } catch (error) {
        output = {
          success: false,
          errorMessage: (error as any)?.message,
        };
      }
      return output;
    },
    []
  );

  return {
    sendRequest,
  };
};
