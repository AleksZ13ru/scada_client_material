import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const QUERY_NOTES = gql`
{
    notes{
        id
        datetimeStart
        machine {
            name
        }
        text   
    }
}
`;

export default function QueryNotes() {
  const { loading, error, data } = useQuery(QUERY_NOTES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {error.message}</p>;

  return data.notes.map(({ id, datetimeStart, machine, text }) => (
    <div key={id}>
      <p>
        {datetimeStart}: {machine.name}: {text}
      </p>
    </div>
  ));
}