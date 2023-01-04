import styled from "styled-components";

export const OuterDiv = styled.div`
  margin-top: 3rem;
`;

export const SelectorsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 1.83vw;
`;

export const SelectorsWrapper = styled.div`
  margin-right: 4.75vw;
`;
export const Selector = styled.div`
  padding: 1.7rem 2.2vw 1.7rem 2.2vw;
  width: 39.6vw;
  height: 9rem;
  border: 0.2rem dashed #000000;
  border-radius: 0.6rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 480px) {
    width: 50vw;
    height: 5rem;
    padding: 1rem;
  }
`;

export const P = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.2rem;
  padding: 0;
  padding-bottom: 1rem;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`;
export const H3 = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #008d71;
  padding: 0;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export const Wrap = styled.div`
  display: inline;
`;
