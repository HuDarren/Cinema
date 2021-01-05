import React from "react"

function SearchHome () {
const [state, setState] = React.useState({
    title: "",
    info: ""
})

async function getInfo() {
    let response = await fetch("")
    let data = response.json()
    setState ({
        info: data ,
        title:""
    })
}

function handleSubmit(event) {
    event.preventDefault()
    getInfo()
}

function handleChange(event) {
   setState({...setState, [event.target.name] : event.target.value }) 
}

    return <div>
        <form onSubmit={handleSubmit}>
            <input
            name = "title"
            type = "text"
            value = {state.title}
            onChange={handleChange}
            ></input>
            <button
            type="submit"
            >Click</button>
        </form>
        <div>{state.info ? 
        
            <div>Hello </div>
    : null 
    } </div>
    </div>
}

export default SearchHome