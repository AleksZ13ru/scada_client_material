import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Canvas from "./Canvas";
import QueryResult from "./graphql/QueryResult";


const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

});

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export default function MyGears() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    // const handleClickAdd = () => {
    //     setOpen(true);
    // };
    //
    // const handleClose = () => {
    //     setOpen(false);
    // };

    return (
        <div flexgrow={1}>
            {/*<AddToDo open={open} handleClose={handleClose}/>*/}
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <CardHeader
                            // action={
                            //     <IconButton aria-label="settings" onClick={handleClickAdd}>
                            //         <AddIcon/>
                            //     </IconButton>
                            // }
                            title="Сведения о работе оборудования"
                            subheader="September 2019"
                        />
                        <CardContent>
                            <QueryResult />
                            <Canvas />
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Оборудование</TableCell>
                                        <TableCell align="right">Calories</TableCell>
                                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                        <TableCell align="right">Скорость</TableCell>
                                        <TableCell align="right">К.М.В.</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right"> </TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                        < CardActions>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </div>

    );
}
