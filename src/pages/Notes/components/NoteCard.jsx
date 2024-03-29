
const NoteCard = ({ id, text, handleDeleteNote }) => {
	return (
		<div className='note-card'>
			<p>{text}</p>
			<div className='note-footer'>
				<button onClick={() => handleDeleteNote(id)}>Delete</button>
			</div>
		</div>
	);
};

export default NoteCard;