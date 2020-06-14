import React, { Component } from 'react';


import css from '../css/Globale.css'
import ScrollableTabsButtonForce from '../assets/ScrollableTabsButtonForce';
import DatePickers from '../assets/TimePickers';
import SimplePaper from '../assets/Paper';
import { Paper } from '@material-ui/core';





class ReportActivity extends Component {
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
                Report your activity
                <div style={{ height: 50 }}>

                </div>


                <div style={{
                    width: "85%",
                    margin: "0 auto",
                }}>
                    <Paper elevation={3}
                        style={{
                            paddingTop: 30
                        }}
                    >
                        <div
                            style={{
                                marginBottom: 30,

                            }}>
                            <DatePickers>
                            </DatePickers>
                        </div>
                        <div>

                            <ScrollableTabsButtonForce>

                            </ScrollableTabsButtonForce>

                        </div>


                    </Paper>


                </div>

            </div>

        );
    }


}





export default ReportActivity;