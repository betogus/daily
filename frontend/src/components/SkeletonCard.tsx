import { FaRegBookmark, FaLink } from "react-icons/fa";
import { LuArrowBigUp } from "react-icons/lu";
import { TfiCommentAlt } from "react-icons/tfi";
import { Skeleton } from "./ui/skeleton";

export function SkeletonCard() {
  return (
    <div
      className="w-72 h-96 rounded-xl flex p-4 flex-col justify-between"
      style={{ borderWidth: 2, borderColor: "#363738d4" }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Skeleton className="rounded-full bg-[#464c55] p-4" />
        </div>
        <Skeleton className="w-64 h-6 bg-[#464c55]" />
        <Skeleton className="w-64 h-6 bg-[#464c55]" />
        <Skeleton className="w-64 h-6 bg-[#464c55]" />
      </div>
      <div>
        <div className="relative h-36">
          <Skeleton className="absolute inset-0 w-full h-full object-cover rounded-2xl bg-[#464c55]" />
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
}
