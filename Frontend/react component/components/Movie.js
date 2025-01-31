import './movie.css';

function Movie(props){

    return(<div className="movie-card">
            <img className="img-top" src={props.poster}/>
            <div className="card-body">
                <center>
                    <h4>{props.name}</h4>
                    <p>{props.zoner}</p>
                </center>
            </div>
    
    </div>);
}

export default Movie;