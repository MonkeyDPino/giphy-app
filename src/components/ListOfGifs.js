import Gif from "./Gif";
import "./ListOfGifs.css";

function ListOfGifs({ gifs }) {
  return (
    <div className="List__container">
      {gifs.map(({ id = "", title = "", url = "" }) => (
        <Gif key={id} id={id} title={title} url={url}></Gif>
      ))}
    </div>
  );
}

export default ListOfGifs;
