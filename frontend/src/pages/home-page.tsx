import NewsCard from "@/components/NewsCard";
import { News } from "@/models/News"
import NewsService from "@/services/NewsService";
import { useEffect, useState } from "react"


export default function HomePage() {

    const [news, setNews] = useState<News[]>()

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await NewsService.getNews();
                setNews(data);
            } catch (error) {
                console.log('Error al cargar las noticias');
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="p-12 flex gap-6 flex-wrap max-w-screen justify-center">
            {news?.map((item) => (
                <NewsCard key={item.id} item={item} />
            ))}
        </div>
    );
        
}
