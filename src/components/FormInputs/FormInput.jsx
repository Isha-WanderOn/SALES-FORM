import React from "react";
import { Container } from "./FormInput.style";

const FormInput = ({ type, label, value,name, placeholder, wid, ...rest }) => {
  return (
    <Container wid={wid} type={type} name={name}>
      <div className="input-outline">
        <input
          type={type}
          {...rest}
          value={value}
          placeholder={placeholder}
          name={name}
        />
        <span className="border" />
        <label>{label}</label>
      </div>
    </Container>
  );
};

export default FormInput;
