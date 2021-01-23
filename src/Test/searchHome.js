import React from "react";

function Home() {
  const [state, setState] = React.useState({
    title: "",
    info: "",
  });

  async function getInfo() {
    let response = await fetch("");
    let data = await response.json();
    setState({
      info: data,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    getInfo();
  }

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={state.title}
          onChange={handleChange}></input>
      </form>
      <button type="submit">Click</button>
      <div>{state.info ? <div>Hello</div> : null}</div>
    </div>
  );
}

export default Home;
