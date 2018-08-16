import React, { Component } from 'react';
import allMovies from '../../services/allMovies';

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

    render(){
        return(
            <div></div>
        )
    }

}

export default Movies;