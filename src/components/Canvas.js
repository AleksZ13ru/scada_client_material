import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
// '<svg version="1.1" class="img-fluid" baseProfile="full" width="1440" height="20" xmlns="http://www.w3.org/2000/svg">'
// '<rect data-toggle="tooltip" title="08:00 - 12" height="20" width="20" fill="#81C784" ></rect>'
// '<rect data-toggle="tooltip" title="{0}" height="20" width="1" x="{1}" y="0" fill="{2}"/>'
// '</svg>'


export default function Canvas(props) {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
        <svg
            id="aliens-go-home-canvas"
            baseProfile="full"
            width="1440"
            height="20"
        >
            {/*<circle cx={0} cy={0} r={50} />*/}
            props.value.map()
            <Tooltip title="08:00 - 12" placement="top">
                <rect data-toggle="tooltip" height="20" width="1" x="{1}" y="0" fill="{2}" fill="#81C784"/>
            </Tooltip>
        </svg>
    );
};

