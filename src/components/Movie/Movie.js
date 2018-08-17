import React, { Component } from 'react';
import singleMovie from '../../services/singleMovie';
import { Link } from 'react-router-dom';
import '../Movie/Movie.css'

class Movie extends Component{

    state = {
        id: this.props.match.params.id,
        movie: ""
    }

    componentDidMount(){
        console.log("Hola!")
        singleMovie(this.state.id).then((resp) => {
            console.log(resp.data);
            this.setState({
                movie:resp.data.data.singleMovie
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    loadMovie(){
        const {_id,
            name,
            image,
            synopsis,
            genre,
            rating,
            year,
            url,
            length
        } = this.state.movie;

        if(!this.state.movie){
            return(
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }else{
            return(
                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-4">
                            <img src = {image} alt = {name}/>
                        </div>
                        <div className = "col movie-info">
                            <h1><strong>{name}</strong>{year}</h1>
                            <span><small>Runtime: {length}</small></span>
                            <h2>Plot</h2>
                            <h3>{synopsis}</h3>
                        </div>
                        <div className = "row justify-content-md-center">
                            <Link className = "btn btn-info boton-ver" to = {`/ver/${_id}`}>
                                Watch
                            </Link>
                            <Link className = "btn btn-info boton-volver" to = "/movies">
                                Back
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                {this.loadMovie()}
            </div>
        )
    }
}

export default Movie;