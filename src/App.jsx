import Welcome from "./components/welcome"
import Header from "./components/Header"
import Subjects from "./components/subjects"
function App() {
  return (
    <div>
      <Header />
      <Welcome
       name="Mark"
       role="Student"
       description="Organise your learning, one task at a time." />
      <Subjects />
    </div>
  )
}

export default App