import styled from "styled-components";

export const Marginer = styled.div`
  margin: 2.5rem 23.28vw;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 25px;
`;

export const Row2 = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;
`;
export const MainHeading = styled.h1`
  font-size: 3rem;
  line-height: 36.31px;
  font-weight: 600;
`;

export const H1 = styled.h1`
  font-size: ${(props) => (props.pay ? "1.8rem" : "1.6rem")};
  line-height: 19.36px;
  font-weight: 600;
  color: #171717;
`;

export const Box = styled.div`
  border: 2px dashed rgba(37, 37, 37, 0.8);
  border-radius: 6px;
  padding: 12px 20px;
  width: 100vw;
`;
