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

export default function Resume() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const [presence, setPresence] = React.useState(false);
    const [absence, setAbsence] = React.useState(false);
    const [comment, setComment] = React.useState(false);






    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const columns = ['Dates'];
    let i = 1;
    while (i < 32) {
        columns.push(i);

        i++;
    }


    const presenceData = {
        type: "presence",
        key: true,
        columns: columns,
        titles: ['Mission', 'Format', 'Inter'],
        data: [
            //Mission
            [[0, 1], [1, 5], [1, 12], [1, 6], [0, 23]],
            //Fromat
            [[1, 1], [0, 5], [0, 12], [0, 6], [1, 23]],
            //inter
            [[0, 1], [0, 5], [0, 12], [0, 6], [0, 23]],
            /* {
                 Mission: 0,
                 Format: 1,
                 inter: 0,
                 date: 5
             },
             {
                 Mission: 1,
                 Format: 0,
                 inter: 0,
                 date: 1
             },*/
        ]
    }
    /*let i = 0;
    while (i < 32) {
        if(i==0){

        }else{
            columns.push(i);
        }
       

        i++;
    }*/

    const absenceData = {
        type: "absence",
        key: false,
        columns: columns,
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

                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <SimpleTable
                    Data={presenceData}
                >

                </SimpleTable>

            </TabPanel>
            <TabPanel value={value} index={1}>
                <SimpleTable
                    Data={absenceData}
                >

                </SimpleTable>


            </TabPanel>
            <ReportPresence
                open={presence}
                close={() => setPresence(false)}
            >

            </ReportPresence>
        </div>
    );
}
