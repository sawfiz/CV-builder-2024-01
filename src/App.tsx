import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContactForm from "./components/Contact";
import { ContactFormData } from "./components/Contact";
import Education from "./components/Education";
import { EducationFormData } from "./components/EducationForm";
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

  const [educations, setEducations] = useState<EducationFormData[]>([])

  const addEducation = (data: EducationFormData) => {
    const updatedEducation = [...educations, data]
    setEducations(updatedEducation)
    localStorage.setItem('educations', JSON.stringify(updatedEducation))
  }

  useEffect(() => {
    const contactInfo = localStorage.getItem("contactInfo");
    if (contactInfo) {
      setContactInfo(JSON.parse(contactInfo));
    }
    const educations = localStorage.getItem("educations");
    if (educations) {
      setEducations(JSON.parse(educations));
    }
    setIsLoading(false)
  }, []);

  return (
    <>
      <h1>CV Builder</h1>
      {!isLoading && <ContactForm contactInfo={contactInfo} />}
      <Education educations={educations} addEducation={addEducation}/>
    </>
  );
}

export default App;
