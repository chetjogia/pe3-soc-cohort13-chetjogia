import { data } from "../../testdata";
import NewsCard from "../NewsCard";

function NewsContainer() {
  return (
    <div className="news-container">
      {data.map((element) => (
        <NewsCard
          title={element.title}
          description={element.description}
          content={element.content}
          url={element.url}
          image={element.image}
          publishedAt={element.publishedAt}
          source={element.source}
        />
      ))}
    </div>
  );
}

export default NewsContainer;
