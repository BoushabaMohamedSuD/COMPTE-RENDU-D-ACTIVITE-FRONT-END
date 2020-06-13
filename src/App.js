import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './layouts/Home';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import SideBar from './layouts/SideBar';





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
              isActive={true}
              Toggle={this.ToggleDrawer}
              ToggleKey={this.state.toggleDrawer}
              DrawerClick={this.DrawerClicked}
            // Picture={this.props.user.Picture}
            />}
          />

          <Switch>

            <Route path="/" exact render={(props) => <Home {...props}

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
