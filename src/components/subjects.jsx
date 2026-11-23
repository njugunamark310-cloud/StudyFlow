const subjects = ["React", "Javascript", "HTML", "CSS"]

function Subjects () {
    return (
      <div>
        <h2>My Subjects</h2>
        <ul>
            {subjects.map((subject) => (
                <li key={subject}>{subject}</li>

            ))}
        </ul>
      </div>
    )
    
}
 export default Subjects