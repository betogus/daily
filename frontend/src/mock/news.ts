import { News } from "@/models/New";
import { FaUser } from "react-icons/fa";
import newsImg from "@/assets/news.avif";

const newsMock: News = {
    id: 1,
    title: "Profile Social Link",
    profile: {
        id: 1,
        name: "Dev Squad",
        icon: typeof FaUser,
    },
    img: newsImg,
    tags: ["Javascript", "React"],
    date: new Date(),
    readTime: 2,
};
const newsMockList: News[] = [];
for (let i = 0; i < 10; i++) {  
    const newsItem: News = { ...newsMock, id: i + 1 };
    newsMockList.push(newsItem);
}

export {newsMockList}
