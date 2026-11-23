import Welcome from "./components/welcome"
import Header from "./components/Header"
function App() {
  return (
    <div>
      <Header />
      <Welcome description="Your personal study companion" />
    </div>
  )
}

export default App