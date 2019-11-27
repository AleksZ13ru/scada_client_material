import React from 'react';
import gql from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks';

const CREATE_NOTE = gql`
  mutation CreateNote( $datetimeStart: DateTime! $text: String!){
    createNote(input:{
      machine:{id:1}
      datetimeStart: $datetimeStart
      text:$text
    })
  }
`;

export default function CreateNote() {
    let input;
    const [createNote, {data}] = useMutation(CREATE_NOTE);
    const datetimeStart_value = "";
    const text_value = "";
    let text, datetimeStart
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    createNote({
                        variables: {
                            text: text.value,
                            datetimeStart: datetimeStart.value
                        }
                    });
                }}>
                <input
                    type='text'
                    value={datetimeStart_value}
                    ref={node => datetimeStart = node}
                />
                <input
                    type='text'
                    value={text_value}
                    ref={node => text = node}
                />
                <button type="submit">Add Note</button>
            </form>
        </div>
    );
}