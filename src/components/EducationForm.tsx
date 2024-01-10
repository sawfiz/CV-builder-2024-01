import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";

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

interface Props {
  education: EducationFormData;
  addEducation: (data: EducationFormData) => void;
}

const EducationForm = ({ education, addEducation }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EducationFormData>({ 
    defaultValues: education,
    resolver: zodResolver(educationSchema) });

  const onSubmit = (data: EducationFormData) => {
    console.log("clicked");
    console.log({ ...data });
    addEducation({ ...data, id: uuidv4() });
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

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default EducationForm;
