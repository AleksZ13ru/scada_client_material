import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
    DatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    // hide: {
    //     display: 'none',
    // },
    // drawer: {
    //     width: drawerWidth,
    //     flexShrink: 0,
    //     whiteSpace: 'nowrap',
    // },
    // drawerOpen: {
    //     width: drawerWidth,
    //     transition: theme.transitions.create('width', {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
    // drawerClose: {
    //     transition: theme.transitions.create('width', {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.leavingScreen,
    //     }),
    //     overflowX: 'hidden',
    //     width: theme.spacing(7) + 1,
    //     [theme.breakpoints.up('sm')]: {
    //         width: theme.spacing(9) + 1,
    //     },
    // },
    // toolbar: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'flex-end',
    //     padding: theme.spacing(0, 1),
    //     ...theme.mixins.toolbar,
    // },
    // content: {
    //     flexGrow: 1,
    //     padding: theme.spacing(3),
    // },

}));

const inputProps = {
    step: 300,
};

export default function MyBar(props) {
    const classes = useStyles();
    // const classes = props.classes;
    const theme = useTheme();

    const handleDateChange = () => {
        alert('handleDateChange');
    };


    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: props.open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: props.open,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        MySite
                    </Typography>
                    <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker value={new Date()} onChange={handleDateChange}/>
                        </MuiPickersUtilsProvider>
                        <Button color="inherit" justify="flex-end">Login</Button>
                    </Grid>

                </Toolbar>
            </AppBar>
        </div>
    );
}
