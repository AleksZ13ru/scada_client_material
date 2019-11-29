import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
    paper: {
        border: '1px solid',
        padding: theme.spacing(1),
        color: '#ffffff',
        backgroundColor: '#616161',
        // position: "absolute",
        transform: "translate(46px, 14px)"

    },
}));

export default function SimplePopper() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleMouseMove = event => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <button aria-describedby={id} type="button" onClick={handleClick} onMouseOut={handleMouseMove}>
                Toggle Popper
            </button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <div className={classes.paper}>The content of the Popper.</div>
            </Popper>
        </div>
    );
}