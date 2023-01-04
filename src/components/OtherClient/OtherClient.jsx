import React, { useContext } from "react";
import { Form } from "../../context/FormContext";
import Heading from "../Headings/Heading";
import Modals from "../Modal/Modals";
import { P } from "../Voucher/Voucher.style";
import { OtherClientDiv } from "./OtherClient.style";

const OtherClient = () => {
  const { otherClient, show, setShow } = useContext(Form);
  return (
    <div>
      <Heading Heading="Other Clients" />
      <button onClick={()=>{setShow(true)}}> + Add Other Clients</button>
      {
        show && <Modals />
      }
      {otherClient.map((o) => {
        return (
          <div key={Math.random()}>
          <OtherClientDiv>
            <p>{o.name}</p>
            <p>{o.phone}</p>
            <p>{o.gender}</p>
          </OtherClientDiv>
          </div>
        );
      })}
    </div>
  );
};

export default OtherClient;
