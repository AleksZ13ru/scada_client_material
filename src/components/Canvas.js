import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
// '<svg version="1.1" class="img-fluid" baseProfile="full" width="1440" height="20" xmlns="http://www.w3.org/2000/svg">'
// '<rect data-toggle="tooltip" title="08:00 - 12" height="20" width="20" fill="#81C784" ></rect>'
// '<rect data-toggle="tooltip" title="{0}" height="20" width="1" x="{1}" y="0" fill="{2}"/>'
// '</svg>'

const QUERY_RESULT = gql`
{  
  result(id:10){
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

export default function Canvas(props) {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    const [timeline, setTimeline] = React.useState([]);

    const {loading, error, data} = useQuery(QUERY_RESULT);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( {error.message}</p>
    return (
        <div>
            <svg
                id="aliens-go-home-canvas"
                baseProfile="full"
                width="144"
                height="20"
            >
                <QueryResult/>
                {
                    JSON.parse(data.result.value).map((v, i) => (
                        <Tooltip title='08:00-v' placement="top">
                            <rect data-toggle="tooltip" height="20" width="1" x={i}
                                  y="0" fill="#7e387b"/>
                        </Tooltip>
                    ))
                }
                {/*<Tooltip title="08:00 - 12" placement="top">*/}
                {/*    <rect data-toggle="tooltip" height="20" width="5" x="0" y="0" fill="#81C784"/>*/}
                {/*</Tooltip>*/}
                {/*<Tooltip title="08:00 - 12" placement="top">*/}
                {/*    <rect data-toggle="tooltip" height="20" width="5" x="30" y="0" fill="#81C784"/>*/}
                {/*</Tooltip>*/}
                {/*<Tooltip title="08:00 - 12" placement="top">*/}
                {/*    <rect data-toggle="tooltip" height="20" width="5" x="70" y="0" fill="#81C784"/>*/}
                {/*</Tooltip>*/}
            </svg>
        </div>

    );
};

