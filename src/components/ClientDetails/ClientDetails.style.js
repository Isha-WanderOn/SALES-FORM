import styled from "styled-components";

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 2.5rem;
`;

export const InputSection2 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 5.78vw;
  @media (max-width: 480px){
    flex-direction: column;
  }
`;

export const Select = styled.select`
  width: 5vw;
  height: 3rem;
  padding: 0.3rem 1.2rem 0.3rem 1.2rem;
  background: #f1f1f1;
  border-radius: 2rem;
  z-index: 2;
  position: absolute;
  top: 1.5rem;
  left: 1rem;
  outline: transparent;
  border: transparent;
  text-align: center;
  font-size: 1rem;
`;
