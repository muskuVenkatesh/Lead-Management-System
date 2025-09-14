import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createLead } from "../services/api.js";

export default function LeadForm({ refreshLeads }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("All fields are required.");
      return;
    }

    try {
      await createLead(formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setError("");
      setSuccess("Lead created successfully!");

      refreshLeads();

      // Redirect after 1 second
      setTimeout(() => {
        navigate("/leads");
      }, 1000);
    } catch (err) {
      console.error(err);
      setError("Failed to submit lead.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Add New Lead</h2>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4" autoComplete="on">
        <input
          type="text"
          name="name"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />

        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full p-2 border rounded"
        />

        <textarea
          name="message"
          autoComplete="off"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full p-2 border rounded h-24"
        ></textarea>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Lead
        </button>
      </form>
    </div>
  );
}
