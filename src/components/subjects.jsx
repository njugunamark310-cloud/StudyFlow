import { useState } from "react"



function Subjects () {
    const [subjects, setSubjects] = useState(["React", "Javascript", "HTML", "CSS"])
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
            if (!subjects.includes("Python")) {
                setSubjects([...subjects, "Python"])
            }
        }}
        >
            Add Python
        </button>
        <ul>
            {subjects.map((subject) => (
                <li key={subject}>
                    {subject}
            <button onClick={() => setSubjects(subjects.filter((item) => item !== subject))}>
                remove
            </button>
        </li>

            ))}
        </ul>
      </div>
    )
    
}
 export default Subjects