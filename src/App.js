import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://ranakshetram.vercel.app/api/v1/keyword").then((response) =>
      response.json()
    ).then(data => {
      this.setState({ monsters : data.keywords })
    })
  }

  render() {
    return <div className="App">
      {this.state.monsters.map(data => 
        (<h1 key={data.id}>{data.title}</h1>)
      )}
    </div>;
  }
}

export default App;
