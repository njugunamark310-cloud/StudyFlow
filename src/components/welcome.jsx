function Welcome ({ name, role, description}) {
    return (
    <div className="welcome-section">
       <h1>Welcome to StudyFlow</h1> 
       <h2>Hello {name}!</h2>
       <p>Role: {role}</p>
       <p>{description}</p>
    </div>
    )
}
export default Welcome
