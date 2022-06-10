import "./Gif.css";
import { Link } from "wouter";

function Gif({ url, id, title }) {
  return (
    <div className="gif__container">
      <Link to={`/gif/${id}`} className="gif">
        <h4> {title}</h4>
        <img loading="lazy" alt={title} src={url} />
      </Link>
    </div>
  );
}

export default Gif;
