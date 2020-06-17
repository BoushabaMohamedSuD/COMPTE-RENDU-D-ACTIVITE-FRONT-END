import * as actionCreators from '../index';
import { Url } from '../../../proprieties/proprieties';
import * as actionTypes from '../ActionTypes';
const axios = require('axios');


//:::::::::::::::::::::::::::::::
const TestToReducer = (name) => {
    return {
        type: actionTypes.Test,
        name: name,
    };
}
//:::::::::::::::::::::::::::::::



export const Test = (name) => {
    return (next) => {
        next(TestToReducer(name));
    }


};