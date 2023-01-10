import React, { useContext, useState } from "react";
import { Row } from "../../../pages/BookingSummary/BookingSummary.style";
import { Form } from "../../context/FormContext";
import Dropdowninput from "../DropdownInput/Dropdowninput";
import FormInput from "../FormInputs/FormInput";
import { MainHeading1 } from "../LeftSidebar/LeftSidebar.style";
import { OuterDiv } from "../Voucher/Voucher.style";
import { InputSection, InputSection2, Select } from "./DownloadClient.style";

const DownloadClient = () => {
  const {
    name,
    email,
    address,
    phone,
    clientcode,
    destination,
    gender,
    setGender,
    setDestination,
    setAddress,
    setEmail,
    setName,
    setPhone,
  } = useContext(Form);
  
  
  return (
    <OuterDiv>
      {/* <Heading Heading="Client Details" /> */}
      <Row>
        <MainHeading1>Client Information</MainHeading1>
      </Row>
      <InputSection>
        <FormInput
          defaultValue={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="clientName"
          label="Name"
          wid=""
          placeholder="Enter Full Name"
          required
        />
        <FormInput
          defaultValue={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          name="clientEmail"
          label="Email Id"
          wid=""
          placeholder="Enter Email"
          required
        />
        <FormInput
          value={address}
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          name="clientAddress"
          label="Address"
          wid=""
          placeholder="Enter Full Address"
        />
      </InputSection>
      <InputSection2>
        <Select defaultValue={clientcode}>
          <option value="+91">+91</option>
          <option value="+11">+11</option>
          <option value="+23">+23</option>
        </Select>
        <FormInput
          value={phone}
          type="String"
          onChange={(e) => setPhone(e.target.value)}
          name="ClientPhone"
          label="Phone Number"
          wid="half"
          placeholder="Enter Phone Number"
          required
        />
        <Dropdowninput
          wid="half"
          label=" Prefered Destination"
          defaultValue={destination}
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        >
          <option disabled>Select Destination</option>
          <option value="Manali">Manali</option>
          <option value="Shimla">Shimla</option>
          <option value="Tungnath">Tungnath</option>
          <option value="Dubai">Dubai</option>
          <option value="Bali">Bali</option>
          <option value="Las vages">Las vages</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Goa">Goa</option>
        </Dropdowninput>
      </InputSection2>
      <div style={{ marginLeft: "2rem" }}>
        <Dropdowninput
          wid="half"
          label="Gender"
          defaultValue={gender}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option disabled>Select Gender</option>
          <option value="Male">Male</option>
          <option value="female">Female</option>
        </Dropdowninput>
        {/* <BookingButton onClick={handleClick}>Add</BookingButton> */}
      </div>
    </OuterDiv>
  );
};

export default DownloadClient;
