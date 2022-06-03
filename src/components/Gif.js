import "./Gif.css";
import { Link} from "wouter";

function Gif({ url, id, title }) {
  return (
    <Link to={`/gif/${id}`}  className="gif">
        <h4> {title}</h4>
        <img loading="lazy" alt={title} src={url} />
    </Link>
  );
}

export default Gif;
