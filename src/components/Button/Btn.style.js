import styled from "styled-components";

export const ButtonDiv = styled.div`
  display: flex;
  background: #0a9e88;
  border-radius: 4.2rem;
  width: 10.03vw;
  height: 4rem;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 480px) {
    height: 3rem;
    border-radius: 1rem;
  }
`;

export const IncrementBtn = styled.div`
  height: 4rem;
  font-size: 2.4rem;
  color: white;
  border-radius: 4.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const DecrementBtn = styled.div`
  height: 3.5rem;
  font-size: 2.4rem;
  color: white;
  border-radius: 4.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Num = styled.div`
  height: 4rem;
  font-size: 2.4rem;
  color: white;
  border-radius: 4.2rem;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
