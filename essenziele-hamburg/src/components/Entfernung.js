import React from "react";
import { useForm } from "react-hook-form";

const Entfernung = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h2>Entfernung</h2>
      <form onChange={handleSubmit(onSubmit)}>
        <ul className="options-selector">
          <li>
            <input
              type="radio"
              value="*"
              name="ent"
              id="ent1"
              ref={register()}
            />
            <label htmlFor="ent1">Egal</label>
          </li>
          <li>
            <input
              type="radio"
              value="**"
              name="ent"
              id="ent2"
              ref={register()}
            />
            <label htmlFor="ent2">nicht so weit weg</label>
          </li>
          <li>
            <input
              type="radio"
              value="***"
              name="ent"
              id="ent3"
              ref={register()}
            />
            <label htmlFor="ent3">ganz nah dran</label>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Entfernung;
