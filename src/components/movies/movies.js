import React, { Component } from 'react';
import allMovies from '../../services/allMovies';
import CardMovie from '../CardMovie/CardMovie';
import './movies.css'

class Movies extends Component{
    state = {
        movies:''
    }

    componentDidMount(){
        allMovies().then((resp) => {
            console.log(resp.data);
            this.setState({
                movies:resp.data.data.allMovies
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    redirect = (id) =>{
        this.props.history.push(`/movie/${id}`)
    }

    renderMovies = () =>{
        if(this.state.movies !== ""){
            let movies = this.state.movies.map((movie,index) =>{
                return(
                    <CardMovie key = {index} movie = {movie} redirect = {this.redirect}/>
                )
            })
            return movies;
        }else{
            return(
                <div>Loading...</div>
            )
        }
    }

    render(){
        return(
            <div className = "row justify-content-center">
                <div className = "col-md-10 col-lg-8 text-center">
                    <h3 className = "movies-title">All Movies</h3>
                    {this.renderMovies()}
                </div>

            </div>
        )
    }

}

export default Movies;