import React from "react";
import { useForm } from "react-hook-form";

const Veggietauglich = ({ fcn: gatherInputValues }) => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (values) => {
    gatherInputValues(values);
  };
  return (
    <div>
      <h2>Veggietauglich</h2>
      <form onChange={handleSubmit(onSubmit)}>
        <ul className="options-selector">
          <li>
            <input
              type="radio"
              value="*"
              name="Veggietauglich"
              id="veggie1"
              ref={register()}
            />
            <label htmlFor="veggie1">Egal</label>
          </li>
          <li>
            <input
              type="radio"
              value="**"
              name="Veggietauglich"
              id="veggie2"
              ref={register()}
            />
            <label htmlFor="veggie2">sollte schon schmecken</label>
          </li>
          <li>
            <input
              type="radio"
              value="***"
              name="Veggietauglich"
              id="veggie3"
              ref={register()}
            />
            <label htmlFor="veggie3">muss ganz lecker sein</label>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Veggietauglich;
