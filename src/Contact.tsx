const Contact = () => {
  return (
    <div>
      <h3>Contact Information</h3>

      <form>
        <div className="row mb-2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Last name"
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              id="mobile"
              placeholder="Mobile"
            />
          </div>
          <div className="col-md-6">
            <input
              type="password"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
        </div>

        <h5>Address</h5>
        <div className="row mb-2">
          <div className="form-group col-md-2">
            <label htmlFor="floor">Floor</label>
            <input
              type="number"
              className="form-control"
              id="floor"
              placeholder="6"
            />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="unit">Unit</label>
            <input
              type="number"
              className="form-control"
              id="unit"
              placeholder="12"
            />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="streetNumber">Number</label>
            <input
              type="number"
              className="form-control"
              id="streetNumber"
              placeholder="123"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              className="form-control"
              id="street"
              placeholder="Main St."
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="form-group col-md-4">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="Gotham city"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="state">Province / State</label>
            <input
              type="text"
              className="form-control"
              id="state"
              placeholder="New Jersey"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="zip">Post Code</label>
            <input
              type="text"
              className="form-control"
              id="zip"
              placeholder="12345"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default Contact;
