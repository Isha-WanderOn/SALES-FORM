import React from "react";
import {
  Details,
  TopHeading,
  H3,
  P,
  Hr,
  Li,
  Span,
} from "../RightSidebar/RightSidebar.style";

const Review = () => {
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
            Base Price
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
        <ul style={{ listStylePosition: "inside" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Li>Badal ranjan</Li>
            <Span>Male</Span>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0.8rem",
            }}
          >
            <Li>Mayank</Li>
            <Span>Male</Span>
          </div>
        </ul>
      </Details>
      <hr />
      <Details>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <P  style={{color: '#171717'}}>Early Bird Offer - 10k</P>
          <span
            style={{ fontSize: "1rem", lineHeight: "12.1px", color: "#8C8C8C" }}
          >
            Base Price
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
      <Hr />
      <Details>
        <ul style={{ listStylePosition: "inside" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Li>Badal ranjan</Li>
            <Span>Male</Span>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0.8rem",
            }}
          >
            <Li>Mayank</Li>
            <Span>Male</Span>
          </div>
        </ul>
      </Details>
    </div>
  );
};

export default Review;
