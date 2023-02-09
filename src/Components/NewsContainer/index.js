import { data } from "../../testdata";
import './index.css'
import NewsCard from "../NewsCard";

function NewsContainer({newsData}) {
  if(newsData){
    return (
      <div className="news-container">
        {newsData.map((element) => (
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
  else{
    return <p className="nothing-returned">...No Results for current search</p>
  }

}

export default NewsContainer;
