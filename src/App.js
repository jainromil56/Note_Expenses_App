import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddNotes from './components/AddNotes';
import ShowNotes from './components/notes/ShowNotes';
import { useState } from 'react';


const Dummy_Notes = [
  {
    id: 't1',
    title:"My Holidays",
    descrip: "Everybody needs to get some help from their bustling schedule.",
    Amount: 24,
    // date: new Date(2021, 2, 5) 
  },
  {
    id: 't2',
    title:"My Holidays",
    descrip: "Everybody needs to get some help from their bustling schedule.",
    Amount: 56.2
    // date: new Date(2021, 2, 5)
  }
];

const App = () => {

  const [notes, setNotes] = useState(Dummy_Notes);

  const addNewNoteHandler = (note) => { 
    setNotes((prevNotes) => {
      return [note, ...prevNotes];
    });
    // console.log("In App.js");
  };

  console.log(notes);

  return (
    <div>
      <AddNotes onAddNote = {addNewNoteHandler}/>
      <ShowNotes items={notes}/>
    </div>
  );
}

export default App;
