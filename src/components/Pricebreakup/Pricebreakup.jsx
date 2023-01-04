import React, { useContext } from "react";
import { Form } from "../../context/FormContext";
import {
  Details,
  H3,
  Hr,
  P,
  Span,
  TopHeading,
} from "../RightSidebar/RightSidebar.style";

const Pricebreakup = () => {
  const {count5k, count10k} = useContext(Form);
  return (
    <div>
      <TopHeading>Price Break-up</TopHeading>
      <hr />
      <Details>
        <div>
          <P style={{ color: "#171717", fontWeight: "600" }}>Total Price</P>
        </div>
      </Details>
      <Details>
        <P>Early Bird Offer - 5k</P>
        <P>Rs. {count5k * 5000}/-</P>
      </Details>
      <Details>
        <P>Early Bird Offer - 10k</P>
        <P>Rs. {count10k * 10000}/-</P>
      </Details>
      <Hr small />
      <Details>
        <P>Taxes & Service Fees</P>
        <P> Rs. 2,000/-</P>
      </Details>
      <Hr />
      <Details>
        <P style={{ color: "#171717", fontWeight: "600" }}>Grand Total</P>
        <P style={{ color: " #FE2F37" }}> Rs. {(count5k * 5000) + (count10k * 10000) + 2000}</P>
      </Details>
    </div>
  );
};

export default Pricebreakup;
