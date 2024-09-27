import NewsCard from "@/components/NewsCard";
import { SkeletonCard } from "@/components/SkeletonCard";
import { News } from "@/models/News";
import NewsService from "@/services/NewsService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [news, setNews] = useState<News[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const defaultSkeletons: number = 15;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await NewsService.getNews();
        console.log(data)
        setNews(data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error al cargar las noticias");
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
      navigate("/onboarding");
  }, []);

  return (<div></div>)
 /*  return (
    <div className="p-12 flex gap-6 flex-wrap max-w-screen justify-center">
      {isLoading
        ? Array.from({ length: defaultSkeletons }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        : news?.map((item, index) => <NewsCard key={index} item={item} />)}
    </div>
  ); */
}
