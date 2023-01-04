import React from "react";
import LeftSidebar from "../../src/components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../src/components/RightSidebar/RightSidebar";
import { MainDiv } from "./MainPage.style";

const MainPage = () => {
  return (
    <MainDiv>
      <LeftSidebar />
      <RightSidebar />
    </MainDiv>
  );
};

export default MainPage;
