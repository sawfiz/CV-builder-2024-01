import { useState } from "react";
import EducationForm, {
  EducationFormData,
  PartialEducationFormData,
} from "./EducationForm";

const dafaultEducation: PartialEducationFormData = {
  achievement: "",
  institution: "",
  major: "",
  startDate: undefined,
  endDate: undefined,
};

interface Props {
  educations: EducationFormData[];
  addEducation: (data: EducationFormData) => void;
  updateEducation: (data: EducationFormData) => void;
  deleteEducation: (id: string) => void;
}

const Education = ({ educations, addEducation, updateEducation, deleteEducation }: Props) => {
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
          deleteEducation={deleteEducation}
          setShowAddEducation={setShowAddEducation}
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
          deleteEducation={deleteEducation}
          setShowAddEducation={setShowAddEducation}
        />
      )}
    </>
  );
};

export default Education;
