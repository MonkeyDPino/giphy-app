import Gif from "./Gif";
import "./ListOfGifs.css";
import Spinner from "components/Spinner";

function ListOfGifs({ gifs, loading }) {
  return (
    <div className="ListOfGifs">
      {loading ? (
        <Spinner />
      ) : (
        <div className="List__container">
          {gifs.map(({ id = "", title = "", url = "" }) => (
            <Gif key={id} id={id} title={title} url={url}></Gif>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListOfGifs;
