import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContactForm from "./components/Contact";
import { ContactFormData } from "./components/Contact";
import Education from "./components/Education";
import { EducationFormData } from "./components/EducationForm";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

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

  const [educations, setEducations] = useState<EducationFormData[]>([]);

  const addEducation = (data: EducationFormData) => {
    const updatedEducations = [...educations, data];
    setEducations(updatedEducations);
    localStorage.setItem("educations", JSON.stringify(updatedEducations));
  };

  const updateEducation = (data: EducationFormData) => {
    const updatedEducations = educations.map((edu) =>
      edu.id === data.id ? data : edu
    );
    setEducations(updatedEducations);
    localStorage.setItem("educations", JSON.stringify(updatedEducations));
  };

  const deleteEducation = (id: string) => {
    const updatedEducations = educations.filter((edu) => edu.id !== id);
    setEducations(updatedEducations);
    localStorage.setItem("educations", JSON.stringify(updatedEducations));
  };

  useEffect(() => {
    const contactInfo = localStorage.getItem("contactInfo");
    if (contactInfo) {
      setContactInfo(JSON.parse(contactInfo));
    }
    const educations = localStorage.getItem("educations");
    if (educations) {
      setEducations(JSON.parse(educations));
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      <h1>CV Builder</h1>
      {!isLoading && <ContactForm contactInfo={contactInfo} />}
      <Education
        educations={educations}
        addEducation={addEducation}
        updateEducation={updateEducation}
        deleteEducation={deleteEducation}
      />
    </>
  );
}

export default App;
