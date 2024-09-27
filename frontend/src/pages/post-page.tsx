import { NewsDetail } from "@/models/NewsDetail";
import NewsService from "@/services/NewsService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const { postId } = useParams<string>();
  const [newsDetail, setNewsDetail] = useState<NewsDetail>();

  useEffect(() => {
    const fetchNews = async () => {
      if (postId) {
        try {
          const data = await NewsService.getNewsById(postId);
          console.log(data)
          setNewsDetail(data);
        } catch (error) {
          console.log("Error al cargar la noticia");
        }
      } else {
        console.log("No hay ID");
      }
    };

    fetchNews();
  }, []);
  return (
    <div
      className="w-72 h-96 rounded-xl flex p-4 flex-col justify-between"
      style={{ borderWidth: 2, borderColor: "#363738d4" }}
    >
      NewsDetail
    </div>
  );
};

export default PostPage;
