import {newsMockList} from "@/mock/news";
import { News } from "@/models/News";
import { NewsDetail } from "@/models/NewsDetail";
import { Post } from "@/models/Post";
import axios, { AxiosResponse } from "axios";



const BASE_URL = "http://localhost:8080/news";

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
    
    async getNewsById(id: string): Promise<NewsDetail> {
        try {
            const response = await axios.get(this.baseUrl+`/${id}`);
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

    async postNews(post: Post): Promise<AxiosResponse<any> | undefined> {
        try {
            const response: AxiosResponse<any> = await axios.post(this.baseUrl, post);
            return response;
        } catch (error) {
            console.error('Error al hacer la solicitud POST: ', error)
        }
    }

}

export default new NewsService();