import Gif from "./Gif";
import "./ListOfGifs.css";
import Spinner from "components/Spinner";

function ListOfGifs({ gifs, loading,loadingNext=false }) {
  if (loading) {
    return (
      <div className="ListOfGifs">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="ListOfGifs">
        <div className="List__container">
          {gifs.map(({ id = "", title = "", url = "" },index) => (
            <Gif key={id+index} id={id} title={title} url={url}></Gif>
          ))}
          {loadingNext?<Spinner/>:<></>}
        </div>
      </div>
    );
  }
}

export default ListOfGifs;
