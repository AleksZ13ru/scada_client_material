import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { useHistory } from "react-router-dom";
import QueryNotes from "./graphql/QueryNotes";

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

export default function CardNote() {
    const classes = useStyles();
    let history = useHistory();

    const handleOnClick = () => {
       history.push("/note");
    };

    return (
        <Card className={classes.card}>
            <CardHeader

                action={
                    <IconButton aria-label="settings" onClick={handleOnClick}>
                        <MoreVertIcon/>
                    </IconButton>
                }

                title="Журнал передачи смен"
                subheader="September 2019"
            />
            <CardContent>
                <QueryNotes />
            </CardContent>
            < CardActions>
            </CardActions>
        </Card>
    );
}
