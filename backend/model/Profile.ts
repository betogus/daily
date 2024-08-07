import Common from "./Common";

export default class Profile extends Common {
    name?: string;
    icon?: string;

    constructor(
        name: string = "unnamed"
    ) {
        super();
        this.name = name;
    }

    public getName(): string | undefined{
        return this.name;
    }
    
    public setName(value: string): void {
        this.name = value;
    }
}