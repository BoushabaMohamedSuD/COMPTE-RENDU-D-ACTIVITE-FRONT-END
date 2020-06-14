import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),

];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {
                            props.Data.columns.map((column) => (
                                <StyledTableCell align="center">{column}</StyledTableCell>
                            ))
                        }

                    </TableRow>
                </TableHead>
                {
                    props.Data.type == "presence" ?
                        <TableBody>
                            {props.Data.data.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell align="center">{row.Mission}</StyledTableCell>
                                    <StyledTableCell align="center">{row.Format}</StyledTableCell>
                                    <StyledTableCell align="center">{row.inter}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                        :
                        <TableBody>
                            {props.Data.data.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell align="center">{row.cp}</StyledTableCell>
                                    <StyledTableCell align="center">{row.anr}</StyledTableCell>
                                    <StyledTableCell align="center">{row.am}</StyledTableCell>
                                    <StyledTableCell align="center">{row.ce}</StyledTableCell>
                                    <StyledTableCell align="center">{row.div}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>

                }

            </Table>
        </TableContainer>
    );
}
