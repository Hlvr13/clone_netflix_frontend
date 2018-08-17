import axios from 'axios';
import getToken from '../resolvers/getToken';
import constante from '../const';

export default () => {
    return axios({
        url:constante.url + 'graphql',
        method: 'post',
        data:{
            query:`
                query{
                    allMovies{
                        _id,
                        image,
                        name,
                        genre{
                            name,
                            description
                        },
                        synopsis,
                        cast,
                        year,
                        rank,
                        length,
                        rating{
                            name,
                            description,
                            age
                        },
                        url
                    }
                }
            `
        },headers:{'Authorization':'JWT ' + getToken()}
    })
}