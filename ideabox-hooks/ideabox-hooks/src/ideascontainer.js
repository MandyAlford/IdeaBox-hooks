import React from 'react';
import Idea from './ideacard.js';

const IdeasContainer = (props) => {
  const ideas = props.ideas.map(idea => <Idea deleteIdea={props.deleteIdea} key={idea.id} id={idea.id} title={idea.title} body={idea.body}/>)
  return (
    <section>
      {ideas}
    </section>
  )
}

export default IdeasContainer;
