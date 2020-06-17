import React, { Component } from 'react';


import css from '../css/Globale.css'
import ScrollableTabsButtonForce from '../assets/ScrollableTabsButtonForce';
import DatePickers from '../assets/TimePickers';
import SimplePaper from '../assets/Paper';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import TimePicker from 'react-time-picker';
import Resume from '../assets/Resume';



class ReportActivity extends Component {



    state = {
        time: '10:00',
    }

    onChange = time => this.setState({ time })

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
                <div style={
                    {
                        marginLeft: "30%",
                        marginRight: "30%"
                    }
                }>
                    <Paper elevation={3}
                        style={
                            {
                                paddingTop: 20,
                                paddingBottom: 20
                            }
                        }>
                        Report your activity
                    </Paper>

                </div>


                <div style={{ height: 50 }}>


                </div>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={2}>
                        <div
                            style={
                                {
                                    marginLeft: 10,

                                }
                            }>
                            <Paper elevation={3}
                                style={
                                    {
                                        paddingTop: 10,
                                        paddingBottom: 10
                                    }
                                }
                            >
                                <DatePickers>
                                </DatePickers>
                            </Paper>

                        </div>



                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Paper elevation={3}
                            style={{
                                paddingTop: 30,
                                marginBottom: 20
                            }}
                        >



                            <ScrollableTabsButtonForce>

                            </ScrollableTabsButtonForce>



                        </Paper>
                        <Paper elevation={3}
                            style={{
                                paddingTop: 30
                            }}
                        >



                            <Resume>

                            </Resume>



                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <div
                            style={
                                {
                                    marginRight: 10,

                                }
                            }>
                            <Paper elevation={3}
                                style={
                                    {
                                        paddingTop: 10,
                                        paddingBottom: 10
                                    }
                                }
                            >
                                My Manager
                            </Paper>

                        </div>
                    </Grid>

                </Grid>





                <div style={{ height: 50 }}>

                </div>

            </div >

        );
    }


}





export default ReportActivity;