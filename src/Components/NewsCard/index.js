import "./index.css";

function NewsCard({
  title,
  description,
  content,
  url,
  image,
  publishedAt,
  source,
}) {
  return (
    <div className="news-card">
      <div className="image-div">
        <img src={image} alt="news" />
      </div>

      <div className="info-container">
      <p className="source">Source: {source.name}</p>
        <h1 className="title">{title}</h1>
        <p className="published">Published: {new Date(publishedAt).toDateString()}</p>
        <p className="description">{description}</p>
        <p className="full">Full Story: <a href={url}>{url}</a></p>
      </div>
    </div>
  );
}

export default NewsCard;
