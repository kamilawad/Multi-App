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

    const handleEditNote = (id, newText) => {
        const newNotes = notes.map((note) => {
            if (note.id === id) {
                return { ...note, text: newText };
            }
            return note;
        });
        setNotes(newNotes);
    };
    
    const handleAddNote = () => {
		if (newNoteText.trim()) {
            setNotes([...notes, { id: crypto.randomUUID(), text: newNoteText }]);
            setNewNoteText("");
          }
	};

    return (
        <div className='container flex column center'>
            <div className="user-input flex center space-between">
                <input type="text" value={newNoteText} onChange={(e) => setNewNoteText(e.target.value)}
                placeholder="Enter your note"/>
                <button onClick={handleAddNote}>Add Note</button>
            </div>
			<div className='notes-list flex'>
                {notes.map((note) => (
                    <NoteCard
                        key={note.id}
                        id={note.id}
                        text={note.text}
                        handleDeleteNote={handleDeleteNote}
                        handleEditNote={handleEditNote}
                    />
                ))}	
		    </div>
		</div>
    );
}

export default Notes;