import styled from "styled-components";

export const Container = styled.div`
  .input-outline {
    width: ${(props) => (props.wid === "half" ? "23.35vw" : "49vw")};
    position: relative;
    display: flex;
    margin-bottom: 30px;
    height: 54px;
    @media (max-width: 480px) {
      width: ${(props) => (props.wid === "half" ? "49vw" : "49vw")};
    }
    select {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      padding: 12px 12px 7px;
      padding-left: ${(props) => (props.type === "String" ? "100px" : "12px")};
      display: block;
      width: ${(props) => (props.wid === "half" ? "23.35vw" : "49vw")};
      border: none;
      border-radius: 8px;
      color: rgb(116, 132, 143);
      &:focus {
        outline: none;
      }
      &:not(:focus)::placeholder {
        color: ${(props) =>
          props.type === "String" || props.name === "dropdown"
            ? "rgb(116, 132, 143)"
            : "transparent"};
      }
      &:focus ~ label,
      &:not([value=""]) ~ label {
        top: -7px;
        font-size: 16px;
        color: #0a9e88;
        background: #fff;
        padding: 0px 8px;
      }
      &:hover ~ .border {
        border: 2px solid #0a9e88 !important;
        border-radius: 4px;
        position: absolute;
        top: 0px;
        pointer-events: none;
        transition: all 0.1s ease;
      }
      &:focus ~ .border {
        border: 2px solid #0a9e88 !important;
        border-radius: 4px;
        position: absolute;
        top: 0px;
        pointer-events: none;
        transition: all 0.1s ease;
      }
      @media (max-width: 480px) {
      width: ${(props) => (props.wid === "half" ? "49vw" : "49vw")};
    }
    }

    label {
      color: #0a9e88;
      font-size: 16px;
      font-weight: 400;
      position: absolute;
      pointer-events: none;
      left: 12px;
      background: ${(props) =>
        props.type === "date" || props.type === "String" ? "#fff" : ""};
      top: ${(props) =>
        props.type === "date" ||
        props.type === "String" ||
        props.name === "dropdown"
          ? "-7px"
          : "9px"};
      transition: 0.2s ease;
      padding: 0 8px;
    }

    .border {
      border: 2px solid #0a9e88;
      border-radius: 4px;
      position: absolute;
      width: ${(props) => (props.wid === "half" ? "23.35vw" : "49vw")};
      height: 100%;
      top: 0px;
      pointer-events: none;
      transition: all 0.3s ease;
      @media (max-width: 480px) {
      width: ${(props) => (props.wid === "half" ? "49vw" : "49vw")};
    }
    }
  }
`;
