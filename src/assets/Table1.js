import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];




export default function SimpleTable(props) {
    const classes = useStyles();

    const ListCells = (props, marker) => {
        let Cells = []
        console.log(marker)
        console.log(props.Data.data)
        props.Data.columns.map((column) => {
            if (!isNaN(column)) {

                let key = true
                let i = 0;
                let limit = props.Data.columns.length - 1;
                while (i < limit) {
                    if (props.Data.data[marker][i] != undefined) {
                        if (props.Data.data[marker][i][1] == column) {
                            Cells.push(<TableCell>{props.Data.data[marker][i][0]}</TableCell>)
                            key = false;
                            break;
                        }
                    }

                    i++;
                }


                if (key) {
                    Cells.push(<TableCell>-</TableCell>)
                }



            }


        })
        console.log(Cells)
        return Cells;
    }


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {props.Data.columns.map((column) => (
                            <TableCell>{column}</TableCell>
                        ))}


                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.Data.titles.map((title, marker) => (
                        <TableRow key={title}>
                            <TableCell component="th" scope="row">
                                {title}
                            </TableCell>
                            {ListCells(props, marker).map((cells) => (
                                cells
                            ))}

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


//  return (<TableCell>{column}</TableCell>)