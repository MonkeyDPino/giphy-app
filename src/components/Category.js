import "./Category.css"
import {memo} from "react";
import { Link } from "wouter";
function Category({keywords,name}) {
  return (
    <div className="category">
      <h3 className="category__title">{name}</h3>
      <ul>
        {keywords.map((gif) => (
          <li key={gif}>
            <Link to={`/search/${gif}`}>Gifs de {gif}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(Category);
