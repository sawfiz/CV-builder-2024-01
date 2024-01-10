import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContactForm from "./components/Contact";
import { ContactFormData } from "./components/Contact";
import Education from "./components/Education";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const [contactInfo, setContactInfo] = useState<ContactFormData>({
    firstname: "",
    lastname: "",
    areaCode: "",
    mobile: "",
    email: "",
    floor: "",
    unit: "",
    streetNumber: 0,
    street: "",
    city: "",
    region: "",
    country: "",
    postCode: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("contactInfo");
    if (data) {
      setContactInfo(JSON.parse(data));
    }
    setIsLoading(false)
  }, []);

  return (
    <>
      <h1>CV Builder</h1>
      {!isLoading && <ContactForm contactInfo={contactInfo} />}
      <Education />
    </>
  );
}

export default App;
