import React, { useContext, useState } from "react";
import { Form } from "../../context/FormContext";
import Dropdowninput from "../DropdownInput/Dropdowninput";
import FormInput from "../FormInputs/FormInput";
import Heading from "../Headings/Heading";
import { OuterDiv } from "../Voucher/Voucher.style";
import { InputSection, InputSection2, Select } from "./ClientDetails.style";
import {Button, Modal } from "react-bootstrap";
import Modals from "../Modal/Modals";

const ClientDetails = () => {
  const {
    name,
    email,
    address,
    phone,
    voucher,
    gender,
    show,
    setShow,
    setGender,
    setVoucher,
    setAddress,
    setEmail,
    setName,
    setPhone,
  } = useContext(Form);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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
        <Select>
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
          placeholder="9909483710"
          required
        />
        <Dropdowninput
          wid="half"
          value={voucher}
          onChange={(e) => setVoucher(e.target.value)}
          label="Voucher"
          defaultValue="Select Voucher"
          required
        >
          <option disabled>Select Voucher</option>
          <option value="Early bird - 5k">Early bird - 5k</option>
          <option value="Early bird - 10k">Early bird - 10k</option>
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
        <Dropdowninput
          wid="half"
          label=" Prefered Destination"
          defaultValue="Select Destination"
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
        <h1
        onClick={handleShow}
        style={{ fontSize: "1.6rem", lineHeight: "19.36px" }}
      >
        + Add Client
      </h1>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <h1 style={{ color: "green" }}>Insert Form</h1>
      </Modal.Header>
      <Modal.Body>{/* <AddForm /> */}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </OuterDiv>
  );
};

export default ClientDetails;
