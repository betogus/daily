import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ExperienceLevel } from "@/models/ExperienceLevel";
import { User } from "@/models/User";
import AuthService from "@/services/AuthService";
import { useNavigate } from "react-router-dom";
import { toast } from "./ui/use-toast";

interface Props {
  email: string;
}

const SignUp2 = ({ email }: Props) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let user: User = {name, password, username, email}
    const res = await AuthService.signup(user);
    if (res?.data?.status(409)) {
      toast({
        variant: "destructive",
        title: res.data.message,
      });
    } else if (res?.data?.status(201)) {
      toast({
        title: res.data.message,
      });
      navigate("/login")
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
      });
    }

  };


  return (
    <div className="w-1/5 text-center min-w-[350px] flex flex-col gap-4">
      <p className="text-2xl font-bold">Sign up</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="email"
          value={email}
          placeholder="Email"
          disabled
          className="bg-[#1A1F26] hover:bg-[#363738d4] text-gray-400 border-none hover:text-white rounded-xl flex justify-between focus:bg-transparent w-full"
        ></Input>
        <Input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e: any) => setName(e.target.value)}
          required
          className="bg-[#1A1F26] hover:bg-[#363738d4] text-gray-400 border-none hover:text-white rounded-xl flex justify-between focus:bg-transparent w-full"
        ></Input>
        <Input
          type="password"
          value={password}
          placeholder="Create a password"
          onChange={(e: any) => setPassword(e.target.value)}
          required
          className="bg-[#1A1F26] hover:bg-[#363738d4] text-gray-400 border-none hover:text-white rounded-xl flex justify-between focus:bg-transparent w-full"
        ></Input>
        <Input
          type="text"
          value={username}
          placeholder="Enter a username"
          onChange={(e: any) => setUsername(e.target.value)}
          required
          className="bg-[#1A1F26] hover:bg-[#363738d4] text-gray-400 border-none hover:text-white rounded-xl flex justify-between focus:bg-transparent w-full"
        ></Input>
        <Select>
          <SelectTrigger className="bg-[#1A1F26] hover:bg-[#363738d4] text-gray-400 border-none hover:text-white rounded-xl flex justify-between focus:bg-transparent w-full">
            <SelectValue placeholder="Experience Level" />
          </SelectTrigger>
          <SelectContent className="bg-[#1A1F26]  text-gray-400 border-none rounded-xl flex justify-between  w-full">
            {Object.values(ExperienceLevel).map((item: string) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant={"secondary"}
          className="w-full font-bold rounded-xl"
          type="submit"
        >
          Sign up
        </Button>
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
  );
};

export default SignUp2;
