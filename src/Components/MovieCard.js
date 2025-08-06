const MovieCard=({posterPath})=>{
    return (
        <div className="w-48 pr-4">
            <img alt="" src={"https://image.tmdb.org/t/p/w500" + posterPath}/>
        </div>
    )
}

export default MovieCard;