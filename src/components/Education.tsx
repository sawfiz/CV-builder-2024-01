import React, { useState } from "react";
import EducationForm from "./EducationForm";

const Education = () => {
  const [showAddEducation, setShowAddEducation] = useState(false);
  return (
    <>
      <h3>Education</h3>
      <button
        className="btn btn-primary"
        onClick={() => setShowAddEducation(true)}
      >
        Add Education
      </button>
      {showAddEducation && <EducationForm />}
    </>
  );
};

export default Education;
