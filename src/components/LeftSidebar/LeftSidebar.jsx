/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import ClientDetails from "../ClientDetails/ClientDetails";
import { InputSection } from "../ClientDetails/ClientDetails.style";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import Screenshotupload from "../ScreenshotUpload/Screenshotupload";
import Voucher from "../Voucher/Voucher";
import {
  BookingButton,
  LeftBarMarginer,
  LeftDiv,
  MainHeading1,
  RowA,
} from "./LeftSidebar.style";
import { useRouter } from "next/router";
import Parse from "../../../pages/db";
import { Form } from "../../context/FormContext";

const LeftSidebar = () => {
  const router = useRouter();
  const {
    name,
    email,
    address,
    phone,
    clientcode,
    count5k,
    count10k,
    destination,
    gender,
    refrenceno,
    sellingAmt,
    recievedAmt,
    totalAmt,
    setTotalAmt,
    leadSrc,
    salesPhn,
    salecode,
    payment,
    salesFullname,
    salesEmail,
    Remark,
  } = useContext(Form);
  const AddClient = async function () {
    const currentClient = new Parse.Object("Clients");
    currentClient.set("clientname", name);
    currentClient.set("email", email);
    currentClient.set("address", address);
    currentClient.set("phoneno", phone);
    currentClient.set("countrycode", clientcode);
    currentClient.set("destination", destination);
    currentClient.set("gender", gender);
    currentClient.save();
  };
  const AddPaymentDetails = async function () {
    const payments = new Parse.Object("Payment");
    payments.set("referenceno", refrenceno);
    payments.set("sellingAmt", sellingAmt);
    payments.set("recievedAmt", recievedAmt);
    payments.set("salespersonphn", salesPhn);
    payments.set("salescode", salecode);
    payments.set("leadsource", leadSrc);
    payments.set("paymentmethod", payment);
    payments.set("salespersonname", salesFullname);
    payments.set("salespersonemail", salesEmail);
    payments.set("remarks", Remark);
    payments.save();
  };

  // const AddVoucher = async function () {
  //   const myvoucher = new Parse.Object("Voucher");
  //   myvoucher.set("refernceno", refrenceno);
  //   myvoucher.set("voucher5k", count5k);
  //   myvoucher.set("voucher10k", count10k);
  //   myvoucher.set("totalAmt", totalAmt);
  //   myvoucher.save();
  // };

  const Total = async function(){
    setTotalAmt(5000 * count5k + 10000 * count10k + 2000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/BookingSummary");
    Total();
    AddClient();
    AddPaymentDetails();
    // AddVoucher();
  };
  return (
    <LeftDiv>
      <LeftBarMarginer>
        <RowA>
          <MainHeading1>Client's Information</MainHeading1>
        </RowA>

        <form onSubmit={handleSubmit}>
          <Voucher />
          <ClientDetails />
          {/* <BookingDetails /> */}
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
