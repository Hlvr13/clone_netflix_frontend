import React, { Component } from 'react';
import Rate from 'rc-rate';

class CardMovie extends Component{
    state = {
        movie: this.props.movie,
        rank: this.props.movie.rank
    }

    render(){
        return(
            <div className = "card" style = {{width:"14rem"}}>
                <h5 className = "card-title" 
                    onClick = { () => this.props.redirect(this.state.movie._id) }
                >
                    {this.state.movie.name}
                </h5>
                <img src = {this.state.movie.image} alt = "Poster"/>
                <div className = "card-body">
                 <Rate defaultValue = {parseFloat(this.state.rank)}/>

                </div>

            </div>
        )
    }
}

export default CardMovie;