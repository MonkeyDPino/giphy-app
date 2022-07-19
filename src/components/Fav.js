import {useCallback} from "react"

function Fav({id}) {
    
    const handleClick = useCallback(() =>{
        alert(id)
    },[id])

    return (
    <button handleClick={handleClick}>
        <span aria-label="Fav Gif" role ="img">❤</span>
    </button> );
}

export default Fav;