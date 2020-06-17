import * as actionTypes from '../actions/ActionTypes';
import { updateObject } from '../utility.js';

let initialUserStateSerialize = localStorage.getItem('UserState');
let initialUserState = JSON.parse(initialUserStateSerialize);

/*console.log(initialUserState);
console.log("-------");*/

if (initialUserState == undefined || initialUserState == null) {
    initialUserState = {
        titleApp: "eBAR",
        email: "",
        firstname: "",
        lastname: "",
        bcode: "",
        day: 0,
        month: 0,
        year: 0,
        authoirty: "",
        isactive: false,
        target: {

        },
        activities: {
            presences: [],
            absences: [],
            comments: []
        },
        token: ""

    };

    initialUserStateSerialize = JSON.stringify(initialUserState);
    localStorage.setItem('UserState', initialUserStateSerialize);
}


const reducer = (state = initialUserState, action) => {

    switch (action.type) {
        case actionTypes.Test:
            return updateObject(state, { test: action.name });
        case actionTypes.Update:
            return updateObject(state, action.data);





    }
    return state;
};

export default reducer;