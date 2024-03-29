import "./index.css";

import { useEffect, useState } from "react";

const Notes = () => {

    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) ?? []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
      }, [notes]);
    
    return (
        <div className='container'>
			
		</div>
    );
}

export default Notes;