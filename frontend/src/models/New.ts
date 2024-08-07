import { Profile } from "./Profile";

export type News = {
    id: number;
    profile: Profile;
    title: string;
    img: string;
    tags: string[];
    date: Date;
    readTime: number;
}