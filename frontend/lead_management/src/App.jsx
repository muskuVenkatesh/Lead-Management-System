import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";
import { useState, useEffect } from "react";
import { getLeads } from "./services/api";

export default function App() {
  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {
    try {
      const res = await getLeads();
      setLeads(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />

        <main className="flex-1 p-6 ml-64">
          <Routes>
            <Route path="/" element={<LeadForm refreshLeads={fetchLeads} />} />
            <Route path="/leads" element={<LeadList leads={leads} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
