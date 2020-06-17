import * as actionCreators from '../index';
import { Url } from '../../../proprieties/proprieties';
import * as actionTypes from '../ActionTypes';
const axios = require('axios');


//:::::::::::::::::::::::::::::::
const CreateUserStateUpdate = (data) => {
    return {
        type: actionTypes.Update,
        data: data,
    };
}
//:::::::::::::::::::::::::::::::



export const CreateUser = (data, props) => {
    return (next) => {
        let IdToken = props.user.token
        console.log(IdToken);
        let config = {
            headers: {
                Authorization: "Beare: " + IdToken,
            }
        }
        //   console.log(data)
        let Bodey = {
            email: props.user.email,
            firstname: props.user.firstname,
            lastname: props.user.lastname,
            bcode: props.user.bcode,
            target: {
                email: data.email,
                firstname: data.firstname,
                lastname: data.lastname,
                bcode: data.bcode,
                password: data.password
            }

        }

        console.log(Bodey);
        axios.post(Url + "/Admin/CreateUser", Bodey, config)
            .then((response) => {
                console.log(response.data);

                if (response.data != null) {
                    next(CreateUserStateUpdate(response.data))
                    //props.history.push("/ReportActivity")
                }

            })
            .catch((error) => {
                console.log("erorr")
                // console.log(error.message);
                console.log(error.response.data)

            });

    }




};