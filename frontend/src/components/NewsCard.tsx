import { News } from "@/models/News";
import React from "react";
import { FaUser } from "react-icons/fa";
import { Button } from "./ui/button";
import { LuArrowBigUp } from "react-icons/lu";
import { TfiCommentAlt } from "react-icons/tfi";
import { FaRegBookmark } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

interface Props {
  item: News;
}

const NewsCard = ({ item }: Props) => {
  const profileIcon = React.isValidElement(item.profile?.icon) ? (
    item.profile?.icon
  ) : (
    <FaUser />
  );

  return (
    <div
      className="w-72 h-96 rounded-xl flex p-4 flex-col justify-between"
      style={{ borderWidth: 2, borderColor: "#363738d4" }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <div className="rounded-full bg-[#464c55] p-1">
            {React.isValidElement(profileIcon) ? profileIcon : null}
          </div>
          <p>{item.profile?.name}</p>
        </div>
        <p className="text-xl">{item.title}</p>
      </div>
      <div>
        <div>
          {item.tags?.map((tag) => (
            <Button
              variant={"outline"}
              className="bg-transparent p-1 rounded-lg text-xs h-6 m-1"
              style={{
                borderWidth: 1,
                borderColor: "#464c55",
                color: "#464c55",
              }}
              key={tag}
            >
              #{tag}
            </Button>
          ))}
        </div>
        <div className="text-sm text-[#464c55] my-1">
        {/* {new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "numeric",
        }).format(item.date)} */} · {item.readTime}m read time 
        </div>
        
        <div className="relative h-36"> 
        <img
          src={item.img}
          alt="news"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
      </div>
        <div className="flex justify-between pt-2 items-center text-[#464c55] cursor-pointer">
          <div>
            <LuArrowBigUp size={25} className="hover:text-white" />
          </div>
          <div>
            <TfiCommentAlt className="hover:text-white" />
          </div>

          <div>
            <FaRegBookmark className="hover:text-white" />
          </div>

          <div>
            <FaLink className="hover:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
