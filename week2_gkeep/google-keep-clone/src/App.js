import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import ToggleSwitch from './components/ToggleSwitch';
import useDarkMode from './useDarkMode';
import './styles/App.css';

function App() {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem('notes')) || [];
  });
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (id, title, content) => {
    setNotes(notes.map(note => (note.id === id ? { ...note, title, content } : note)));
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        <h1 className="my-4">Google Keep Clone</h1>
        <ToggleSwitch isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
        <NoteForm onAddNote={addNote} />
        <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
      </div>
    </div>
  );
}

export default App;
