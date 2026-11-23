import { useState } from "react"



function Subjects ({ subjects, addSubject, removeSubject }) {
    const [newSubject, setNewSubject] = useState("")
    
    return (
      <div>
        <h2>My Subjects</h2>
        <input 
          type="text"
          value={newSubject}
          onChange={(event) => setNewSubject(event.target.value)}
          placeholder="Enter a subject"
        />
   <button 
        onClick={() => {
            if (
                newSubject.trim() !== ""&&
                !subjects.includes(newSubject.trim())
            ) {
                addSubject(newSubject.trim())
                setNewSubject("")
            }
        }}
        >
            Add Subject
        </button>
        { subjects.length === 0 ? (
             <p>No subjects yet. Add your first subject!</p>
        ) : (
            <ul>
                {subjects.map((subject) => (
               <li key={subject}>
                 {subject}
                 <button onClick={() => removeSubject(subject)}>
                    remove
                 </button>
               </li>
                ))}
            </ul>
        )}
 
        
      </div>
    )
    
}
 export default Subjects