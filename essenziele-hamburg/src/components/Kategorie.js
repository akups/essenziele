import React from "react";
import { useForm } from "react-hook-form";

const Kategorie = ({ fcn: gatherInputValues }) => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (values) => {
    gatherInputValues(values);
  };
  return (
    <div>
      <h2>Kategorie - FILTER</h2>
      <form onChange={handleSubmit(onSubmit)}>
        <ul className="options-selector">
          <li>
            <input
              type="radio"
              value="Alles"
              name="Kategorie"
              id="kat1"
              ref={register()}
            />
            <label htmlFor="kat1">Alles</label>
          </li>
          <li>
            <input
              type="radio"
              value="Burger"
              name="Kategorie"
              id="kat2"
              ref={register()}
            />
            <label htmlFor="kat2">Burger</label>
          </li>
          <li>
            <input
              type="radio"
              value="Pizza / Pasta"
              name="Kategorie"
              id="kat3"
              ref={register()}
            />
            <label htmlFor="kat3">Pizza/Pasta</label>
          </li>
          <li>
            <input
              type="radio"
              value="Asiatisch"
              name="Kategorie"
              id="kat4"
              ref={register()}
            />
            <label htmlFor="kat4">Asiatisch</label>
          </li>
          <li>
            <input
              type="radio"
              value="Hausmannskost"
              name="Kategorie"
              id="kat5"
              ref={register()}
            />
            <label htmlFor="kat5">Hausmannskost</label>
          </li>
          <li>
            <input
              type="radio"
              value="Sonstiges"
              name="Kategorie"
              id="kat6"
              ref={register()}
            />
            <label htmlFor="kat6">Sonstiges</label>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Kategorie;
