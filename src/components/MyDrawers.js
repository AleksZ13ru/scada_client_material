import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BusinessIcon from '@material-ui/icons/Business';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ExtensionIcon from '@material-ui/icons/Extension';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import {Link as RouterLink} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    // root: {
    //     display: 'flex',
    // },
    // appBar: {
    //     zIndex: theme.zIndex.drawer + 1,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.leavingScreen,
    //     }),
    // },
    // appBarShift: {
    //     marginLeft: drawerWidth,
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
    // menuButton: {
    //     marginRight: 36,
    // },
    // hide: {
    //     display: 'none',
    // },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
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

function ListItemLink(props) {
    const {icon, primary, to} = props;

    const renderLink = React.useMemo(
        () =>
            React.forwardRef((itemProps, ref) => (
                // With react-router-dom@^6.0.0 use `ref` instead of `innerRef`
                // See https://github.com/ReactTraining/react-router/issues/6056
                <RouterLink to={to} {...itemProps} innerRef={ref}/>
            )),
        [to],
    );

    return (
        <li>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary}/>
            </ListItem>
        </li>
    );
}

export default function MyDrawers(props) {
    const classes = useStyles();
    // const classes = props.classes;
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: props.open,
                    [classes.drawerClose]: !props.open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: props.open,
                        [classes.drawerClose]: !props.open,
                    }),
                }}
                open={props.open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={props.handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListItemLink to="/gears" primary="Шестеренка" icon={<BusinessIcon/>}/>
                    <ListItemLink to="/starred" primary="Простои" icon={<ReceiptIcon/>}/>
                    <ListItemLink to="/mail" primary="Send email" icon={<InboxIcon/>}/>
                    <ListItemLink to="/drafts" primary="ОПЭиИТ" icon={<ExtensionIcon/>}/>
                </List>
                <Divider/>
            </Drawer>
        </div>
    );
}
