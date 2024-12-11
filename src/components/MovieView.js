import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function MovieView() {

    const { id } = useParams()

    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=8be00d67&i=${id}`)
         .then(response => response.json())
         .then(data => {
            setMovieDetails(data)
            setIsLoading(false)
         })
    }, [id])

    /* setMovieDetails(data)
    setIsLoading(false)
    console.log(data) */

    function movieDetailLoader() {
        if(movieDetails.Response === "False") {
            return (
                <>
                <Hero text='404 Error page not Found'/>
                </>
            )
        }

        if(isLoading) {
            return (
                <>
                <Hero text='Loading...'/>
                </>
            )
        }
        if(movieDetails) {
            
            function posterUrl() {
                if (movieDetails.Poster === "N/A") {
                    return 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                } else {
                    return movieDetails.Poster
                }
            }

            return (
                <>
                <Hero text={movieDetails.Title}/>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <img src={posterUrl()} alt={movieDetails.Title + "Poster"} style={{maxWidth: "300px"}}/>
                        </div>
                        <div className='col-md-9'>
                            <h2>{movieDetails.Title}</h2>
                            <p className="lead">
                                {"Plot: " + movieDetails.Plot}
                            </p>
                        </div>
                    </div>
                </div>
                </>
            )
        }
    } 

    return (movieDetailLoader())
}