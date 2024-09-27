import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import { useState } from "react";


export default function OnboardingPage() {
  const [isLoginPage, setIsLoginPage] = useState<boolean>(true)

  return (
    <div className="flex justify-center w-full h-screen pt-24">
      {isLoginPage && <Login setIsLoginPage={setIsLoginPage}/> }
      {!isLoginPage && <SignUp setIsLoginPage={setIsLoginPage}/>}
    </div>
  );
}
