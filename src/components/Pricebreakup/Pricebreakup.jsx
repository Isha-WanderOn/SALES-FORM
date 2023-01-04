import React from "react";
import {
  Details,
  H3,
  Hr,
  P,
  Span,
  TopHeading,
} from "../RightSidebar/RightSidebar.style";

const Pricebreakup = () => {
  return (
    <div>
      <TopHeading>Price Break-up</TopHeading>
      <hr />
      <Details>
        <div>
          <P style={{ fontWeight: "600" }}>Total Price</P>
        </div>
      </Details>
      <Details>
        <P>Early Bird Offer - 5k</P>
        <P>Rs. 20,000/-</P>
      </Details>
      <Details>
        <P>Early Bird Offer - 10k</P>
        <P>Rs. 60,000/-</P>
      </Details>
      <Hr small />
      <Details>
        <P></P>
        <P>Rs. 80,000/-</P>
      </Details>
      <Hr small />
      <Details>
        <P gr>Total Discount</P>
        <P gr> -Rs. 5000/-</P>
      </Details>
      <Hr small />
      <Details>
        <P>Price After Discount</P>
        <P> Rs. 75,000/-</P>
      </Details>
      <Hr small />
      <Details>
        <P>Taxes & Service Fees</P>
        <P> Rs. 2,000/-</P>
      </Details>
      <Hr small />
      <Details>
        <P style={{ fontWeight: "600" }}>Total amount to be Paid</P>
        <P style={{ color: " #FE2F37" }}> Rs. 77,000/-</P>
      </Details>
    </div>
  );
};

export default Pricebreakup;
