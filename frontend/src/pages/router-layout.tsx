import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/store";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function RouterLayout() {
  const { isAuth } = useSelector((state: RootState) => state.auth);
    console.log(isAuth)
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
