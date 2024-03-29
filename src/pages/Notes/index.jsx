import "./index.css";

import NoteCard from "./components/NoteCard";

import { useEffect, useState } from "react";

const Notes = () => {

    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) ?? []);

    const [newNoteText, setNewNoteText] = useState("");

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
      }, [notes]);

    const handleDeleteNote = (id) => {
	    const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
    
    const handleAddNote = () => {
		if (newNoteText.trim()) {
            setNotes([...notes, { id: crypto.randomUUID(), text: newNoteText }]);
            setNewNoteText("");
          }
	};

    return (
        <div className='container'>
			<div className='notes-list'>
                {notes.map((note) => (
                    <NoteCard
                        id={note.id}
                        text={note.text}
                        handleDeleteNote={handleDeleteNote}
                    />
                ))}	
		    </div>
            <input type="text" value={newNoteText} onChange={(e) => setNewNoteText(e.target.value)}
                placeholder="Enter your note" />
            <button onClick={handleAddNote}>Add Note</button>
		</div>
    );
}

export default Notes;