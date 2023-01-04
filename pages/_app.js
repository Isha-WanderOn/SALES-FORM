import Navbar from "../src/components/Navbar/Navbar";
import "../styles/globals.css";
import FormContext from "../src/context/FormContext";

export default function App({ Component, pageProps }) {
  return (
    <FormContext>
      <Navbar />
      <Component {...pageProps} />
    </FormContext>
  );
}
