import React, { Component } from 'react';


import css from '../css/Globale.css'


import SignInView from '../views/SignInView';


class SignIn extends Component {
    userLogin = {
        username: "",
        password: "",
    };


    inputChange = (event) => {
        if (event.target.name == "username") {
            this.userLogin.username = event.target.value;
        } else if (event.target.name == "password") {
            this.userLogin.password = event.target.value;
        }
        // console.log(this.userLogin);
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
        this.props.history.push('/ForgetPassword');
    }

    SwitchToSignUp = () => {
        console.log("Switch to SignUp");
        this.props.history.push('/signUp');
    }
    render() {
        return (
            <div className={css.Authenticate}>
                <SignInView
                    inputChange={this.inputChange}
                    submit={this.Submite}
                    forgetPassword={this.ForgetPassword}
                    switch={this.SwitchToSignUp}
                ></SignInView>
            </div>

        );
    }


}





export default SignIn;