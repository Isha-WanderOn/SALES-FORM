import React, { useContext } from "react";
import { Form } from "../../context/FormContext";
import BookingDetails from "../BookingDetails/BookingDetails";
import ClientDetails from "../ClientDetails/ClientDetails";
import { InputSection } from "../ClientDetails/ClientDetails.style";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import Screenshotupload from "../ScreenshotUpload/Screenshotupload";
import Voucher from "../Voucher/Voucher";
import { BookingButton, LeftBarMarginer, LeftDiv } from "./LeftSidebar.style";
import {useRouter} from 'next/router';

const LeftSidebar = () => {
  const router  = useRouter();
  const handleSubmit = (e) =>{
    e.preventDefault();
    router.push('/BookingSummary');
  }
  return (
    <LeftDiv>
      <LeftBarMarginer>
        <form onSubmit={handleSubmit}>
          <Voucher />
          <ClientDetails />
          <BookingDetails />
          <PaymentDetails />
          <Screenshotupload />
          <InputSection>
            <BookingButton type="submit">Generate Booking</BookingButton>
          </InputSection>
        </form>
      </LeftBarMarginer>
    </LeftDiv>
  );
};

export default LeftSidebar;
