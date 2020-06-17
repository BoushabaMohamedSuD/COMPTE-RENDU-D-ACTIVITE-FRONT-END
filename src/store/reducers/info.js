import * as actionTypes from '../actions/ActionTypes';
import { updateObject } from '../utility.js';

let initialUserStateSerialize = localStorage.getItem('UserState');
let initialUserState = JSON.parse(initialUserStateSerialize);

/*console.log(initialUserState);
console.log("-------");*/

if (initialUserState == undefined || initialUserState == null) {
    initialUserState = {
        titleApp: "eBAR"

    };

    initialUserStateSerialize = JSON.stringify(initialUserState);
    localStorage.setItem('UserState', initialUserStateSerialize);
}


const reducer = (state = initialUserState, action) => {

    switch (action.type) {
        case actionTypes.Test:
            return updateObject(state, { test: action.name });





    }
    return state;
};

export default reducer;