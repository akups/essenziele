import React from "react";

const Kategorie = () => {
  return (
    <div>
      <h2>Kategorie - FILTER</h2>
      <ul>
        <li>
          <input type="radio" value="Alles" name="radio" id="radio1" />
          <label for="radio1">Alles</label>
        </li>
        <li>
          <input type="radio" value="Burger" name="radio" id="radio2" />
          <label for="radio2">Burger</label>
        </li>
        <li>
          <input type="radio" value="Pizza/Pasta" name="radio" id="radio3" />
          <label for="radio3">Pizza/Pasta</label>
        </li>
        <li>
          <input type="radio" value="Asiatisch" name="radio" id="radio1" />
          <label for="radio1">Asiatisch</label>
        </li>
        <li>
          <input type="radio" value="Hausmannskos" name="radio" id="radio3" />
          <label for="radio3">Hausmannskost</label>
        </li>
        <li>
          <input type="radio" value="Sonstiges" name="radio" id="radio3" />
          <label for="radio3">Sonstiges</label>
        </li>
      </ul>
    </div>
  );
};

export default Kategorie;
