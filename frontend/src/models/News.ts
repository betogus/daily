import { Profile } from "./Profile";

export type News = {
    news_id: string;
    profile: Profile;
    title: string;
    img: string;
    tags: string[];
    date: Date;
    readTime: number;
}