import { useState } from "react"



function Subjects ({ subjects, addSubject, removeSubject }) {
    const [newSubject, setNewSubject] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        const trimmedSubject = newSubject.trim()

        if (
            trimmedSubject !== "" &&
            !subjects.includes(trimmedSubject)
        ) {
            addSubject(trimmedSubject)
            setNewSubject("")
        }
    }
    
    return (
      <div>
        <h2>My Subjects</h2>
        <p>You have {subjects.length} {subjects.length === 1 ? "subject": "subjects"}.</p>
    <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={newSubject}
          onChange={(event) => setNewSubject(event.target.value)}
          placeholder="Enter a subject"
        />

        <button type="submit">
            Add Subject
        </button>
    </form>
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