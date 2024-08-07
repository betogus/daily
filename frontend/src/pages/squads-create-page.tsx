import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { useRef, useState } from "react";
import { FiUsers } from "react-icons/fi";
import { MdAddAPhoto } from "react-icons/md";
import { PiAtomLight } from "react-icons/pi";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

export default function SquadsCreatePage() {
  const [isNewPost, setIsNewPost] = useState<Boolean>(true);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex justify-center w-full">
      <div
        className="h-[calc(100vh-4rem)]"
        style={{
          width: "40rem",
          borderRightWidth: 1,
          borderLeftWidth: 1,
          borderColor: "#363738d4",
        }}
      >
        <div
          style={{
            borderBottomWidth: 1,
            borderColor: "#363738d4",
            height: "3.5rem",
          }}
          className="flex items-center p-4"
        >
          <Button
            variant={isNewPost ? "secondary" : "link"}
            className={
              isNewPost
                ? "h-8 rounded-lg bg-slate-600 text-white hover:bg-slate-600 underline decoration-2 underline-offset-[20px]"
                : "h-8 text-white hover:no-underline"
            }
            onClick={() => setIsNewPost(true)}
          >
            New post
          </Button>
          <Button
            variant={!isNewPost ? "secondary" : "link"}
            className={
              !isNewPost
                ? "h-8 rounded-lg bg-slate-600 text-white hover:bg-slate-600 underline decoration-2 underline-offset-[20px]"
                : "h-8 text-white hover:no-underline"
            }
            onClick={() => setIsNewPost(false)}
          >
            Share a link
          </Button>
        </div>
        <div className="p-6 flex flex-col items-start gap-6">
          <Popover>
            <PopoverTrigger>
              <Button
                variant="default"
                className="bg-[#1A1F26] hover:bg-[#363738d4] text-gray-400 hover:text-white w-80 rounded-xl flex justify-between "
              >
                <div className="flex">
                  <FiUsers className="mx-2 size-5" />
                  <p className="mx-2 text-md"> Select Squad</p>
                </div>
                <SlArrowDown />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 m-2 bg-[#1A1F26]">
              <div
                className="w-80 h-96 rounded-lg p-2"
                style={{ borderWidth: 2, borderColor: "#363738d4" }}
              >
                <div className="flex items-center justify-between hover:bg-slate-600 hover:rounded-lg cursor-pointer p-2">
                  <div className="flex justify-between items-center">
                    <div className="rounded-full p-2 bg-slate-400 text-white mr-2">
                      <PiAtomLight size={30} />
                    </div>
                    <span>Create new Squad</span>
                  </div>
                  <SlArrowRight size={20} />
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Button
            onClick={handleButtonClick}
            variant={"secondary"}
            className="rounded-2xl text-md w-52 h-28 bg-slate-800 text-white hover:bg-slate-800 p-0"
          >
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
              className="p-8 bg-slate-500"
            />
            {!imageUrl ? (
              <a className="flex items-center">
                <MdAddAPhoto size={16} className="mr-2" />
                Thumbnail
              </a>
            ) : (
              <img src={imageUrl} alt="Imagen" className="w-full h-full max-w-full max-h-full object-cover rounded-2xl" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
