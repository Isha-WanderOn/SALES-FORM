import React, { useState, createContext } from "react";

const Form = createContext();

const FormContext = (props) => {
  const [count5k, setCount5k] = useState(0);
  const [count10k, setCount10k] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [voucher, setVoucher] = useState("");
  const [gender, setGender] = useState("");
  const [destination, setDestination] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [meal, setMeal] = useState("");
  const [refrenceno, setReferenceNo] = useState("");
  const [sellingAmt, setSellingAmt] = useState("");
  const [recievedAmt, setRecievedAmt] = useState("");
  const [leadSrc, setLeadSrc] = useState("");
  const [salesPhn, setSalesPhn] = useState("");
  const [payment, setPayment] = useState("");
  const [salesFullname, setSalesFullname] = useState("");
  const [salesEmail, setSalesEmail] = useState("");
  const [Remark, setRemark] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [show, setShow] = useState(false);

  return (
    <Form.Provider
      value={{
        count5k,
        count10k,
        name,
        email,
        address,
        phone,
        destination,
        gender,
        voucher,
        state,
        city,
        startdate,
        enddate,
        meal,
        refrenceno,
        sellingAmt,
        recievedAmt,
        leadSrc,
        salesPhn,
        payment,
        salesFullname,
        salesEmail,
        Remark,
        screenshot,
        show, 
        setShow,
        setCount5k,
        setCount10k,
        setScreenshot,
        setRemark,
        setSalesEmail,
        setSalesFullname,
        setPayment,
        setSalesPhn,
        setLeadSrc,
        setRecievedAmt,
        setSellingAmt,
        setReferenceNo,
        setMeal,
        setEndDate,
        setStartDate,
        setCity,
        setState,
        setVoucher,
        setPhone,
        setName,
        setAddress,
        setEmail,
        setDestination,
        setGender,
      }}
    >
      {props.children}
    </Form.Provider>
  );
};

export default FormContext;
export { Form };
