import {useState,useEffect} from 'react'
import {Link, useParams} from "react-router-dom";


const Reviews = ({movieId}) => {

    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&language=en-US&page=1`;
    const [stateReviews, setStateReviews] = useState({results:[]})


    useEffect(()=>{
        fetch(url)
            .then((response)=>response.json())
            .then((commits)=>setStateReviews(commits))
    },[])


    return (
        <div>
            {/*<Link to="/movies/:movieId/reviews"> Reviews </Link>*/}
            <h2>Reviews</h2>
            <p> информация об обзорах</p>

            {stateReviews.results.length===0?"We dont have any reviews for this movie":stateReviews.results.map((allInfo)=>
            <ul><li><strong>{"Author: " + allInfo.author}</strong><p>{allInfo.content}</p></li></ul>)}
        </div>
    )
}

export default Reviews