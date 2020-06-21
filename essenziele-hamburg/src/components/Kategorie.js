import React from "react";
import { useForm } from "react-hook-form";

const Kategorie = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (values) => {
    console.log(values);
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
              name="radio"
              id="kat1"
              ref={register()}
            />
            <label htmlFor="kat1">Alles</label>
          </li>
          <li>
            <input
              type="radio"
              value="Burger"
              name="radio"
              id="kat2"
              ref={register()}
            />
            <label htmlFor="kat2">Burger</label>
          </li>
          <li>
            <input
              type="radio"
              value="Pizza / Pasta"
              name="radio"
              id="kat3"
              ref={register()}
            />
            <label htmlFor="kat3">Pizza/Pasta</label>
          </li>
          <li>
            <input
              type="radio"
              value="Asiatisch"
              name="radio"
              id="kat4"
              ref={register()}
            />
            <label htmlFor="kat4">Asiatisch</label>
          </li>
          <li>
            <input
              type="radio"
              value="Hausmannskost"
              name="radio"
              id="kat5"
              ref={register()}
            />
            <label htmlFor="kat5">Hausmannskost</label>
          </li>
          <li>
            <input
              type="radio"
              value="Sonstiges"
              name="radio"
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
