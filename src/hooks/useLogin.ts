import { useEffect } from "react";
import useFetch from "./useFetch";
import { TokenManager, TokensType } from "@/apis";
import { useLocation } from "react-router-dom";

const useLogin = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const gauthCode = query.get("code");
  const { fetch } = useFetch<TokensType>({
    url: "auth",
    method: "post",
    onSuccess: (data) => {
      if (typeof window !== "undefined") {
        const tokenManager = new TokenManager();
        tokenManager.setTokens(data);
      }
      window.location.href = "";
    },
    onFailure: () => {
      window.location.href = "";
    },
  });

  useEffect(() => {
    if (!gauthCode) return;
    fetch({ code: gauthCode });
  }, [gauthCode]);
};

export default useLogin;
