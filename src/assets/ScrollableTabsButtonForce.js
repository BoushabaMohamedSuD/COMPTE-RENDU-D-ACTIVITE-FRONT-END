import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import WorkIcon from '@material-ui/icons/Work';
import CommentIcon from '@material-ui/icons/Comment';
import TimeToLeaveIcon from '@material-ui/icons/TimeToLeave';
import SimpleTable from './Table1';
import CustomizedTables from './Table2';
import { Button, Icon } from '@material-ui/core';
import ReportPresence from '../views/Dialogs/ReportPresence';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonForce() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const [presence, setPresence] = React.useState(false);
    const [absence, setAbsence] = React.useState(false);
    const [comment, setComment] = React.useState(false);






    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const presenceData = {
        type: "presence",
        key:true,
        columns: ["Mission", "Format", "Inter"],
        data: [
            /*{
                Mission: 0,
                Format: 1,
                inter: 0
            }*/
        ]
    }

    const absenceData = {
        type: "absence",
        key: false,
        columns: ["C.P", "A.N.R", "A.M", "C.E", "D.I.V"],
        data: [
            {
                cp: 0,
                anr: 0,
                am: 0,
                ce: 1,
                div: 0,
            }
        ]
    }
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"


                >
                    <Tab label="Presence" icon={<WorkIcon />} {...a11yProps(0)} />
                    <Tab label="Absence" icon={<TimeToLeaveIcon />} {...a11yProps(1)} />
                    <Tab label="Comment" icon={<CommentIcon />} {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <CustomizedTables
                    Data={presenceData}
                >

                </CustomizedTables>
                {
                    presenceData.key?
                        <Button
                            variant="contained" 
                            color="primary"
                           style={{
                               marginTop:65
                           }}
                           
                            onClick={() => {
                                setPresence(true);
                            }}
                        >
                            Add
                       </Button>
                       

                    :
                    <></>
                }
              
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CustomizedTables
                    Data={absenceData}
                >

                </CustomizedTables>
                {
                    absenceData.key?
                        <Button
                            variant="contained"
                            color="primary"
                            style={{
                                marginTop: 65
                            }}
                            onClick={() => {
                                setAbsence(true);
                            }}
                        >
                            Add
                       </Button>
                    
                    :
                    <></>
                }
              
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{
                        marginTop: 65
                    }}
                    onClick={() => {
                        setComment(true);
                    }}>
                    add
                   
                </Button>
            </TabPanel>
            <ReportPresence
                open={presence}
                close={() => setPresence(false)}
            >

            </ReportPresence>
        </div>
    );
}
