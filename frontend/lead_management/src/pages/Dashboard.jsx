import React, { useEffect, useState } from "react";
import LeadForm from "../components/LeadForm";
import LeadList from "../components/LeadList";
import { getLeads } from "../services/api";

export default function Dashboard() {
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
    <div className="p-6">
      <LeadForm refreshLeads={fetchLeads} />
      <LeadList leads={leads} />
    </div>
  );
}
