import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface Iprops {
  allowed: boolean;
  redirectTo: string;
  children: React.ReactNode;
}

export default function RequireAuth({ allowed, redirectTo, children }: Iprops) {
  const { token } = useSelector((state: any) => state.authSlice);
  const isLogin = token ? true : false;
  const navigate = useNavigate();

  useEffect(() => {
    if (allowed !== isLogin) {
      navigate(redirectTo);
    }
  }, [allowed, isLogin, redirectTo, navigate]);

  return allowed === isLogin ? <>{children}</> : <></>;
}
