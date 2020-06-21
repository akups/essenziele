import React from "react";

const Kategorie = () => {
  return (
    <div>
      <h2>Kategorie - FILTER</h2>
      <ul className="options-selector">
        <li>
          <input type="radio" value="Alles" name="Alles" id="kat1" />
          <label for="kat1">Alles</label>
        </li>
        <li>
          <input type="radio" value="Burger" name="radio" id="kat2" />
          <label for="kat2">Burger</label>
        </li>
        <li>
          <input type="radio" value="Pizza / Pasta" name="radio" id="kat3" />
          <label for="kat3">Pizza/Pasta</label>
        </li>
        <li>
          <input type="radio" value="Asiatisch" name="radio" id="kat4" />
          <label for="kat4">Asiatisch</label>
        </li>
        <li>
          <input type="radio" value="Hausmannskost" name="radio" id="kat5" />
          <label for="kat5">Hausmannskost</label>
        </li>
        <li>
          <input type="radio" value="Sonstiges" name="radio" id="kat6" />
          <label for="kat6">Sonstiges</label>
        </li>
      </ul>
    </div>
  );
};

export default Kategorie;
