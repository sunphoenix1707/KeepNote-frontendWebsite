import React from 'react';
import "./styles.css";
import { useState } from 'react';
import Header from "./components/header";
import CreateArea from "./components/CreateArea";
import Note from './components/Note';
import Count from "./components/Count";
function App() {
  const[notes,setNotes] = useState([])
  function addNote(newNote) {
 setNotes(preValue => {
  return [...preValue,newNote]
 })
  }
  function deleteNotes(id) {
    setNotes(preValue=>{
      return [...preValue.filter((note,index)=> 
        index!==id)];
    })
  }
  return (
    <div>
      <Header/>
      <Count count={notes.length===0?"Empty" : `showing ${notes.length} Notes in Database`}/>
      <CreateArea onAdd={addNote}/>
     {notes.map((note,index)=> (
      <Note 
      key={index} 
      id={index} 
      title={note.title}
      content={note.content}
      onDelete={deleteNotes}/>
     )
     )}
    </div>
  );
}

export default App

