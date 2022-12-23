import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Monster One",
          id: "M1",
        },
        {
          name: "Monster Two",
          id: "M2",
        },
        {
          name: "Monster Three",
          id: "M3",
        },
        {
          name: "Monster Four",
          id: "M4",
        },
        {
          name: "Monster Five",
          id: "M5",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <CardList monsters = {this.state.monsters}/>
      </div>
    );
  }
}

export default App;
