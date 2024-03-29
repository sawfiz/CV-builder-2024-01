import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import toast, { Toaster } from "react-hot-toast";

const areaCodeRegex = new RegExp(/^(\+)?\d{1,4}/);
const mobileRegex = new RegExp(/^\d{7,11}$/);

const contactSchema = z.object({
  firstname: z
    .string()
    .min(1, { message: "First name is required." })
    .max(40, { message: "Too long." }),
  lastname: z
    .string()
    .min(1, { message: "Last name is required." })
    .max(40, { message: "Too long." }),
  areaCode: z.string().regex(areaCodeRegex, "Invalid area code."),
  mobile: z.string().regex(mobileRegex, "Invalid Number."),
  email: z.string().email({ message: "Invalid email address." }),
  floor: z.string().max(3, { message: "Too long." }).optional(),
  unit: z.string().max(3, { message: "Too long." }).optional(),
  streetNumber: z
    .number({ invalid_type_error: "Required" })
    .max(99999)
    .optional(),
  street: z
    .string()
    .min(1, { message: "Required" })
    .max(40, { message: "Too long." }),
  city: z
    .string()
    .min(1, { message: "Required" })
    .max(40, { message: "Too long." }),
  postCode: z
    .string()
    .min(1, { message: "Required" })
    .max(40, { message: "Too long." }),
  country: z.string().min(1, { message: "Required" }),
  region: z.string().min(1, { message: "Required" }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = ({ contactInfo }: { contactInfo: ContactFormData }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
  } = useForm<ContactFormData>({
    defaultValues: contactInfo, 
    resolver: zodResolver(contactSchema),
  });


  const onSubmit = (data: ContactFormData) => {
    console.log({ ...data });
    localStorage.setItem("contactInfo", JSON.stringify(data));
    toast.success("Changes saved.")
  };
  return (
    <div>
      <h3>Contact Information</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <div className="row">
            <div className="col-md-6 mb-2">
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="First name"
                {...register("firstname")}
              />
              {errors.firstname && (
                <p className="text-danger">{errors.firstname.message}</p>
              )}
            </div>
            <div className="col-md-6 mb-2">
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Last name"
                {...register("lastname")}
              />
              {errors.lastname && (
                <p className="text-danger">{errors.lastname.message}</p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-3">
              <input
                type="number"
                className="form-control"
                id="areaCode"
                placeholder="Area code"
                {...register("areaCode")}
              />
              {errors.areaCode && (
                <p className="text-danger">{errors.areaCode.message}</p>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <input
                type="number"
                className="form-control"
                id="mobile"
                placeholder="Mobile"
                {...register("mobile")}
              />
              {errors.mobile && (
                <p className="text-danger">{errors.mobile.message}</p>
              )}
            </div>
            <div className="col-md-6 mb-2">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </div>
          </div>
        </div>

        <h5>Address</h5>
        <div className="row mb-2">
          <div className="form-group col-md-2">
            <label htmlFor="floor">Floor</label>
            <input
              type="text"
              className="form-control"
              id="floor"
              placeholder="6"
              {...register("floor")}
            />
            {errors.floor && (
              <p className="text-danger">{errors.floor.message}</p>
            )}
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="unit">Unit</label>
            <input
              type="text"
              className="form-control"
              id="unit"
              placeholder="12"
              {...register("unit")}
            />
            {errors.unit && (
              <p className="text-danger">{errors.unit.message}</p>
            )}
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="streetNumber">Number</label>
            <input
              type="number"
              className="form-control"
              id="streetNumber"
              placeholder="123"
              {...register("streetNumber", { valueAsNumber: true })}
            />
            {errors.streetNumber && (
              <p className="text-danger">{errors.streetNumber.message}</p>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              className="form-control"
              id="street"
              placeholder="Main St."
              {...register("street")}
            />
            {errors.street && (
              <p className="text-danger">{errors.street.message}</p>
            )}
          </div>
        </div>

        <div className="row mb-2">
          <div className="form-group col-md-6">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="Gotham city"
              {...register("city")}
            />
            {errors.city && (
              <p className="text-danger">{errors.city.message}</p>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="zip">Post Code</label>
            <input
              type="text"
              className="form-control"
              id="postCode"
              placeholder="12345"
              {...register("postCode")}
            />
            {errors.postCode && (
              <p className="text-danger">{errors.postCode.message}</p>
            )}
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-7">
            <Controller
              name="country"
              render={({ field: { name, onChange, value } }) => (
                <div>
                  <CountryDropdown
                    defaultOptionLabel="Select Country"
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="countryDropdownContainer"
                  />
                </div>
              )}
              control={control}
            />
            {errors.country && (
              <p className="text-danger">{errors.country.message}</p>
            )}
          </div>
          <div className="col-md-5">
            <Controller
              name="region"
              render={({ field: { name, onChange, value } }) => (
                <RegionDropdown
                  defaultOptionLabel="Select Region"
                  name={name}
                  country={watch("country")}
                  value={value}
                  onChange={onChange}
                  className="countryDropdownContainer"
                />
              )}
              control={control}
            />
            {errors.region && (
              <p className="text-danger">{errors.region.message}</p>
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

export default ContactForm;
