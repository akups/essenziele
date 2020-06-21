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
  };

  render() {
    return (
      <div className="App">
        <h1>WO/WAS ESSEN WIR HEUTE</h1>
        <Kategorie fcn={this.gatherInputValues} />
        <Entfernung fcn={this.gatherInputValues} />
        <Preis fcn={this.gatherInputValues} />
        <Veggietauglich fcn={this.gatherInputValues} />
        <div className="bottom-container">
          <div className="ergebnisse">
            <Ergebnisse filterData={this.state} />
          </div>
          <div>
            <button className="reset">Reset</button>
            <button className="randomize">Randomize</button>
          </div>
        </div>
        {/* <Karte /> */}
      </div>
    );
  }
}

export default App;
