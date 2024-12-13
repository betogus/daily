import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { PiGithubLogoFill } from "react-icons/pi";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";
import SignUp2 from "../components/SignUp2";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [showSignUp2, setShowSignUp2] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSignUp2(true);
  };

  return !showSignUp2 ? (
    <div className="w-full min-h-screen bg-[#0E1217] flex justify-center items-center text-center">
      <div className="w-1/5 text-center min-w-[350px] flex flex-col gap-4">
        <p className="text-2xl font-bold">Sign up</p>
        <p className="text-gray-400">
          Once you sign up, your personal feed will be ready to explore.
        </p>
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

          <div className="flex justify-between items-center">
            <a className="text-gray-400 underline decoration-2 cursor-pointer">
              Forgot password?
            </a>
            <Button
              variant={"secondary"}
              className="w-32 font-bold rounded-xl"
              type="submit"
            >
              Sign up
            </Button>
          </div>
        </form>
        <div className="w-full border-t border-gray-300"></div>
        <p className="w-full text-gray-400">
          Already using daily.dev?
          <a
            onClick={() => navigate("/login")}
            className="underline decoration-2 cursor-pointer text-white"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  ) : (
    <div className="w-full min-h-screen bg-[#0E1217] flex justify-center items-center text-center">
      <SignUp2 email={email} />
    </div>
  );
};

export default SignUp;
