import React, { Component } from 'react';


import css from '../css/Globale.css'

import CreateUserView from '../views/CreateUserView';


import { connect } from 'react-redux'
import * as actionCreators from '../store/actions/index';

class CreateUser extends Component {
    targetData = {
        email: "",
        firstname: "",
        lastname: "",
        bcode: "",
        password: ""
    };


    inputChange = (event) => {
        if (event.target.name == "email") {
            this.targetData.email = event.target.value;
        } else if (event.target.name == "firstname") {
            this.targetData.firstname = event.target.value;
        } else if (event.target.name == "lastname") {
            this.targetData.lastname = event.target.value;
        } else if (event.target.name == "bcode") {
            this.targetData.bcode = event.target.value;
        } else if (event.target.name == "password") {
            this.targetData.password = event.target.value;
        }
        //console.log(this.targetData);
    };


    Submite = () => {
        console.log("submit the form");
        if (this.verification()) {
            console.log("----Submit valide-----");
            console.log(this.targetData);
            this.props.onCreateUser(this.targetData, this.props);
        } else {
            console.log("----Submit not valide----");
        }

    }

    verification = () => {
        if (this.targetData.email != "" && this.targetData.firstname != "") {
            if (this.targetData.lastname != "" && this.targetData.bcode != "") {
                if (this.targetData.password != "") {
                    return true;
                }

            }
        }
        return false;
    }

    ForgetPassword = () => {
        console.log("ForgetPassword");
        this.props.history.push('/ForgetPassword');
    }

    SwitchToSignUp = () => {
        console.log("Switch to SignUp");
        this.props.history.push('/signUp');
    }
    render() {
        return (
            <div className={css.Authenticate}>
                <CreateUserView
                    inputChange={this.inputChange}
                    submit={this.Submite}
                    forgetPassword={this.ForgetPassword}
                    switch={this.SwitchToSignUp}
                ></CreateUserView>
            </div>

        );
    }


}




const mapStateToProps = state => {
    //console.log(state.user);
    return {
        user: state.user,
    };
};

const mapDispatchToProps = dispatch => {
    //console.log('set up dispatch');
    return {
        onCreateUser: (data, props) => {
            console.log('createUser activited');
            // console.log(username);
            dispatch(actionCreators.CreateUser(data, props));
        }


    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
