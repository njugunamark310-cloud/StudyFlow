import { useState, useEffect } from "react"

function Tasks() {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function getTasks() {
          try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")

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

        getTasks()
    }

    }, [])
    return (
        <section>
            <h2>My Tasks</h2>
        </section>
    )
}

export default Tasks