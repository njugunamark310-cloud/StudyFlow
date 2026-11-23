import { useState } from "react"
import Welcome from "./components/welcome"
import Header from "./components/Header"
import Subjects from "./components/subjects"
function App() {
  const [subjects, setSubjects] = useState([
    "React",
    "Javascript",
    "HTML",
    "CSS"
  ])

  function addSubject(subject) {
    setSubjects([...subjects, subject])
  }

  return (
    <div>
      <Header />
      <Welcome
       name="Mark"
       role="Student"
       description="Organise your learning, one task at a time." />
      <Subjects 
          subjects={subjects}
          addSubject={addSubject}
      />
    </div>
  )
}

export default App