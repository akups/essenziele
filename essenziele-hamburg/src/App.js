import React from "react";
import Kategorie from "./components/Kategorie";
import Entfernung from "./components/Entfernung";
import Preis from "./components/Preis";
import Vegetauglich from "./components/Vegetauglich";
import Ergebnisse from "./components/Ergebnisse";
// import Karte from "./components/Karte";
import "./App.css";

class App extends React.Component {
  state = {
    Kategorie: "",
    Entfernung: "",
    Preis: "",
    Vegetauglich: "",
  };
  render() {
    return (
      <div className="App">
        <h1>WO/WAS ESSEN WIR HEUTE</h1>
        <Kategorie />
        <Entfernung />
        <Preis />
        <Vegetauglich />
        <Ergebnisse />
        <div>
          <button>Reset</button>
          <button>Randomize</button>
        </div>
        {/* <Karte /> */}
      </div>
    );
  }
}

export default App;
