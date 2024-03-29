import "./NoteCard.css";

const NoteCard = ({ id, text, handleDeleteNote }) => {
	return (
		<div className='note-card'>
			<p className="content">{text}</p>
			<div className='note-footer'>
				<button className="delete-btn" onClick={() => handleDeleteNote(id)}>Delete</button>
				
			</div>
		</div>
	);
};

export default NoteCard;