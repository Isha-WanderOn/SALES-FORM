import styled from "styled-components";

export const SideDiv = styled.div`
  width: 24.75%;
  background: #f8f8f8;
  border-left: 2px solid rgba(134, 134, 134, 0.3);
`;

export const TopDiv = styled.div``;
export const TopHeading = styled.h1`
  font-size: 2rem;
  color: #008d71;
  line-height: 19.36px;
  margin-top: 3rem;
  margin-left: 1.2vw;
  margin-bottom: 1.1rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.2vw 1.2rem 1.2vw;
`;

export const P = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.025vw;
  line-height: 16.94px;
  color: ${(props)=> props.gr ? '#0A9E88': 'rgba(23, 23, 23, 0.8)'};
  padding: 0;
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
  font-size: 1.025vw;
  line-height: 16.94px;
  color: #008d71;
  padding: 0;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export const Hr = styled.hr`
  width: 95%;
  border-top: 1px ${(props)=> props.small ? 'solid': 'dashed'} #dbdbdb;
  border-left: 1px solid transparent;
  border-bottom: 1px solid transparent;
  margin-left: 1.2vw;
`;

export const Li = styled.li`
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: rgba(65, 65, 65, 0.95);
`;

export const Span = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: rgba(140, 140, 140, 0.8);
  margin-left: 11.80vw;
`;
