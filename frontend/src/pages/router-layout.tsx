import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/store";
import Header from "@/components/Header";
import {useCookies} from 'react-cookie';
import SideBar from "@/components/SideBar";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/hooks/redux";

export default function RouterLayout() {
  const [, setCookie, remove] = useCookies();
  const { isAuth, isExpired, accessToken } = useAppSelector(
    (state: RootState) => state.auth);
  
  useEffect(() => {
    if (accessToken) {
      setCookie('accessToken', accessToken)
    }
  }, [accessToken])

  useEffect(() => {
    if (isExpired) {
      //remove('accessToken'); me borra el token y luego se regenera
    }
  }, [isExpired]);
  
  return !isAuth ? (
    <Navigate to="/login" />
  ) : (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}
