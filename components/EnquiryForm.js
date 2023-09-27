import { useFormspark } from "@formspark/use-formspark";
import { useState, useEffect, useCallback } from "react";
import { BsArrowRight } from "react-icons/bs";

const FORMSPARK_FORM_ID = "7eIXKpP6";

export default function EnquiryForm() {
  const [formStatus, setFormStatus] = useState("");
  const [submit, submitting] = useFormspark({ formId: FORMSPARK_FORM_ID });
  const [formData, setFormData] = useState({
    parent_name: "",
    parent_email: "",
    student_name: "",
    curriculum: "",
    service_required: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submit({ ...formData });
    setFormStatus("sent")
  };

  const handleChange = useCallback(
    (type) => (event) => {
      setFormData({ ...formData, [type]: event.target.value });
    },
    [formData]
  );

  return (
    <form id="enquiryForm" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="parent-name">Name of Parent/Guardian</label>
        <input
          type="text"
          id="parent-name"
          name="parent-name"
          onChange={handleChange("parent_name")}
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="parent-email">Parent/Guardian Email Address</label>
        <input
          type="email"
          id="parent-email"
          name="parent-email"
          onChange={handleChange("parent_email")}
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="student-name">Name of Student</label>
        <input
          type="text"
          id="student-name"
          name="student-name"
          onChange={handleChange("student_name")}
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="current-curriculum">Current Curriculum</label>
        <input
          type="text"
          id="current-curriculum"
          name="current-curriculum"
          placeholder="e.g. IB MYP, GCSE, IB Diploma, A-Level, etc."
          onChange={handleChange("curriculum")}
          required
        />
      </div>

      <div className="input-group">
        <label>Service Required</label>
        <div className="radio-container">
          <div className="radio-group">
            <input
              className="radio-input"
              type="radio"
              id="mid-year"
              name="service-required"
              onChange={handleChange("service_required")}
              value="Mid-Year"
              required
            />
            <label className="radio-label" tabIndex="0" htmlFor="mid-year">
              Mid-Year
            </label>
          </div>
          <div className="radio-group">
            <input
              className="radio-input"
              type="radio"
              id="6th-form"
              name="service-required"
              onChange={handleChange("service_required")}
              value="6th Form"
            />
            <label className="radio-label" tabIndex="0" htmlFor="6th-form">
              6th Form
            </label>
          </div>
          <div className="radio-group">
            <input
              className="radio-input"
              type="radio"
              id="undergraduate"
              name="service-required"
              onChange={handleChange("service_required")}
              value="Undergraduate"
            />
            <label className="radio-label" tabIndex="0" htmlFor="undergraduate">
              Undergraduate
            </label>
          </div>
          <div className="radio-group">
            <input
              className="radio-input"
              type="radio"
              id="graduate"
              name="service-required"
              onChange={handleChange("service_required")}
              value="Graduate"
            />
            <label className="radio-label" tabIndex="0" htmlFor="graduate">
              Graduate
            </label>
          </div>
          <div className="radio-group">
            <input
              className="radio-input"
              type="radio"
              id="university-advice"
              name="service-required"
              onChange={handleChange("service_required")}
              value="University Advice"
            />
            <label
              className="radio-label"
              tabIndex="0"
              htmlFor="university-advice"
            >
              University Advice
            </label>
          </div>
          <div className="radio-group">
            <input
              className="radio-input"
              type="radio"
              id="careers-advice"
              name="service-required"
              onChange={handleChange("service_required")}
              value="Careers Advice"
            />
            <label
              className="radio-label"
              tabIndex="0"
              htmlFor="careers-advice"
            >
              Careers Advice
            </label>
          </div>
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" onChange={handleChange("message")} />
      </div>

      <div className="text-right span-2">
        {formStatus === "sent" ? (
          <p>Enquiry received, we'll be in touch soon!</p>
        ) : (
          <button disabled={submitting}>
            Send Enquiry <BsArrowRight />
          </button>
        )}
      </div>
    </form>
  );
}
