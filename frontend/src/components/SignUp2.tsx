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

interface Props {
  email: string;
  setIsLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp2 = ({ email, setIsLoginPage }: Props) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          onClick={() => setIsLoginPage(true)}
          className="underline decoration-2 cursor-pointer text-white"
        >
          Log in
        </a>
      </p>
    </div>
  );
};

export default SignUp2;
