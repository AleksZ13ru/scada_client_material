import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


const QUERY_RESULT = gql`
{  
  result(id:10){
    id
    value
  }
}
`;

export default function QueryResult() {
  const { loading, error, data } = useQuery(QUERY_RESULT);

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