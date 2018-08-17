import axios from 'axios';
import getToken from '../resolvers/getToken'
import constantes from '../const';

export default (id) => {
    console.log(id);
    return axios({
        url: constantes.url + "graphql",
        method: "post",
        data:{
            query:`
            query{
                singleMovie(id:"${id}"){
                    _id,
                    name,
                    synopsis,
                    year,
                    genre{
                        name
                    }
                    rating{
                        name,
                    },
                    url,
                    length
                }
            }
            `
        },headers: {'Authorization': 'JWT ' + getToken()}
    })
}

