import React from "react";
import Btn from "../Button/Btn";
import Heading from "../Headings/Heading";
import {
  SelectorsContainer,
  SelectorsWrapper,
  Selector,
  P,
  H3,
  Wrap,
  OuterDiv,
} from "./Voucher.style";

const Voucher = () => {
  return (
    <OuterDiv>
      <Heading Heading="Voucher" />
      <SelectorsContainer>
        <SelectorsWrapper>
          <Selector>
            <Wrap>
              <P>Early bird offer - 5k</P>
              <H3>Rs. 5000/-</H3>
            </Wrap>
            <Btn fivek/>
          </Selector>
          <Selector>
            <Wrap>
              <P>Early bird offer - 10k</P>
              <H3>Rs. 10,000/-</H3>
            </Wrap>
            <Btn />
          </Selector>
        </SelectorsWrapper>
      </SelectorsContainer>
    </OuterDiv>
  );
};

export default Voucher;
