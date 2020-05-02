import React from 'react';

const IdeaCard = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <button onClick={() => props.deleteIdea(props.id)}>Delete</button>
    </article>
  )
}

export default IdeaCard;
