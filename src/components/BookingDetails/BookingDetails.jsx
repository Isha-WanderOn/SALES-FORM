import React, { useContext, useState } from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import {
  InputSection,
  InputSection2,
} from "../ClientDetails/ClientDetails.style";
import Dropdowninput from "../DropdownInput/Dropdowninput";
import FormInput from "../FormInputs/FormInput";
import Heading from "../Headings/Heading";
import { OuterDiv } from "../Voucher/Voucher.style";
import { states, cities } from "./states_city";
import { v4 } from "uuid";
import { Form } from "../../context/FormContext";

const BookingDetails = () => {
  const {state, city, meal, startdate, enddate, setState, setCity, setStartDate, setEndDate, setMeal} = useContext(Form);
  return (
    <OuterDiv>
      <Heading Heading="Booking Details" />
      <InputSection />
      <InputSection2>
        <Dropdowninput
          wid="half"
          label="State"
          value={state}
          onChange={(e)=>setState(e.target.value)}
          defaultValue="Select State"
          required
        >
          <option disabled>Select State</option>
          {states.map((s) => {
            return (
              <option key={v4()} value={s}>
                {s}
              </option>
            );
          })}
        </Dropdowninput>
        <Dropdowninput
          wid="half"
          label="City"
          value={city}
          onChange={(e)=>setCity(e.target.value)}
          defaultValue="Select City"
          required
        >
          <option disabled>Select City</option>
          {cities.map((s) => {
            return (
              <option key={v4()} value={s}>
                {s}
              </option>
            );
          })}
        </Dropdowninput>
      </InputSection2>
      <InputSection2>
        <FormInput
          value={startdate}
          type="date"
          onChange={(e) => setStartDate(e.target.value)}
          name="startdate"
          label="Start date"
          wid="half"
          placeholder="Select Start Date"
          required
        />
        <FormInput
          value={enddate}
          type="date"
          onChange={(e) => setEndDate(e.target.value)}
          name="enddate"
          label="End Date"
          wid="half"
          placeholder="Select End Date"
          required
        />
      </InputSection2>
      <InputSection2>
        <label style={{ fontSize: "1.8rem" }}>Meal</label>
        <Checkbox
          label="Breakfast"
          //   value={checkedOne}
          //   onChange={handleChangeOne}
        />
        <Checkbox
          label="Lunch"
          //   value={checkedOne}
          //   onChange={handleChangeOne}
        />
        <Checkbox
          label="Dinner"
          //   value={checkedOne}
          //   onChange={handleChangeOne}
        />
      </InputSection2>
    </OuterDiv>
  );
};

export default BookingDetails;
