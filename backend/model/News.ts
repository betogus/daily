import Common from "./Common";
import Profile from "./Profile";

export default class News extends Common {
    private profile: Profile;
    private title: string;
    private img: File;
    private tags: string[];
    private date: Date;
    private readTime: number;
    
    constructor(
        profile: Profile = new Profile(),
        title: string = "Untitled",
        img: File = new File([], "default.jpg"),
        tags: string[] = ["node", "express"],
        date: Date = new Date(),
        readTime: number = 3
    ) {
        super();
        this.profile = profile;
        this.title = title;
        this.img = img;
        this.tags = tags;
        this.date = date;
        this.readTime = readTime;
    }
    
    public getProfile(): Profile {
        return this.profile;
    }
    
    public setProfile(value: Profile) {
        this.profile = value;
    }

    public getTitle(): string {
        return this.title;
    }
    
    public setTitle(value: string) {
        this.title = value;
    }

    public getTags(): string[] {
        return this.tags;
    }
    
    public setTags(value: string[]) {
        this.tags = value;
    }

    public getDate(): Date {
        return this.date;
    }
    
    public setDate(value: Date) {
        this.date = value;
    }

    public getReadTime(): number {
        return this.readTime;
    }
    
    public setReadTime(value: number) {
        this.readTime = value;
    }

    public getImg(): File {
        return this.img;
    }
    
    public setImg(value: File) {
        this.img = value;
    }

    print = (): string => `${this.title}`;

}


