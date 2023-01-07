import React, { useContext, useState } from "react";
import { Form } from "../../context/FormContext";
import Dropdowninput from "../DropdownInput/Dropdowninput";
import FormInput from "../FormInputs/FormInput";
import Heading from "../Headings/Heading";
import { OuterDiv } from "../Voucher/Voucher.style";
import { InputSection, InputSection2, Select } from "./ClientDetails.style";

const ClientDetails = () => {
  const {
    name,
    email,
    address,
    phone,
    gender,
    clientcode,
    setClientCode,
    setDestination,
    setGender,
    setAddress,
    setEmail, 
    setName,
    setPhone,
  } = useContext(Form);

  return (
    <OuterDiv>
      <Heading Heading="Client Details" />
      <InputSection>
        <FormInput
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="clientName"
          label="Name"
          wid=""
          placeholder="Enter Full Name"
          required
        />
        <FormInput
          value={email}
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
          required
        />
      </InputSection>
      <InputSection2>
        <Select value={clientcode} onChange={(e)=>setClientCode(e.target.value)}>
          <option value="+91">+91</option>
          <option value="+11">+11</option>
          <option value="+23">+23</option>
        </Select>
        <FormInput
          value={phone}
          type="String"
          onChange={(e)=> setPhone(e.target.value)}
          name="ClientPhone"
          label="Phone Number"
          wid="half"
          placeholder="Enter Phone No."
          required
        />
        <Dropdowninput
          wid="half"
          label=" Prefered Destination"
          defaultValue="Select Destination"
          required
          onChange={(e)=>setDestination(e.target.value)}
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
      <InputSection2>
        <Dropdowninput
          wid="half"
          label="Gender"
          defaultValue="Select Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option disabled>Select Gender</option>
          <option value="Male">Male</option>
          <option value="female">Female</option>
        </Dropdowninput>
      </InputSection2>
    </OuterDiv>
  );
};

export default ClientDetails;
