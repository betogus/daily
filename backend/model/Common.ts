import { v4 as uuidv4 } from 'uuid';


export default class Common {
    private id: string;

    constructor() {
        this.id = uuidv4();
    }
    
    public get_id(): string {
        return this.id; 
    }
}

