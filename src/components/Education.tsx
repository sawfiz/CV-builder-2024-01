import React, { useState } from "react";
import EducationForm, { EducationFormData } from "./EducationForm";

const dafaultEducation : EducationFormData = {
  achievement: '',
  institution: '',
  major: '',
  startDate: '',
  endDate: ''
}

interface Props {
  educations: EducationFormData[];
  addEducation: (data: EducationFormData) => void;
}

const Education = ({ educations, addEducation }: Props) => {
  const [showAddEducation, setShowAddEducation] = useState(false);
  return (
    <>
      <h3>Educations</h3>
      {educations.map(edu => <EducationForm key={edu.id} education={edu} addEducation={addEducation} />)}

      <button
        className="btn btn-primary"
        onClick={() => setShowAddEducation(true)}
      >
        Add Education
      </button>
      {showAddEducation && <EducationForm  education={dafaultEducation} addEducation={addEducation} />}
    </>
  );
};

export default Education;
