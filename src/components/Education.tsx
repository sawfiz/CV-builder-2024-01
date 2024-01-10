import React, { useState } from "react";
import EducationForm, { EducationFormData } from "./EducationForm";

const dafaultEducation: EducationFormData = {
  achievement: "",
  institution: "",
  major: "",
  startDate: "",
  endDate: "",
};

interface Props {
  educations: EducationFormData[];
  addEducation: (data: EducationFormData) => void;
  updateEducation: (data: EducationFormData) => void;
}

const Education = ({ educations, addEducation, updateEducation }: Props) => {
  const [showAddEducation, setShowAddEducation] = useState(false);
  return (
    <>
      <h3>Educations</h3>
      {educations.map((edu) => (
        <EducationForm
          key={edu.id}
          isNew={false}
          education={edu}
          saveEducation={updateEducation}
        />
      ))}

      <button
        className="btn btn-primary"
        onClick={() => setShowAddEducation(true)}
      >
        Add Education
      </button>
      {showAddEducation && (
        <EducationForm
          isNew={true}
          education={dafaultEducation}
          saveEducation={addEducation}
        />
      )}
    </>
  );
};

export default Education;
