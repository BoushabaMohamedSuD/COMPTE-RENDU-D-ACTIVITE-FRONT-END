import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import HomeIcon from '@material-ui/icons/Home';
import PublicIcon from '@material-ui/icons/Public';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



import '../App.css';


const useStyles = makeStyles({
    list: {
        width: 250,
        height: 10000,
        backgroundColor: "#525f7f",
        color: "white"
    },
    fullList: {
        width: 'auto',

    },

    test: {
        height: 250,
        //backgroundColor: "red"
    }
});


export default function SideBar(props) {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };


    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };




    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            // onClick={props.ItemSelected}
            onKeyDown={toggleDrawer(side, false)}
        >
            <div style={{ height: 100 }} >

                <img src={props.Picture} style={{ height: "100%", width: "100%" }} ></img>

            </div>

            <List>
                <ListItem button key="Home" >
                    <ListItemIcon > <HomeIcon /></ListItemIcon>
                    <ListItemText onClick={(event) => {
                        ItemSelected(event, 'Home');
                    }}
                        primary={"Home"} />
                </ListItem>
                <ListItem button key="Public" >
                    <ListItemIcon > <PublicIcon /></ListItemIcon>
                    <ListItemText onClick={(event) => {
                        ItemSelected(event, 'Public');
                    }}
                        primary={"Public"} />
                </ListItem>

                <ListItem button key="Private" >
                    <ListItemIcon > <VpnKeyIcon /></ListItemIcon>
                    <ListItemText onClick={(event) => {
                        ItemSelected(event, 'Private');
                    }}
                        primary={"Private"} />
                </ListItem>

                <ListItem button key="Profile" >
                    <ListItemIcon > <AccountCircleIcon /></ListItemIcon>
                    <ListItemText onClick={(event) => {
                        ItemSelected(event, 'Profile');
                    }}
                        primary={"Profile"} />
                </ListItem>


            </List>


            <Divider />


            <List>

                <ListItem button key="Log Out" >
                    <ListItemIcon > <ExitToAppIcon /></ListItemIcon>
                    <ListItemText onClick={(event) => {
                        ItemSelected(event, 'Log Out');
                    }}
                        primary={"Log Out"} />
                </ListItem>


            </List>

        </div >

    );






    const ItemSelected = (e, name) => {
        console.log("Item Selected");
        e.stopPropagation();
        console.log(name);
        if (name == "Home") {
            console.log("Home");
            props.history.push('/');
        }
        if (name == "Public") {
            console.log("Public");
            props.history.push('/Dashboard/Public');
        }
        if (name == "Private") {
            console.log("Private");
            props.history.push('/Dashboard/private');
        }
        if (name == "Profile") {
            console.log("Profile");
            props.history.push('/Profile');
        }



        props.DrawerClick();
    }






    return (
        <div>
            { /* <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
            <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
            <Button onClick={toggleDrawer('top', true)}>Open Top</Button>
            <Button onClick={toggleDrawer('bottom', true)}>Open Bottom</Button>*/}
            <Drawer onClick={props.DrawerClick} open={props.ToggleKey} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>

        </div>
    );
}