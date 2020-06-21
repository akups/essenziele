import React from "react";
import { useForm } from "react-hook-form";

const Preis = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h2>Preis</h2>
      <form onChange={handleSubmit(onSubmit)}>
        <ul className="options-selector">
          <li>
            <input
              type="radio"
              value="*"
              name="preis"
              id="preis1"
              ref={register()}
            />
            <label htmlFor="preis1">Egal</label>
          </li>
          <li>
            <input
              type="radio"
              value="**"
              name="preis"
              id="preis2"
              ref={register()}
            />
            <label htmlFor="preis2">nicht zu viel</label>
          </li>
          <li>
            <input
              type="radio"
              value="***"
              name="preis"
              id="preis3"
              ref={register()}
            />
            <label htmlFor="preis3">Ende des Monats</label>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Preis;
