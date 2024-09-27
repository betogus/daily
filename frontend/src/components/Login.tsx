import React, { useState } from "react";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { PiGithubLogoFill } from "react-icons/pi";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Props {
  setIsLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setIsLoginPage }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
  };

  return (
    <div className="w-1/5 text-center min-w-[350px] flex flex-col gap-4">
      <p className="text-2xl font-bold">Log in</p>
      <Button variant={"secondary"} className="w-full font-bold rounded-xl">
        {" "}
        <FaFacebookF size={"l"} className="w-10" />
        Facebook
      </Button>
      <Button variant={"secondary"} className="w-full font-bold rounded-xl">
        {" "}
        <FcGoogle size={"l"} className="w-10" />
        Google
      </Button>
      <Button variant={"secondary"} className="w-full font-bold rounded-xl">
        {" "}
        <PiGithubLogoFill size={"l"} className="w-10" />
        Github
      </Button>
      <Button variant={"secondary"} className="w-full font-bold rounded-xl">
        {" "}
        <FaApple size={"l"} className="w-10" />
        Apple
      </Button>
      <p>or</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e: any) => setEmail(e.target.value)}
          required
          className="bg-[#1A1F26] hover:bg-[#363738d4] text-gray-400 border-none hover:text-white rounded-xl flex justify-between focus:bg-transparent w-full"
        ></Input>
        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e: any) => setPassword(e.target.value)}
          required
          className="bg-[#1A1F26] hover:bg-[#363738d4] text-gray-400 border-none hover:text-white rounded-xl flex justify-between focus:bg-transparent w-full"
        ></Input>
        <div className="flex justify-between items-center">
          <a className="text-gray-400 underline decoration-2 cursor-pointer">
            Forgot password?
          </a>
          <Button
            type="submit"
            variant={"secondary"}
            className="w-32 font-bold rounded-xl"
            
          >
            Log in
          </Button>
        </div>
      </form>

      <div className="w-full border-t border-gray-300"></div>
      <p className="w-full text-gray-400">
        Not a member yet?{" "}
        <a
          onClick={() => setIsLoginPage(false)}
          className="underline decoration-2 cursor-pointer text-white"
        >
          Sign up
        </a>
      </p>
    </div>
  );
};

export default Login;
