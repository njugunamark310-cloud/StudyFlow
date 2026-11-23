import { useState } from "react"



function Subjects () {
    const [subjects, setSubjects] = useState(["React", "Javascript", "HTML", "CSS"])
    return (
      <div>
        <h2>My Subjects</h2>
        <button onClick={() => setSubjects([...subjects, "Python"])}>
            Add Python
        </button>
        <ul>
            {subjects.map((subject) => (
                <li key={subject}>{subject}</li>

            ))}
        </ul>
      </div>
    )
    
}
 export default Subjects