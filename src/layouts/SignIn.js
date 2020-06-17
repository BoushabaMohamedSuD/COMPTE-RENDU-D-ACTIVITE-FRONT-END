import React, { Component } from 'react';


import css from '../css/Globale.css'


import SignInView from '../views/SignInView';


import { connect } from 'react-redux'
import * as actionCreators from '../store/actions/index';


class SignIn extends Component {
    userLogin = {
        email: "",
        password: "",
    };


    inputChange = (event) => {
        if (event.target.name == "email") {
            this.userLogin.email = event.target.value;
        } else if (event.target.name == "password") {
            this.userLogin.password = event.target.value;
        }
        //console.log(this.userLogin);
    };


    Submite = () => {
        console.log("submit the form");
        if (this.verification()) {
            console.log("----Submit valide-----");
            console.log(this.userLogin);
            this.props.onSignIn(this.userLogin, this.props);
        } else {
            console.log("----Submit not valide----");
        }

    }

    verification = () => {
        if (this.userLogin.username != "" && this.userLogin.password != "") {
            return true;
        }
        return false;
    }

    ForgetPassword = () => {
        console.log("ForgetPassword");

    }


    render() {
        return (
            <div className={css.Authenticate}>
                <SignInView
                    inputChange={this.inputChange}
                    submit={this.Submite}
                    forgetPassword={this.ForgetPassword}
                ></SignInView>
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
        onSignIn: (data, props) => {
            console.log('Sign In activited');
            // console.log(username);
            dispatch(actionCreators.SignIn(data, props));
        }


    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);



