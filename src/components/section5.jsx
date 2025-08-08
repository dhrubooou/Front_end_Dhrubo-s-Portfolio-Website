// components/Sec5.jsx
import React, { useState } from "react";

function Sec5() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("Email sent!");
      } else {
        alert("Failed to send email.");
      }
    } catch (err) {
      alert("Error sending message.");
      console.error(err);
    }
  };

  return (
    <section className="contactSection" id="contactme">
      <h1>Get in <span>Touch</span></h1>
      <div className="contactContainer">
        <div className="contactInfo">
          <h2>Let's talk</h2>
          <p>I’m currently open for new opportunities. Feel free to contact me about your project, collaboration, or any queries.</p>
          <p><strong>Email:</strong> dhrubojyoti73@gmail.com</p>
          <p><strong>Phone:</strong> +91 79804 47474</p>
          <p><strong>Location:</strong> Kolkata, India</p>
        </div>

        <form className="contactForm" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Your email" required onChange={handleChange} />
          <textarea name="message" rows="5" placeholder="Write your message here" required onChange={handleChange}></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Sec5;
