import React from "react";

const EducationForm = () => {
  return (
    <div>
      <h4>New Education</h4>
      <form>
        <div className="mb-2">
          <select name="" id="" className="form-select">
            <option value="">Select achivement</option>
            <option value="certificate">Certificate</option>
            <option value="diploma">Diploma</option>
            <option value="bachlor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="doctor">Doctoral Degree</option>
          </select>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="institution" className="form-label">Institution</label>
            <input name="institution" type="text" className="form-control" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="major" className="form-label">Major</label>
            <input name="major" type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="startDate" className="form-label">From</label>
            <input name="startDate" type="date" className="form-control" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="endDate" className="form-label">To</label>
            <input name="endDate" type="date" className="form-control" />
          </div>
        </div>
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default EducationForm;
