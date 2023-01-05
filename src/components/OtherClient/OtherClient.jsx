import React, { useContext } from "react";
import { Form } from "../../context/FormContext";
import Heading from "../Headings/Heading";
import Modals from "../Modal/Modals";
import { OtherClientDiv } from "./OtherClient.style";

const OtherClient = () => {
  const { otherClient, show, setShow, setEditClient } =
    useContext(Form);
  const handleEdit = (o) => {
    setEditClient(o);
  };

  return (
    <div>
      <Heading Heading="Other Clients" />
      <h1
        onClick={() => {
          setShow(true);
        }}
      >
        + Add Other Clients
      </h1>
      {show && <Modals />}
      {otherClient.map((o) => {
        return (
          <div key={Math.random()} onClick={() => handleEdit(o)}>
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
