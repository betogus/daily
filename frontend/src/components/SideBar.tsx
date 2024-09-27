import { useState } from "react";
import { Button } from "./ui/button";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { NavItem } from "@/models/NavItem";
import {
  FaHashtag,
  FaLink,
  FaPlus,
  FaRegBookmark,
  FaUser,
} from "react-icons/fa";
import { PiAtom } from "react-icons/pi";
import { RiFireLine } from "react-icons/ri";
import { CgComment } from "react-icons/cg";
import { TfiWorld } from "react-icons/tfi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsTerminal } from "react-icons/bs";
import { BiCommentError } from "react-icons/bi";

type NavListByCategory = {
  id: number,
  name: string;
  navList: NavItem[];
};

const SideBar = () => {
  const [isButtonVisible, setIsButtonVisible] = useState<Boolean>(false);
  const [isSideBarOpened, setIsSideBarOpened] = useState<Boolean>(false);

  const navListByCategory: NavListByCategory[] = [
    {
      id: 1,
      name: "feed",
      navList: [
        {
          id: 1,
          name: "My feed",
          icon: <FaUser />,
          route: "/my-feed",
        },
        {
          id: 2,
          name: "New feed",
          icon: <FaPlus />,
          route: "/new-feed",
        },
      ],
    },
    {
      id: 2,
      name: "Squads",
      navList: [
        {
          id: 3,
          name: "Public Squads",
          icon: <PiAtom />,
          route: "/public-squads",
        },
        {
          id: 4,
          name: "New squad",
          icon: <FaPlus />,
          route: "/new-squad",
        },
      ],
    },
    {
      id: 3,
      name: "Discover",
      navList: [
        {
          id: 5,
          name: "Explore",
          icon: <RiFireLine />,
          route: "/explore",
        },
        {
          id: 6,
          name: "Discussions",
          icon: <CgComment />,
          route: "/discussions",
        },
        {
          id: 7,
          name: "Tags",
          icon: <FaHashtag />,
          route: "/tags",
        },
        {
          id: 8,
          name: "Sources",
          icon: <TfiWorld />,
          route: "/sources",
        },
        {
          id: 9,
          name: "LeaderBoard",
          icon: <FiUsers />,
          route: "/leaderboard",
        },
      ],
    },
    {
      id: 4,
      name: "Activity",
      navList: [
        {
          id: 10,
          name: "Submit a link",
          icon: <FaLink />,
          route: "/submit-a-link",
        },
        {
          id: 11,
          name: "Bookmarks",
          icon: <FaRegBookmark />,
          route: "/bookmarks",
        },
        {
          id: 12,
          name: "History",
          icon: <MdOutlineRemoveRedEye />,
          route: "/history",
        },
      ],
    },
    {
      id: 5,
      name: "others",
      navList: [
        {
          id: 13,
          name: "Docs",
          icon: <IoDocumentTextOutline />,
          route: "/docs",
        },
        {
          id: 14,
          name: "Changelog",
          icon: <BsTerminal />,
          route: "/changelog",
        },
        {
          id: 15,
          name: "Feedback",
          icon: <BiCommentError />,
          route: "/feedback",
        },
      ],
    },
  ];

  const handleMouseEnter = () => {
    setIsButtonVisible(true);
  };

  const handleMouseLeave = () => {
    if (isSideBarOpened) {
      setIsButtonVisible(false);
    }
  };

  const openCloseSideBar = () => {
    setIsSideBarOpened(!isSideBarOpened);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={isSideBarOpened ? "w-60  flex h-[calc(100vh-4rem)]" : "w-16 flex h-[calc(100vh-4rem)]"}
      style={{ transition: "width 0.3s ease" }}
    >
      <div className="w-full flex flex-col pt-8" style={{borderRightWidth: 1, borderColor: "darkslategray"}}>
        {navListByCategory.map((category) => (
          <div key={category.id} className={category.name == "others" ? "mt-auto" : ""}>
            {category.name !== "feed" && category.name !== "others" && (
              <p className="h-10">{isSideBarOpened ? category.name : ""}</p>
            )}
            {category.navList.map((item) => (
              <div
                key={item.id}
                className="p-4 flex items-center cursor-pointer hover:bg-gray-600 text-slate-300 hover:text-slate-200 m-0 text-sm py-1"
              >
                <div
                  className={
                    item.name === "My feed"
                      ? "bg-gray-400 p-1 rounded-md"
                      : "bg-gray-800 p-1 rounded-md"
                  }
                >
                  {item.icon}
                </div>
                <span className={isSideBarOpened ? "ml-2" : "hidden"}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div>
        {isButtonVisible && (
          <div className="fixed pt-4">
            <Button
              variant={"secondary"}
              size={"xs"}
              onClick={openCloseSideBar}
              style={{ left: -10, position: "relative" }}
            >
              {isSideBarOpened ? (
                <SlArrowLeft size={14} />
              ) : (
                <SlArrowRight size={14} />
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
