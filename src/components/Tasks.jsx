import { useState, useEffect } from "react"

function Tasks() {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [filter, setFilter] = useState("all")

   function toggleTask(taskId) {
    setTasks(
        tasks.map((task) =>
            task.id === taskId
                ? { ...task, completed: !task.completed }
                : task
        )
    )
}
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed

    return true
})

    useEffect(() => {
        async function getTasks() {
          try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos?_limit=5",
                { signal: controller.signal}
            )

            if (!response.ok) {
                throw new Error("Failed to fetch tasks")
            }

            const data = await response.json()

            setTasks(data)

        } catch (error) {
           if (error.name !== "AbortError") {
            setError(error.message)
           }
            
        }

        finally {
            if (!controller.signal.aborted) {
                setLoading(false)
            }
        }

       
    }

    const controller = new AbortController()

     getTasks()
    
    return () => controller.abort()
    }, [])
    return (
        <section>
            <h2>My Tasks</h2>
   <div className="task-filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
   </div>
            {loading && <p>Loading tasks...</p>}
            {error && <p>{error}</p>}
        <ul>
  {filteredTasks.map((task) => (
    <li key={task.id}>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          opacity: task.completed ? 0.5 : 1
        }}
      >
        {task.title}
      </span>

      <button onClick={() => toggleTask(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      
    </li>
  ))}
</ul>
        </section>
    )
}

export default Tasks