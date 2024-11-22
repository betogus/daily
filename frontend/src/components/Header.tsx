import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FaRegBell, FaUser } from "react-icons/fa";
import { logout } from "@/redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }

  return (
    <div className=" w-full flex  flex-row h-16 items-center" style={{borderBottomColor: "darkslategray", borderBottomWidth: 1}}>
      <div className="basis-1/3">
        <button>Logo</button>
      </div>
      <div className="basis-1/3">
        <div className="max-w-98">
            <Input />
        </div>
      </div>
      <div className="basis-1/3 flex justify-evenly">
        <Button className="bg-white text-black" variant={"ghost"}><a href="/squads/create">New post</a></Button>
        <Button className="text-gray-400 hover:text-white" variant={"default"}><FaRegBell size={20}/></Button>
        <Button className="bg-gray-400 p-1 rounded-xl" ><FaUser size={30}/></Button>
        <Button className="bg-white text-black" variant={"ghost"} onClick={handleLogout}><a>log out</a></Button>
      </div>
    </div>
  );
};

export default Header;
