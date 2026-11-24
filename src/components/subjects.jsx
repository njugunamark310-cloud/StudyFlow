import { useState, useEffect } from "react"



function Subjects ({ subjects, addSubject, removeSubject }) {
    const [newSubject, setNewSubject] = useState("")
    const [message, setMessage] = useState("")
    const [searchTerm, setSearchTerm] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        const trimmedSubject = newSubject.trim()

       if (trimmedSubject === "") {
        setMessage("Please enter a subject.")
        return
       }

       if (subjects.includes(trimmedSubject)) {
        setMessage("This subject already exists.")
        return
       }

       addSubject(trimmedSubject)
       setNewSubject("")
       setMessage("Subject added successfully!")
       }

       useEffect(() => {
        localStorage.setItem("subjects", JSON.stringify(subjects))
       }, [subjects])
       
    const filteredSubjects = subjects.filter((subject) =>
    subject.toLowerCase().includes(searchTerm.toLowerCase())
   )
    return (
      <div>
        <h2>My Subjects</h2>
        <p>You have {subjects.length} {subjects.length === 1 ? "subject": "subjects"}.</p>

        <input 
           type="text"
           value={searchTerm}
           onChange={(event) => setSearchTerm(event.target.value)}
           placeholder="Search subjects..."
        />
    <form onSubmit={handleSubmit}>
        {message && <p>{message}</p>}
        <input 
          type="text"
          value={newSubject}
          onChange={(event) => {
            setNewSubject(event.target.value)
            setMessage("")
          }}
          placeholder="Enter a subject"
        />

        <button type="submit">
            Add Subject
        </button>
    </form>
        { subjects.length === 0 ? (
             <p>No subjects yet. Add your first subject!</p>
        ) : filteredSubjects.length === 0 ? (
            <p>No subjects match your search.</p>
        ) : (
            <ul>
                {filteredSubjects.map((subject) => (
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