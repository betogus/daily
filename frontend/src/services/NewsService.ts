import {newsMockList} from "@/mock/news";
import { News } from "@/models/New";
import axios from "axios";



const BASE_URL = "https://api.example.com/news";

class NewsService {

    protected baseUrl: string;

    constructor() {
        this.baseUrl = BASE_URL;
    }

    async getNews(): Promise<News[]> {
        try {
            const response = await axios.get(this.baseUrl);
            return response.data;
        } catch (error) {
            console.error('Error al hacer la solicitud GET:', error);
            throw error;
        }
    }
    

    async getNewsTest(): Promise<News[]> {
        try {
            const response = newsMockList
            console.log('Datos recibidos con GET:', response);
            return response; 
        } catch (error) {
            console.error('Error al hacer la solicitud GET:', error);
            throw error; 
        }
    }

}

export default new NewsService();