// AdminDashboard.jsx
import React, { useEffect, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
const AdminDashboard = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Updated: Filter by name or USN
  const filteredParticipants = participants.filter((participant) =>
    participant.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participant.usn?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ Updated: Fetch quiz participants
  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        setLoading(true);
        console.log(BACKEND_URL);
        const res = await fetch(`${BACKEND_URL}/api/quiz`);
        const data = await res.json();

        if (!data.success) {
          setError(data.message || "Failed to fetch participants");
          return;
        }
        setParticipants(data.data || []);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch participants");
      } finally {
        setLoading(false);
      }
    };

    fetchParticipants();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-neutral-950 text-white">
      {/* Top bar */}
      <header className="border-b border-neutral-800 bg-black/60 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-100">
            Quiz Registrations
          </h1>
          <span className="text-sm md:text-base text-neutral-400">
            Admin Panel
          </span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Top strip: stats + search */}
        <section className="mb-6 flex flex-col md:flex-row gap-4 md:items-center">
          <div className="flex-1 min-w-[180px] rounded-xl border border-neutral-800 bg-neutral-950/70 px-4 py-3">
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              Total Participants
            </p>
            <p className="mt-1 text-2xl font-semibold text-neutral-50">
              {loading ? "…" : participants.length}
            </p>
          </div>

          {/* Search box */}
          <div className="w-full md:w-80">
            <label className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 mb-2">
              Search by name or USN
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-500">
                🔍
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Type name or USN…"
                className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-neutral-950/80 border border-neutral-700 text-sm text-neutral-100 placeholder-neutral-500
                           focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-400
                           transition-colors"
              />
            </div>
          </div>
        </section>

        {error && (
          <div className="mb-4 rounded-lg border border-red-500/40 bg-red-900/20 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}

        {loading ? (
          <div className="mt-12 flex justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-neutral-600 border-t-white" />
          </div>
        ) : participants.length === 0 ? (
          <p className="mt-12 text-center text-neutral-400">
            No participants registered yet.
          </p>
        ) : (
          <section className="rounded-2xl border border-neutral-800 bg-black/60 shadow-xl shadow-black/40 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-neutral-950/90">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-300 border-b border-neutral-800">
                      Participant
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-300 border-b border-neutral-800">
                      Contact
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-300 border-b border-neutral-800">
                      Academic
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-300 border-b border-neutral-800">
                      Previous Attendance
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-300 border-b border-neutral-800">
                      Registered
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900">
                  {filteredParticipants.map((participant) => (
                    <tr
                      key={participant._id}
                      className="hover:bg-neutral-900/60 transition-colors"
                    >
                      {/* Participant */}
                      <td className="px-4 py-3 align-top">
                        <div className="flex flex-col">
                          <span className="font-semibold text-neutral-50">
                            {participant.name}
                          </span>
                          <span className="text-xs text-neutral-500">
                            {participant.usn}
                          </span>
                        </div>
                      </td>

                      {/* Contact */}
                      <td className="px-4 py-3 align-top">
                        <div className="flex flex-col gap-0.5">
                          <span className="font-medium text-neutral-100">
                            {participant.email}
                          </span>
                          <span className="text-xs text-neutral-400">
                            {participant.contactNumber}
                          </span>
                        </div>
                      </td>

                      {/* Academic */}
                      <td className="px-4 py-3 align-top">
                        <div className="flex flex-col gap-1 text-xs text-neutral-300">
                          <span>Y{participant.year} · {participant.branch}</span>
                        </div>
                      </td>

                      {/* Previous Attendance */}
                      <td className="px-4 py-3 align-top">
                        <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                          participant.attendedBefore
                            ? 'border border-emerald-600/50 bg-emerald-900/30 text-emerald-200'
                            : 'border border-orange-600/50 bg-orange-900/30 text-orange-200'
                        }`}>
                          {participant.attendedBefore ? 'Yes' : 'No'}
                        </span>
                      </td>

                      {/* Registered */}
                      <td className="px-4 py-3 align-top">
                        <div className="flex flex-col text-xs text-neutral-400">
                          <span>
                            {participant.createdAt
                              ? new Date(participant.createdAt).toLocaleDateString()
                              : "-"}
                          </span>
                          <span className="text-neutral-500">
                            {participant.createdAt
                              ? new Date(participant.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                              : ""}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
