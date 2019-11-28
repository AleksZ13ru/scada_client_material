import React from 'react';
import PetsIcon from '@material-ui/icons/Pets';
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Popper from "@material-ui/core/Popper";

class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {x: 0, y: 0};
        this.state.titleTooltip = ""
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY,
            titleTooltip: "1"+event.offsetX +" Position: " + this.state.x,
        });
    }

    render() {
        return (
            <div style={{height: '100%'}}>
                <h1>Перемещайте курсор мыши!</h1>
                <p>Текущее положение курсора мыши: ({this.state.x}, {this.state.y})</p>
                <Tooltip title={this.state.titleTooltip} placement="top" leaveDelay={200}>
                    <svg id="aliens-go-home-canvas"  width="100" height="20"
                         onMouseMove={this.handleMouseMove}>
                        <rect height="20" width="100" x="0" y="0" fill="#e1f5fe"/>
                        <rect height="20" width="5" x="10" y="0" fill="#81C784"/>
                        <rect height="20" width="5" x="20" y="0" fill="#81C784"/>
                    </svg>
                </Tooltip>
                <Popper open={true} style={{position: 'absolute',  top: this.state.y, left: this.state.x}}>
                    <p>Position: ({this.state.x}, {this.state.y})</p>
                </Popper>
                {/*<div role="tooltip" className="MuiTooltip-popper"*/}
                {/*     style="position: absolute; transform: translate3d(125px, 253px, 0px); top: 0px; left: 0px; will-change: transform;"*/}
                {/*     x-placement="top">*/}
                {/*    <div className="MuiTooltip-tooltip MuiTooltip-tooltipPlacementTop"*/}
                {/*         style="opacity: 1; transform: none; transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 133ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;">Position:*/}
                {/*        156*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        )
            ;
    }
}


export default MouseTracker;