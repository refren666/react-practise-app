import React from 'react';

const Comment = ({comment}) => {
  const {id, name, email, body} = comment;

  return (
    <div style={{marginTop: '10px'}}>
      <h2>Comment {id}. {name}</h2>
      <h4>{email}</h4>
      <p>{body}</p>
    </div>
  );
};

export default Comment;