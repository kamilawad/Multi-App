import "./NoteCard.css";

import { useState } from "react";

const NoteCard = ({ id, text, handleDeleteNote, handleEditNote }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);

    const handleEditButtonClick = () => {
        setIsEditing(true);
    };

    const handleSaveButtonClick = () => {
        handleEditNote(id, editText);
        setIsEditing(false);
    };

    return (
        <div className='note-card'>
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                <p className="content">{text}</p>
            )}
            <div className='note-footer'>
                {isEditing ? (
                    <button className="edit-btn" onClick={handleSaveButtonClick}>Save</button>
                ) : (
                    <button className="edit-btn" onClick={handleEditButtonClick}>Edit</button>
                )}
                <button className="delete-btn" onClick={() => handleDeleteNote(id)}>Delete</button>
            </div>
        </div>
    );
};

export default NoteCard;