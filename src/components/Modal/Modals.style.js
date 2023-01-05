import styled from "styled-components";

export const ModalBox = styled.div`
  height: 361px;
  width: 50.07vw;
  background-color: green;
  padding: 50px 10px;
  z-index: 3;
  background-color: #ffffff;
  border-radius: 14px;
  /* backdrop-filter: blur(30px); */
  border: 1px solid green;
`;

export const ModalOuter = styled.div`
  display: flex;
  position: fixed;
  top: 0%;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: auto;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;
