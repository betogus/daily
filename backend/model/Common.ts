import { v4 as uuidv4 } from 'uuid';

export default class Common {
    private id: string;

    constructor() {
        this.id = uuidv4();
    }
    
    public getId(): string {
        return this.id; 
    }
    
    public setId(value: string): void {
        this.id = value;
    }
}
