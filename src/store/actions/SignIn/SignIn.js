import * as actionCreators from '../index';
import { Url } from '../../../proprieties/proprieties';
import * as actionTypes from '../ActionTypes';
const axios = require('axios');


//:::::::::::::::::::::::::::::::
const SignStateUpdate = (data) => {
    return {
        type: actionTypes.Update,
        data: data,
    };
}
//:::::::::::::::::::::::::::::::



export const SignIn = (data, props) => {
    return (next) => {
        /*let IdToken = session.getIdToken().jwtToken
        // console.log(IdToken);
        let config = {
            headers: {
                Authorization: IdToken,
            }
        }*/

        let Bodey = {
            email: data.email,
            password: data.password
        }

        axios.post(Url + "/SignIn", Bodey)
            .then((response) => {
                console.log(response.data);

                if (response.data != null) {
                    next(SignStateUpdate(response.data))
                }

            })
            .catch((error) => {
                console.log("erorr")
                // console.log(error.message);
                console.log(error.response.data)

            });

    }




};