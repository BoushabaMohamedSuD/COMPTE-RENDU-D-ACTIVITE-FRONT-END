import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function ReportPresence(props) {
    //  const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    /*const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };*/
    let folder = "";



    return (
        <div>
            {/**
              <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open responsive dialog
             </Button>
             */}

            <Dialog
                fullScreen={fullScreen}
                open={props.open}
                onClose={props.close}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Report you presence please"}</DialogTitle>
                <DialogContent>


                    <DialogContentText >
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Presence</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                <FormControlLabel value="female" control={<Radio />} label="Mission" />
                                <FormControlLabel value="male" control={<Radio />} label="Format" />
                                <FormControlLabel value="other" control={<Radio />} label="Inter" />
                            </RadioGroup>
                        </FormControl>

                    </DialogContentText>



                </DialogContent>
                <DialogActions>
                    <Button onClick={props.close} color="primary" autoFocus>
                        Close
                     </Button>
                    <Button onClick={props.close} color="primary" autoFocus>
                        Submit
                     </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}
