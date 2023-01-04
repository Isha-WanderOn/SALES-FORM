import React, { useState } from "react";
import Pricebreakup from "../Pricebreakup/Pricebreakup";
import Review from "../Review/Review";
import { SideDiv } from "./RightSidebar.style";
const RightSidebar = () => {
  return (
    <SideDiv>
      <Review />
      <Pricebreakup />
    </SideDiv>
  );
};

export default RightSidebar;
