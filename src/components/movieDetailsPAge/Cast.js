import {useState,useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import classes from '../movieDetailsPAge/Cast.module.css'


const Cast = ({movieId}) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&language=en-US`;
    const [stateCast, setStateCast] = useState({cast:[]})
    const imgUrl = "https://image.tmdb.org/t/p/w500";

    useEffect(()=>{
        fetch(url)
            .then((response)=>response.json())
            .then((commits)=>setStateCast(commits))
    },[])
    return (
        <div>
            <h2>Cats</h2>
            <p>информация о актерском составе</p>
        <div>
            {stateCast.cast.filter(({profile_path})=>profile_path).map((imgCast)=>
                <li>
                    <img className={classes.img} src={imgUrl + imgCast.profile_path} />
                    <ul><li>{imgCast.name}</li>
                    <li>{"Character " + imgCast.character}</li>
                    </ul>
                </li>)}
        </div>


        </div>
    )
}

export default Cast