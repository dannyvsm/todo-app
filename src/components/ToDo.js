import { useState } from "react"

 //define the function which will take in user input and return it to our app
const ToDo = () => {
    const [listItem, setItem] = useState("")

    const addHandler = () => {

        setItem("")
    }

    return (
        <div>
            <button onClick={addHandler}>add</button>
        </div>
    );
}

export default ToDo