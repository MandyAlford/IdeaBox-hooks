import React, { useState } from 'react';
import Form from './form.js';
import IdeasContainer from './ideascontainer.js';

const App = () => {
  const [ideas, updateIdea] = useState( [{ id: '1', title: 'Corgis', body: 'That corgi sure is a little nugget' }] );

  const addNewIdea = (idea) => {
    updateIdea([...ideas, idea])
    console.log('addIdea')
  }

  const deleteIdea = (id) => {
    const findDeleted = ideas.filter(idea => idea.id !== id);
    updateIdea(findDeleted)
    console.log('delete')
  }


  return(
    <main>
      <h1> Idea Box </h1>
      <Form addIdea={addNewIdea}/>
      <IdeasContainer ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  )
}

export default App;
