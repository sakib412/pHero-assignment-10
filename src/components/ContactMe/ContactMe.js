import React from "react";

const ContactMe = () => {
  return (
    <div>
      <h1 className="p-4 text-center">
        <span className="text-primary"> Contact </span>Me
      </h1>
      <div className="w-50 mx-auto text-start">
        <form>
          <div className="form-outline mb-4">
            <input
              type="text"
              name="namel"
              className="form-control"
              placeholder="Enter your Name"
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your Email"
            />
          </div>

          <div className="form-outline mb-4">
            <textarea
              rows={6}
              name="description"
              className="form-control"
              placeholder="Enter your Description"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Sent Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
