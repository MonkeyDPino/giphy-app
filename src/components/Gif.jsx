import "./Gif.css";
import { Link } from "wouter";
import { memo } from "react";
import Fav from "components/Fav";

function Gif({ url, id, title }) {
  return (
    <div className="gif__container">
      <div className="gif__buttons">
        <Fav id={id}/>
      </div>
      <Link to={`/gif/${id}`} className="gif">
        <h4> {title}</h4>
        <img loading="lazy" alt={title} src={url} />
      </Link>
    </div>
  );
}

export default memo(Gif);
