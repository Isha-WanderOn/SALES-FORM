import React from "react";
import { Container } from "./Dropdowninput.style";

const Dropdowninput = ({ type, label, value,name, wid, ...rest }) => {
  return (
    <Container wid={wid} type={type} name={name}>
      <div className="input-outline">
        <select
          type={type}
          {...rest}
          name={name}
        />
        <span className="border" />
        <label>{label}</label>
      </div>
    </Container>
  );
};

export default Dropdowninput;
