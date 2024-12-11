import Hero from './Hero';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const movieIDs = `/movies/${movie.imdbID}`

    function posterUrl() {
        if (movie.Poster === "N/A") {
            return "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
        } else {
            return movie.Poster
        }
    }

    return (
        <div className="col-lg-3 col-md-3 col-sm-3 col-2 my-4">
            <div className="card">
                <img src={posterUrl()} className="card-img-top" alt={movie.Title}/>
                <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <Link to={movieIDs} className="btn btn-primary">details</Link>
                </div>
            </div>
        </div>
    );
}


export default function SearchView({ keyword, searchResult}) {
    const titles = `you are searching for ${keyword}`
    let movieResult = 'please input search in search bar'
    if (searchResult) {
        movieResult = searchResult.map((obj, i) => {
            return <MovieCard movie={obj} key={i}/>
        })
    } else { movieResult = "cant find what you are searching for"}


    return (
        <>
            <Hero text={titles}/>
            {movieResult && 
             <div className='container'>
                <div className='row'>
                    {movieResult}
                </div>
             </div>}
        </>

    )
}