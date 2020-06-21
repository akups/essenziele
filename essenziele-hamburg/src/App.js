import React from "react";
import Kategorie from "./components/Kategorie";
import Entfernung from "./components/Entfernung";
import Preis from "./components/Preis";
import Veggietauglich from "./components/Veggietauglich";
import Ergebnisse from "./components/Ergebnisse";
// import Karte from "./components/Karte";
import "./App.css";

class App extends React.Component {
  state = {
    Kategorie: "",
    Entfernung: "",
    Preis: "",
    Veggietauglich: "",
  };

  gatherInputValues = (inputValue) => {
    this.setState(inputValue);
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <h1>WO/WAS ESSEN WIR HEUTE</h1>
        <Kategorie fcn={this.gatherInputValues} />
        <Entfernung fcn={this.gatherInputValues} />
        <Preis fcn={this.gatherInputValues} />
        <Veggietauglich fcn={this.gatherInputValues} />
        <Ergebnisse filterdata={this.state} />
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
