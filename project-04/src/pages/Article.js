import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";
import { useEffect } from "react";

const Article = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;
  const { data: article, isPending, error } = useFetch(url);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(()=> {navigate("/")}, 2000);
    }
  }, [navigate, error]);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>Written by: {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
};

export default Article;
