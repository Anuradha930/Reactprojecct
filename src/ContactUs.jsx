// src/ContactUs.jsx
import React, { useState } from "react";
import "./Contactus.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validate input fields in real time
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors(validate());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2 className="contact-title">📩 Contact Royal Food</h2>
        <p className="contact-desc">
          Have questions, feedback, or want to place an order? Reach out to us anytime!
        </p>

        {/* Submission Success */}
        {submitted && (
          <div className="alert-success animate">
            ✅ Thank you! Your message has been sent successfully.
          </div>
        )}

        <div className="contact-form-wrapper">
          {/* Left: Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className={`form-group ${errors.name ? "error" : ""}`}>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label htmlFor="name">Full Name</label>
              {errors.name && <small>{errors.name}</small>}
            </div>

            <div className={`form-group ${errors.email ? "error" : ""}`}>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label htmlFor="email">Email Address</label>
              {errors.email && <small>{errors.email}</small>}
            </div>

            <div className={`form-group ${errors.message ? "error" : ""}`}>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label htmlFor="message">Your Message</label>
              {errors.message && <small>{errors.message}</small>}
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

          {/* Right: Real-time Team Info */}
          <div className="contact-team">
            <h3>Our Support Team</h3>
            <p>We are here 24/7 to assist you. Contact any of our team members directly:</p>
            <div className="team-members">
              <div className="team-card">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Anu Radha" />
                <div>
                  <h4>Anu Radha</h4>
                  <p>CEO & Founder</p>
                  <a href="mailto:anu@royalfood.com">anu@royalfood.com</a>
                </div>
              </div>
              <div className="team-card">
                <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="Rajesh Kumar" />
                <div>
                  <h4>Rajesh Kumar</h4>
                  <p>Head Chef</p>
                  <a href="mailto:chef@royalfood.com">chef@royalfood.com</a>
                </div>
              </div>
              <div className="team-card">
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Sneha Patel" />
                <div>
                  <h4>Sneha Patel</h4>
                  <p>Marketing Lead</p>
                  <a href="mailto:sneha@royalfood.com">sneha@royalfood.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
