import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./ContactFormModal.css";
import UsageDropdown from "../dropdown/UsageDropdown";

const ContactFormModal = ({ close }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    usage: "business"
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (phone) => {
    setForm((prev) => ({ ...prev, phone }));
  };

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("https://dry-mouse-3aa0.surajshukla800.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        showToast("Thanks! We'll contact you soon.");
        setForm({ firstName: "", lastName: "", phone: "", email: "", usage: "business" });
        setTimeout(() => close(), 1500);
      } else {
        showToast("Submission failed. Try again.", "error");
      }
    } catch (err) {
      showToast("Network error. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <div className="contact-overlay" onClick={(e) => e.target === e.currentTarget && close()}>
        
              {toast && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}
        
        <div className="contact-modal">
          <button type="button" className="contact-close" onClick={close}>✕</button>
          
          <h2>Get Started</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <input
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <PhoneInput
              country="in"
              value={form.phone}
              onChange={handlePhoneChange}
              inputClass="phone-input"
              containerClass="phone-container"
              buttonClass="phone-button"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <UsageDropdown
              value={form.usage}
              onChange={(value) => setForm(prev => ({ ...prev, usage: value }))}
            />

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactFormModal;