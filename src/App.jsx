import { useState } from "react"
import Welcome from "./components/welcome"
import Header from "./components/Header"
import Subjects from "./components/subjects"
import Tasks from "./components/Tasks"
import "./App.css"
function App() {
  const [subjects, setSubjects] = useState(() => {
    const savedSubjects = localStorage.getItem("subjects")

    return savedSubjects
    ? JSON.parse(savedSubjects)
    : ["React", "Javascript", "HTML", "CSS"]
  })

  function addSubject(subject) {
    setSubjects([...subjects, subject])
  }

  function removeSubject(subjectToRemove) {
    setSubjects(subjects.filter((subject) => subject !== subjectToRemove))

  }

  return (
    <div className="app">
      <Header />
      <Welcome
       name="Mark"
       role="Student"
      description="Organise your learning, one task at a time." />
    
  <div className="dashboard-content">
      <Subjects 
          subjects={subjects}
          addSubject={addSubject}
          removeSubject={removeSubject}
      />
      <Tasks />
    </div>
  </div>
  )
}

export default App