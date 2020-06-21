import React from "react";
import data from "../data/essenziele.json";

const Ergebnisse = ({ filterData }) => {
  //console.log(filterData, data);
  const filteredData = data.filter((ziele) => {
    if (
      ziele.Kategorie === filterData.Kategorie ||
      ziele["Veggie-Tauglich"] === filterData.Veggietauglich ||
      ziele.Preis === filterData.Preis ||
      ziele.Entfernung === filterData.Entfernung
    ) {
      return true;
    } else return false;
  });
  console.log(filteredData, data, filterData);
  return (
    <div>
      <h2>Ergebnisse</h2>
      <div>
        <ol>
          {filteredData.map((el, index) => (
            <li key={index}>
              {el.Name}||💰{el.Preis}||🚗{el.Entfernung}||🥦
              {el["Veggie-Tauglich"]}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Ergebnisse;
