import React, { useContext, useState } from "react";
import { Form } from "../../context/FormContext";
import Heading from "../Headings/Heading";
import Modals from "../Modal/Modals";
import { OtherClientDiv } from "./OtherClient.style";
import { Row } from "../../../pages/BookingSummary/BookingSummary.style";
import { BookingButton } from "../LeftSidebar/LeftSidebar.style";
import Parse from "../../../pages/db";

const OtherClient = () => {
  const {
    otherClient,
    show,
    setShow,
    count5k,
    count10k,
    totalAmt,
    refrenceno,
    setDownload
  } = useContext(Form);
  const [visible, setVisible] = useState(true);
  
  const removeElement = () => {
    confirm("Do you really want to delete this traveler ?") &&
      setVisible((prev) => !prev);
  };
  const AddOtherClient = async function () {
    const myvoucher = new Parse.Object("Voucher");
    myvoucher.set("refernceno", refrenceno);
    myvoucher.set("voucher5k", count5k);
    myvoucher.set("voucher10k", count10k);
    myvoucher.set("totalAmt", totalAmt);
    myvoucher.set("otherclients", otherClient);
    myvoucher.save();
  };

  const handleClick = () => {
    AddOtherClient();
    setDownload(true);
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
          visible && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              key={Math.random()}
            >
              <OtherClientDiv>
                <p>{o.name}</p>
                <p>{o.phone}</p>
                <p>{o.gender}</p>
              </OtherClientDiv>
              <div onClick={removeElement}>
                <i
                  style={{ fontSize: "30px", color: "red" }}
                  className="fa fa-trash"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          )
        );
      })}
      <Row>
        <BookingButton onClick={handleClick}>Submit</BookingButton>
      </Row>
    </div>
  );
};

export default OtherClient;
