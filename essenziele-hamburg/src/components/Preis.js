import React from "react";
import { useForm } from "react-hook-form";

const Preis = ({ fcn: gatherInputValues }) => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (values) => {
    gatherInputValues(values);
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
              name="Preis"
              id="preis1"
              ref={register()}
            />
            <label htmlFor="preis1">Egal</label>
          </li>
          <li>
            <input
              type="radio"
              value="**"
              name="Preis"
              id="preis2"
              ref={register()}
            />
            <label htmlFor="preis2">nicht zu viel</label>
          </li>
          <li>
            <input
              type="radio"
              value="***"
              name="Preis"
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
