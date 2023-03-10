import React, { useContext } from "react";
import { Form } from "../../context/FormContext";
import { InputSection2, Select } from "../DownloadClient/DownloadClient.style";
import Dropdowninput from "../DropdownInput/Dropdowninput";
import FormInput from "../FormInputs/FormInput";
import { BookingButton } from "../LeftSidebar/LeftSidebar.style";
import { ModalBox, ModalOuter } from "./Modals.style";
import { P } from "../RightSidebar/RightSidebar.style";

const Modals = () => {
  const {
    name,
    phone,
    gender,
    setShow,
    clientcode,
    otherClient,
    setOtherClient,
    setClientCode,
    setGender,
    setName,
    setPhone,
  } = useContext(Form);

  const client = {
    name: name,
    phone: phone,
    gender: gender,
  };

  const handleClick = () => {
    setOtherClient(otherClient.concat(client));
  };

  const handleShow = () => {
    setShow(false);
    setName("");
    setPhone("");
    setGender("");
  };
  return (
    <ModalOuter>
      <ModalBox>
        <P gr>Add Other Travellers</P>
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
        <InputSection2>
          <Select value={clientcode} onChange={(e) => setClientCode(e.target.value)}>
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
            label="Gender"
            // defaultValue="Select Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="female">Female</option>
          </Dropdowninput>
        </InputSection2>
        <InputSection2>
          <BookingButton onClick={handleShow}>Close</BookingButton>
          <BookingButton onClick={handleClick}>Done</BookingButton>
        </InputSection2>
      </ModalBox>
    </ModalOuter>
  );
};

export default Modals;
