import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import watchMovie from '../../services/watchMovie'

export default class WatchMovie extends Component{
    state = {
        movieData:''
    }

    componentDidMount(){
        watchMovie(this.props.match.params.id).then((resp) => {
            console.log(resp.data);
            this.setState({
                movieData:resp.data.data.singleMovie,
                youtubeID:resp.data.data.singleMovie.url
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    loadMovie(){
        const playerOptions = {
            height: '400',
            width: '800',
            playerVars:{
                autoplay:1
            }
        }
        if(!this.state.movieData){
            return(
                <div></div>
            )


        }else{
            let url = this.youtubeParser(this.state.movieData.url)
            return(
                <YouTube videoId = {url} opts = {playerOptions}></YouTube>
            )
        }
    }

    youtubeParser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return(match && match[7].length == 11) ? match[7] : false;
    }
    

    render(){

        return(
            <div>
                <div>
                   <div>You are watching {this.state.movieData.name}</div> 
                    {this.loadMovie()}
                </div>
            </div>
        )
    }

}