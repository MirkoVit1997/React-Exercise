export function UncontrolledLogin() {
    function handleFormSubmit(event) {
        event.preventDefault()
         /*  METODO CLASSICO PER ACCEDERE AI VALORI DEGLI ELEMENTI DEL MODULO
    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const session = event.target.elements.namedItem("session").checked;*/

        const formData = new FormData(event.target)

        const username= formData.get("username")
        const password= formData.get("password")
        const session= formData.get("session")

        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
            session: formData.get("session") === "on" ? true : false
        }
        console.log(data);
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <h1>My Uncontrolled Form</h1>
            <input name="username"></input>
            <input name="password" tyoe="password"></input>
            <input name="session" type="checkbox"></input>
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}