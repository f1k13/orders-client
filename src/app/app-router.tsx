import { $auth } from "@/entities/auth/model/auth";
import { getUserFx } from "@/entities/user/lib/user-fx";
import NotFoundPage from "@/pages/not-found-page";
import { setTokenToApi } from "@/shared/api/api";
import { getToken } from "@/shared/lib/localstorage/token-handlers";
import { HOME_ROUTE, REGISTER_ROUTE } from "@/shared/router/paths";
import { authRoutes, publicRoutes } from "@/shared/router/router";
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const AppRouter = () => {
  const isAuth = useUnit($auth);
  console.log(isAuth);
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    if (isAuth) {
      navigate(HOME_ROUTE);
    } else {
      navigate(REGISTER_ROUTE);
    }

    setTokenToApi(String(token));
    getUserFx();
  }, [isAuth]);

  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      {publicRoutes.map(({ path, element }) => (
        <Route path={path} key={path} element={element} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
