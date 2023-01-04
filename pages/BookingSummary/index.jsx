import React, { useContext, useState } from "react";
import DownloadClient from "../../src/components/DownloadClient/DownloadClient";
import FormInput from "../../src/components/FormInputs/FormInput";
import { BookingButton } from "../../src/components/LeftSidebar/LeftSidebar.style";
import OtherClient from "../../src/components/OtherClient/OtherClient";
import {
  Details,
  Hr,
  P,
} from "../../src/components/RightSidebar/RightSidebar.style";
import { Form } from "../../src/context/FormContext";
import {
  Box,
  H1,
  MainHeading,
  Marginer,
  Row,
  Row2,
} from "./BookingSummary.style";

const BookingSummary = () => {
  const { refrenceno, count5k, count10k } = useContext(Form);
  const [download, setDownload] = useState(false);

  const handleDownload = () => {
    download === true ? setDownload(false) : setDownload(true);
  };
  return (
    <Marginer>
      <Row>
        <MainHeading>Booking Summary</MainHeading>
      </Row>
      <Row2>
        <H1>Reference no.- {refrenceno}</H1>
      </Row2>
      <Row2>
        <Box>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <H1>Early Bird Offer - 5k</H1>
              <H1 pay>Rs. 5000/-</H1>
            </div>
            <H1>X</H1>
            <H1>{count5k}</H1>
            <H1>=</H1>
            <H1>Rs. {5000 * count5k}</H1>
          </div>
        </Box>
      </Row2>
      <Row2>
        <Box>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <H1>Early Bird Offer - 10k</H1>
              <H1 pay>Rs. 10,000/-</H1>
            </div>
            <H1>X</H1>
            <H1>{count10k}</H1>
            <H1>=</H1>
            <H1>Rs.{10000 * count10k}</H1>
          </div>
        </Box>
      </Row2>
      <Row2>
        <H1 pay>Payment Details</H1>
      </Row2>
      <Row2>
        <p></p>
        <div style={{ width: "50%" }}>
          <Details>
            <P style={{ fontWeight: "600" }}>Total Price</P>
            <P>Rs. {5000 * count5k + 10000 * count10k}/-</P>
          </Details>
          <Hr small />
          <Details>
            <P>Taxes & Service Fees</P>
            <P> Rs. 2,000/-</P>
          </Details>
          <Hr small />
          <Details>
            <P style={{ fontWeight: "600" }}>Grand total</P>
            <P style={{ color: " #FE2F37" }}>
              Rs. {5000 * count5k + 10000 * count10k + 2000}/-
            </P>
          </Details>
        </div>
      </Row2>
      {download === true ? (
        <><DownloadClient /><OtherClient /></>
      ) : (
        <Row>
          <BookingButton onClick={handleDownload}>
            Download Booking Voucher
          </BookingButton>
        </Row>
      )}
    </Marginer>
  );
};

export default BookingSummary;
