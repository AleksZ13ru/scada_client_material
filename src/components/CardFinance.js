import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';

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

export default function CardFinance() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader

                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title="Бюджет"
                subheader="September 2019"
            />
            <CardContent>
                {/*<List className={classes.root}>*/}
                {/*    <Divider variant="inset" component="li"/>*/}
                {/*    <ListItem>*/}
                {/*        <ListItemAvatar>*/}
                {/*            <Avatar>*/}
                {/*                <WbSunnyIcon/>*/}
                {/*            </Avatar>*/}
                {/*        </ListItemAvatar>*/}
                {/*        <Grid container alignItems="center">*/}
                {/*            <Grid item xs>*/}
                {/*                <Typography gutterBottom variant="body1"> Петров И.И. </Typography>*/}
                {/*                <Typography gutterBottom variant="body1"> Петров И.И. </Typography>*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}
                {/*    </ListItem>*/}
                {/*    <ListItem>*/}
                {/*        <ListItemAvatar>*/}
                {/*            <Avatar>*/}
                {/*                <Brightness3Icon/>*/}
                {/*            </Avatar>*/}
                {/*        </ListItemAvatar>*/}
                {/*        <Grid container alignItems="center">*/}
                {/*            <Grid item xs>*/}
                {/*                <Typography gutterBottom variant="body1"> Алексеев И.И. </Typography>*/}
                {/*                <Typography gutterBottom variant="body1"> Алексеев И.И. </Typography>*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}
                {/*    </ListItem>*/}
                {/*    <Divider variant="inset" component="li"/>*/}
                {/*    /!*<ListItem>*!/*/}
                {/*    /!*    <ListItemAvatar>*!/*/}
                {/*    /!*        <Avatar>*!/*/}
                {/*    /!*            <WbSunnyIcon/>*!/*/}
                {/*    /!*        </Avatar>*!/*/}
                {/*    /!*    </ListItemAvatar>*!/*/}
                {/*    /!*    <Grid container alignItems="center">*!/*/}
                {/*    /!*        <Grid item xs>*!/*/}
                {/*    /!*            <Typography gutterBottom variant="body2"> Сидоров И.И. </Typography>*!/*/}
                {/*    /!*            <Typography gutterBottom variant="body2"> Сидоров И.И. </Typography>*!/*/}
                {/*    /!*        </Grid>*!/*/}
                {/*    /!*    </Grid>*!/*/}
                {/*    /!*</ListItem>*!/*/}
                {/*</List>*/}
            </CardContent>
            < CardActions>
            </CardActions>
        </Card>
    );
}
