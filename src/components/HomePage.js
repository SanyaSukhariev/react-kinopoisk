import {useState,useEffect} from 'react'
import {Link} from "react-router-dom";



const HomePage = () => {
    const [commitsList,setCommitsList]=useState([])

    const url = 'https://api.themoviedb.org/3/trending/all/day?api_key=8d4e0a5a0c37d4780eefdf617d0feea1';

    useEffect(()=>{
            fetch(url)
                .then(response =>response.json())
                .then(commits => setCommitsList(commits.results))
    },[])

    return (
        <div>

            <h2>HomePage netlify</h2>
            <p>домашняя страница со списком популярных кинофильмов.</p>

            {commitsList.filter(({title})=>title).map(({id,title})=><Link to={`/movies/${id}`}><ul><li>{title}</li></ul></Link>)
            }
        </div>
    )
}

export default HomePage