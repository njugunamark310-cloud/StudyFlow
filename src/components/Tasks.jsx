import { useState, useEffect } from "react"

function Tasks() {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function getTasks() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
            
        }

    }, [])
    return (
        <section>
            <h2>My Tasks</h2>
        </section>
    )
}

export default Tasks