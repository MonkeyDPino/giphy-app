import { useState, useEffect } from "react";
import Category from "./Category"
import GetTrendingTerms from "services/getTrendingTerms"

function TrendingSearches() {
    const [terms,SetTerms] = useState([])

    useEffect(() =>{
        GetTrendingTerms().then(result => SetTerms(result))
    },[])

    return ( <Category name="Tendencias en Giphy" keywords={terms}/> );
}

function LazyTrendingSearch(){
    const [show,setShow] = useState(false)
    
    const onChange = (entries) =>{
        if(entries[0].isIntersecting)setShow(true)
    }

    useEffect(() =>{
        const observer = new IntersectionObserver(onChange,{
            rootMargin:"100px"
        })
        observer.observe(document.getElementById("LazyTrending"))
    },[])

    return <div id="LazyTrending">
        {show?<TrendingSearches/>:null}
    </div>

}

export default LazyTrendingSearch;