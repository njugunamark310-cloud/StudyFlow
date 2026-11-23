import Welcome from "./components/welcome"
import Header from "./components/Header"
function App() {
  return (
    <div>
      <Header />
      <Welcome description="Oranise your learning, one task at a time." />
    </div>
  )
}

export default App