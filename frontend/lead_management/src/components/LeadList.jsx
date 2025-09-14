import React, { useEffect, useState } from "react";
import { getLeads } from "../services/api.js";

export default function LeadList() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchLeads = async () => {
    try {
      const res = await getLeads();
      setLeads(res.data.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load leads.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  if (loading) {
    return <p>Loading leads...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
  <div className="mt-8 px-4">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Lead List</h2>
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full bg-white divide-y divide-gray-200">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Message
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {leads.map((lead, index) => (
            <tr
              key={lead._id}
              className={index % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "hover:bg-gray-100"}
            >
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">{lead.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">{lead.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">{lead.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">{lead.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

}
