import News from "./News";

export default class NewsDetail extends News {
    private content: string;

    constructor(content: string = "some content") {
        super();
        this.content = content;
    }

    public getContent(): string {
        return this.content;
    }

    public setContent(value: string): void {
        this.content = value;
    }
}
