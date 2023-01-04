import React, { useContext } from "react";
import { Form } from "../../context/FormContext";
import {
  Details,
  TopHeading,
  H3,
  P,
  Hr,
  Li,
  Span,
  Bullet,
} from "../RightSidebar/RightSidebar.style";

const Review = () => {
  const {count10k, count5k} = useContext(Form);
  return (
    <div>
      <div>
        <TopHeading>Reviews</TopHeading>
        <hr />
      </div>
      <Details>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <P style={{color: '#171717'}}>Early Bird Offer - 5k</P>
          <span
            style={{ fontSize: "1rem", lineHeight: "12.1px", color: "#8C8C8C" }}
          >
            <Bullet>{count5k}</Bullet>
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <H3>Rs. 5000/-</H3>
          <span
            style={{ fontSize: "1rem", lineHeight: "12.1px", color: "#8C8C8C" }}
          >
            Per Person
          </span>
        </div>
      </Details>
      <Hr />
      <Details>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <P  style={{color: '#171717'}}>Early Bird Offer - 10k</P>
          <span
            style={{ fontSize: "1rem", lineHeight: "12.1px", color: "#8C8C8C" }}
          >
            <Bullet>{count10k}</Bullet>
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <H3>Rs. 10,000/-</H3>
          <span
            style={{ fontSize: "1rem", lineHeight: "12.1px", color: "#8C8C8C" }}
          >
            Per Person
          </span>
        </div>
      </Details>
    </div>
  );
};

export default Review;
