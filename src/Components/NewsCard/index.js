function NewsCard({
  title,
  description,
  content,
  url,
  image,
  publishedAt,
  source,
}) {
  return <div className="news-card">
    <div>
        <h1>{title}</h1>
        <img src={image} alt="news"/>
        <p>{description}</p>
    </div>
  </div>;
}

export default NewsCard;


