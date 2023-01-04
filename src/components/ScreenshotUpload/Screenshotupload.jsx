/* eslint-disable react/no-unescaped-entities */
import React, { useContext} from "react";
import { FileUploader } from "react-drag-drop-files";
import { Box, UploadArea } from "./ScreenshotUpload.style";
import Image from "next/image";
import pic from "../../assets/images/upload.svg";
import {
  InputSection,
  InputSection2,
} from "../ClientDetails/ClientDetails.style";
import { Form } from "../../context/FormContext";

const fileTypes = ["JPG", "PNG"];

const Screenshotupload = () => {
  const { screenshot, setScreenshot } = useContext(Form);
  const handleChange = (file) => {
    setScreenshot(file);
  };
  return (
    <div>
      <InputSection2>
        <h1 style={{ fontSize: "1.8rem", paddingBottom: "4px" }}>
          Upload Screenshots
        </h1>
      </InputSection2>
      <InputSection2>
        <p style={{ fontSize: "1.2rem", color: "#8F8F8F" }}>
          Upload a screenshot of the client's payment
        </p>
      </InputSection2>
      <InputSection>
        <FileUploader
          handleChange={handleChange}
          name="Screenshot"
          types={fileTypes}
        >
          <UploadArea>
            <Box>
              <Image src={pic} alt="upload" fill />
            </Box>
          </UploadArea>
          <p>{screenshot ? `File name: ${screenshot.name}` : ""}</p>
        </FileUploader>
      </InputSection>
    </div>
  );
};

export default Screenshotupload;
