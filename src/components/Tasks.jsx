import { useState, useEffect } from "react"

function Tasks() {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

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
            setError(error.message)
            
        }

        finally {
            setLoading(false)
        }

       
    }

    const controller = new AbortController()

     getTasks()

    }, [])
    return (
        <section>
            <h2>My Tasks</h2>
            {loading && <p>Loading tasks...</p>}
            {error && <p>{error}</p>}
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.title}
                </li>
            ))}
        </ul>
        </section>
    )
}

export default Tasks