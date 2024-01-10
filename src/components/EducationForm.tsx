import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
import { format } from "date-fns";

const educationSchema = z.object({
  achievement: z
    .string()
    .min(1, { message: "Required" })
    .max(50, { message: "Too long." }),
  institution: z
    .string()
    .min(1, { message: "Required" })
    .max(60, { message: "Too long." }),
  major: z
    .string()
    .min(1, { message: "Required" })
    .max(40, { message: "Too long." }),
  startDate: z.date(),
  endDate: z.date(),
});

export type EducationFormData = z.infer<typeof educationSchema> & {
  id: string;
};

// Adjust EducationFormData to allow undefined for startDate and endDate
export type PartialEducationFormData = Partial<EducationFormData> & {
  startDate: Date | undefined;
  endDate: Date | undefined;
};

interface Props {
  isNew: boolean;
  education: EducationFormData | PartialEducationFormData;
  saveEducation: (data: EducationFormData) => void;
}

const EducationForm = ({ isNew, education, saveEducation }: Props) => {
  // HTML date input expects YYYY-MM-DD for default values
  const defaultEducation = {
    ...education,
    startDate: education.startDate
    ? format(new Date(education.startDate), "yyyy-MM-dd")
    : undefined,
    endDate: education.endDate
    ? format(new Date(education.endDate), "yyyy-MM-dd")
    : undefined,
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: defaultEducation,
    resolver: zodResolver(educationSchema),
  });

  const onSubmit = (data: EducationFormData) => {
    if (isNew) {
      saveEducation({ ...data, id: uuidv4() });
    } else {
      saveEducation({ ...data, id: education.id! });
    }
    toast.success("Education saved.");
  };
  return (
    <div>
      <h4>New Education</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label className="form-label">Achievement / Degree Received</label>
          <input
            type="text"
            className="form-control"
            {...register("achievement")}
          />
          {errors.achievement && (
            <p className="text-danger">{errors.achievement.message}</p>
          )}
        </div>

        <div className="row mb-2">
          <div className="form-group col-md-6">
            <label htmlFor="institution" className="form-label">
              Institution
            </label>
            <input
              type="text"
              className="form-control"
              {...register("institution")}
            />
            {errors.institution && (
              <p className="text-danger">{errors.institution.message}</p>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="major" className="form-label">
              Major
            </label>
            <input
              type="text"
              className="form-control"
              {...register("major")}
            />
            {errors.major && (
              <p className="text-danger">{errors.major.message}</p>
            )}
          </div>
        </div>

        <div className="row mb-2">
          <div className="form-group col-md-6">
            <label htmlFor="startDate" className="form-label">
              From
            </label>
            <input
              type="date"
              className="form-control"
              {...register("startDate", { valueAsDate: true })}
            />
            {errors.startDate && (
              <p className="text-danger">{errors.startDate.message}</p>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="endDate" className="form-label">
              To
            </label>
            <input
              type="date"
              className="form-control"
              {...register("endDate", { valueAsDate: true })}
            />
            {errors.endDate && (
              <p className="text-danger">{errors.endDate.message}</p>
            )}
          </div>
        </div>

        <button disabled={!isDirty} type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default EducationForm;
