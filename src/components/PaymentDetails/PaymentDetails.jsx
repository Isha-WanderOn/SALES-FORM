import React, { useContext, useState } from "react";
import { Form } from "../../context/FormContext";
import {
  InputSection,
  InputSection2,
  Select,
} from "../ClientDetails/ClientDetails.style";
import Dropdowninput from "../DropdownInput/Dropdowninput";
import FormInput from "../FormInputs/FormInput";
import Heading from "../Headings/Heading";
import { OuterDiv } from "../Voucher/Voucher.style";

const PaymentDetails = () => {
  const {
    refrenceno,
    sellingAmt,
    recievedAmt,
    leadSrc,
    salesPhn,
    salescode,
    payment,
    salesFullname,
    salesEmail,
    Remark,
    setSaleCode,
    setRemark,
    setSalesEmail,
    setSalesFullname,
    setPayment,
    setSalesPhn,
    setLeadSrc,
    setRecievedAmt,
    setSellingAmt,
    setReferenceNo,
  } = useContext(Form);
  return (
    <OuterDiv>
      <Heading Heading="Payment Details" />
      <InputSection />
      <InputSection2>
        <FormInput
          value={refrenceno}
          type="text"
          onChange={(e) => setReferenceNo(e.target.value)}
          name="ReferenceNo"
          label="Reference Number"
          wid="half"
          placeholder="Enter Reference Number"
          required
        />
      </InputSection2>
      <InputSection2>
        <FormInput
          value={sellingAmt}
          type="text"
          onChange={(e) => setSellingAmt(e.target.value)}
          name="SellingAmt"
          label="Selling Amount"
          wid="half"
          placeholder="Enter Selling Amount"
          required
        />
        <FormInput
          value={recievedAmt}
          type="text"
          onChange={(e) => setRecievedAmt(e.target.value)}
          name="RecievedAmt"
          label="Recieved Amount"
          wid="half"
          placeholder="Enter Recieved Amount"
          required
        />
      </InputSection2>
      <InputSection2>
        <Select onChange={(e)=> setSaleCode(e.target.value)}>
          <option>+91</option>
          <option>+11</option>
          <option>+23</option>
        </Select>
        <FormInput
          value={salesPhn}
          type="String"
          onChange={(e) => setSalesPhn(e.target.value)}
          name="InputOutlined"
          label="Phone Number"
          wid="half"
          placeholder="Enter Phone No."
          required
        />
        <Dropdowninput
          wid="half"
          label="Lead Source"
          defaultValue="Select Lead Source"
          required
        >
          <option disabled>Select Lead Source</option>
          <option value="">option 1</option>
          <option value="">option 2</option>
          <option value="">option 3</option>
          <option value="">option 4</option>
        </Dropdowninput>
      </InputSection2>
      <InputSection2>
        <Dropdowninput
          wid=""
          label="Payment Method"
          defaultValue="Select Payment Method"
          required
          value={payment}
          onChange={(e)=>setPayment(e.target.value)}
        >
          <option disabled>Select Payment Method</option>
          <option value="upi">upi</option>
          <option value="credit card">credit card</option>
          <option value="phonepe">phonepe</option>
          <option value="paytm">paytm</option>
        </Dropdowninput>
      </InputSection2>
      <InputSection2>
        <FormInput
          value={salesFullname}
          type="text"
          onChange={(e) => setSalesFullname(e.target.value)}
          name="salespersonfullname"
          label="Sales Person Name"
          wid=""
          placeholder="Enter Sales Person Name"
          required
        />
      </InputSection2>
      <InputSection2>
        <FormInput
          value={salesEmail}
          type="text"
          onChange={(e) => setSalesEmail(e.target.value)}
          name="salesEmail"
          label="Sales Person Email"
          wid=""
          placeholder="Enter Email"
          required
        />
      </InputSection2>
      <InputSection2>
        <FormInput
          value={Remark}
          type="text"
          onChange={(e) => setRemark(e.target.value)}
          name="Remarks"
          label="Remarks"
          wid=""
          placeholder="Enter Remarks"
          required
        />
      </InputSection2>
    </OuterDiv>
  );
};

export default PaymentDetails;
