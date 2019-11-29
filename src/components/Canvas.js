import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
import Demo from "./try/Demo";
import MouseTracker from "./try/MouseTracker";
import Popper from "@material-ui/core/Popper";
import SimplePopper from "./try/SimplePopper";
// '<svg version="1.1" class="img-fluid" baseProfile="full" width="1440" height="20" xmlns="http://www.w3.org/2000/svg">'
// '<rect data-toggle="tooltip" title="08:00 - 12" height="20" width="20" fill="#81C784" ></rect>'
// '<rect data-toggle="tooltip" title="{0}" height="20" width="1" x="{1}" y="0" fill="{2}"/>'
// '</svg>'

const QUERY_RESULT = gql`
{  
  result(id:4){
    id
    value
  }
}
`;

function QueryResult() {
    const {loading, error, data} = useQuery(QUERY_RESULT);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( {error.message}</p>;

    return (
        <div>
            <p>
                {data.result.value}
            </p>
        </div>
    );
}

// export default function Canvas(props) {
//     const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
//     const [timeline, setTimeline] = React.useState([]);
//     const [titleTooltip, setTitleTooltip] = React.useState("Hello");
//     const {loading, error, data} = useQuery(QUERY_RESULT);
//
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error :( {error.message}</p>;
//     const rects = JSON.parse(data.result.value).map((v, i) => {
//
//         return {
//             title: '8:00 - ' + v,
//             step: i,
//             color: (v > 0) ? "#81C784" : "#e1f5fe"
//         };
//     });
//     handleMouseMove(e)  {
//         setTitleTooltip("Value = "+ t);
//
//     };
//
//     return (
//         <div>
//             {/*<MouseTracker />*/}
//             <Tooltip title={titleTooltip} placement="top" TransitionProps={{timeout: 0}}>
//                 <svg
//                     id="aliens-go-home-canvas"
//                     baseProfile="full"
//                     width="720"
//                     height="20"
//
//                 >
//                     <QueryResult/>
//                     {
//                         rects.map((rect, i) => (
//
//                             <Tooltip title={rect.title} placement="top" TransitionProps={{timeout: 0}}>
//                                 <rect data-toggle="tooltip" height="20" width="1" x={rect.step}
//                                       y="0" fill={rect.color}  onMouseMove={handleMouseMove.bind(this)}/>
//                             </Tooltip>
//                         ))
//                     }
//                     {/*<Tooltip title="08:00 - 12" placement="top">*/}
//                     {/*    <rect data-toggle="tooltip" height="20" width="5" x="0" y="0" fill="#81C784"/>*/}
//                     {/*</Tooltip>*/}
//                     {/*<Tooltip title="08:00 - 12" placement="top">*/}
//                     {/*    <rect data-toggle="tooltip" height="20" width="5" x="30" y="0" fill="#81C784"/>*/}
//                     {/*</Tooltip>*/}
//                     {/*<Tooltip title="08:00 - 12" placement="top">*/}
//                     {/*    <rect data-toggle="tooltip" height="20" width="5" x="70" y="0" fill="#81C784"/>*/}
//                     {/*</Tooltip>*/}
//                 </svg>
//             </Tooltip>
//         </div>
//
//     );
// };

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {
            titleTooltip: "Hello",
            x: 0,
            y: 0,
            open: false,
            transform: "translate3d(469px, 141px, 0px)"
        };
    }


    handleMouseMove(e, letter) {
        this.setState({
                titleTooltip: letter,
                open: true,
                x: e.clientX,
                y: e.clientY,
                transform: "translate3d(" + this.state.x + "px, " + this.state.y+ "px, 0px)"
            }
        )
        console.log(this.state.x)
    };

    render() {
        return (
            <div>
                {/*<MouseTracker />*/}
                {/*<SimplePopper/>*/}
                <Tooltip open={true} title={this.state.titleTooltip}
                         placement="top"
                         TransitionProps={{timeout: 0}}
                         leaveDelay={20000}
                         style={{
                             position: "absolute",
                             transform: this.state.transform
                         }}
                >
                    <div></div>
                </Tooltip>
                <svg id="aliens-go-home-canvas" baseProfile="full" width="720" height="20">

                    <rect data-toggle="tooltip" height="20" width="50" x="0" y="0" fill="#81C784"
                          onMouseMove={(event) => this.handleMouseMove(event, "1")}/>
                    <rect data-toggle="tooltip" height="20" width="50" x="100" y="0" fill="#81C784"
                          onMouseMove={(event) => this.handleMouseMove(event, "2")}/>
                    <rect data-toggle="tooltip" height="20" width="50" x="200" y="0" fill="#81C784"
                          onMouseMove={(event) => this.handleMouseMove(event, "3")}/>

                </svg>
            </div>

        );
    }
}

export default Canvas

