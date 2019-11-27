import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {getDirectiveValues} from "graphql";
import Tooltip from "@material-ui/core/Tooltip";


const QUERY_RESULT = gql`
{  
  result(id:10){
    id
    value
  }
}
`;

export default function QueryResult() {
    const {loading, error, data} = useQuery(QUERY_RESULT);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( {error.message}</p>;
    const as = JSON.parse(data.result.value);
    console.log(typeof data.result.value);
    console.log(typeof as);
    return as.map((v, i) => (

        <Tooltip title='08:00 - {v}' placement="top">
            <rect data-toggle="tooltip" height="20" width="1" x={i} y="0" fill="#81C784"/>
        </Tooltip>
    ));


// (
//   <div>
//     <p>
//       {data.result.value}
//     </p>
//   </div>
// );
}