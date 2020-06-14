import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './layouts/Home';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import SideBar from './layouts/SideBar';
import NavBar from './layouts/NavBar';
import SignIn from './layouts/SignIn';





class App extends React.Component {

  constructor(props) {
    super(props);
    document.title = 'eRAB';
  }

  state = {
    toggleDrawer: false
  }


  ToggleDrawer = () => {
    console.log("toggle drawer");
    let toggle = { ... this.state }
    toggle.toggleDrawer = !toggle.toggleDrawer;
    this.setState(toggle);
    //console.log(toggle.toggleDrawer);
  }

  OpenDrawer = () => {
    console.log("open drawer");
    let toggle = { ... this.state }
    toggle.toggleDrawer = true;
    this.setState(toggle);
  }
  CloseDrawer = () => {
    console.log("close drawer");
    let toggle = { ... this.state }
    toggle.toggleDrawer = false;
    this.setState(toggle);
  }
  DrawerClicked = () => {
    console.log("drawer clicked");
    let toggle = { ... this.state }
    toggle.toggleDrawer = false;
    this.setState(toggle);
  }



  render() {
    return (
      <div className="App ">

        <BrowserRouter>
          <Route
            render={(props) => <SideBar {...props}

              Toggle={this.ToggleDrawer}
              ToggleKey={this.state.toggleDrawer}
              DrawerClick={this.DrawerClicked}
              Picture={"https://static.wixstatic.com/media/191d77_ab52497f706c43028454c1d39a4d8f1c~mv2.png/v1/fill/w_139,h_56,al_c,q_85,usm_0.66_1.00_0.01/Logo__PNG.webp"}
            />}
          />

          <Route
            render={(props) => <NavBar {...props}
              Toggle={this.ToggleDrawer}
              isActive={true}

            />}
          />

          <Switch>

            <Route path="/" exact render={(props) => <SignIn {...props}

            />} />


            <Route path="/Home" exact render={(props) => <Home {...props}

            />} />

            <Redirect from="/" to="/" />
          </Switch>

        </BrowserRouter>


      </div>
    );

  }

}



export default App;
