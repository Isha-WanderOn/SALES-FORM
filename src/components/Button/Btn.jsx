import React, { useContext, useState } from "react";
import { Form } from "../../context/FormContext";
import { ButtonDiv, DecrementBtn, IncrementBtn, Num } from "./Btn.style";

const Btn = (props) => {
  const {count5k, count10k, setCount5k,
    setCount10k} = useContext(Form);
  return (
    <ButtonDiv>
      <DecrementBtn onClick={() => {(props.fivek && setCount5k) ? `${setCount5k(count5k - 1)}`:  `${setCount10k(count10k - 1)}`} }>-</DecrementBtn>
      <Num>{(props.fivek) ? `${count5k}`:  `${count10k}`}</Num>
      <IncrementBtn onClick={() => {(props.fivek) ? `${setCount5k(count5k + 1)}`:  `${setCount10k(count10k + 1)}`}}>+</IncrementBtn>
    </ButtonDiv>
  );
};

export default Btn;
