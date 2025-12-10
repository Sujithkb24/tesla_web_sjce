// AdminDashboard.jsx
import React, { useEffect, useState } from "react";


const BACKEND_URL = import.meta.env.VERCEL_BACKEND_URL;
const AdminDashboard = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

// derived filtered array
const filteredTeams = teams.filter((team) =>
  team.teamName?.toLowerCase().includes(searchTerm.toLowerCase())
);


  // Fetch all teams on mount
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://tesla-web-sjce-hljz.vercel.app/api/teams");
        const data = await res.json();

        if (!data.success) {
          setError(data.message || "Failed to fetch teams");
          return;
        }
        setTeams(data.data || []);
      } catch (err) {
       console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-neutral-950 text-white">
      {/* Top bar */}
      <header className="border-b border-neutral-800 bg-black/60 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-100">
            Team Registrations
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
        Total Teams
      </p>
      <p className="mt-1 text-2xl font-semibold text-neutral-50">
        {loading ? "…" : teams.length}
      </p>
    </div>

    {/* Search box */}
    <div className="w-full md:w-80">
      <label className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 mb-2">
        Search by team name
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-500">
          🔍
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type team name…"
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
        ) : teams.length === 0 ? (
          <p className="mt-12 text-center text-neutral-400">
            No teams registered yet.
          </p>
        ) : (
          <section className="rounded-2xl border border-neutral-800 bg-black/60 shadow-xl shadow-black/40 overflow-hidden">
            <div className="overflow-x-auto">
                 
              <table className="min-w-full text-sm">
                
                <thead className="bg-neutral-950/90">
                
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-300 border-b border-neutral-800">
                      Team
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-300 border-b border-neutral-800">
                      Leader
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-300 border-b border-neutral-800">
                      Members
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-300 border-b border-neutral-800">
                      Domain
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-300 border-b border-neutral-800">
                      PPT Link
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-300 border-b border-neutral-800">
                      Submitted
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900">
                 {filteredTeams.map((team) => (
                    <tr
                      key={team._id}
                      className="hover:bg-neutral-900/60 transition-colors"
                    >
                      {/* Team */}
                      <td className="px-4 py-3 align-top">
                        <div className="flex flex-col">
                          <span className="font-semibold text-neutral-50">
                            {team.teamName}
                          </span>
                          <span className="text-xs text-neutral-500">
                            #{team._id.slice(-6)}
                          </span>
                        </div>
                      </td>

                      {/* Leader */}
                      <td className="px-4 py-3 align-top">
                        <div className="flex flex-col gap-0.5">
                          <span className="font-medium text-neutral-100">
                            {team.leaderName}
                          </span>
                          <span className="text-xs text-neutral-400">
                            {team.leaderEmail}
                          </span>
                          <span className="text-xs text-neutral-500">
                            {team.leaderPhone} · Y{team.leaderYear} ·{" "}
                            {team.leaderBranch}
                          </span>
                        </div>
                      </td>

                      {/* Members */}
                      <td className="px-4 py-3 align-top">
                        <div className="space-y-1 text-xs text-neutral-300">
                          {team.member1 && (
                            <div>
                              <span className="font-medium">
                                {team.member1.name}
                              </span>{" "}
                              · Y{team.member1.year} · {team.member1.branch}
                            </div>
                          )}
                          {team.member2 && (
                            <div>
                              <span className="font-medium">
                                {team.member2.name}
                              </span>{" "}
                              · Y{team.member2.year} · {team.member2.branch}
                            </div>
                          )}
                          {team.member3 && (
                            <div className="text-neutral-400">
                              <span className="font-medium">
                                {team.member3.name}
                              </span>{" "}
                              · Y{team.member3.year} · {team.member3.branch}
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Domain */}
                      <td className="px-4 py-3 align-top">
                        <span className="inline-flex rounded-full border border-neutral-700 bg-neutral-900/70 px-2.5 py-1 text-xs font-medium text-neutral-200">
                          {team.domain}
                        </span>
                      </td>

                      {/* PPT link */}
                      <td className="px-4 py-3 align-top">
                        <a
                          href={team.pptLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2"
                        >
                          Open PPT
                        </a>
                      </td>

                      {/* SubmittedAt */}
                      <td className="px-4 py-3 align-top">
                        <div className="flex flex-col text-xs text-neutral-400">
                          <span>
                            {team.createdAt
                              ? new Date(team.createdAt).toLocaleDateString()
                              : "-"}
                          </span>
                          <span className="text-neutral-500">
                            {team.createdAt
                              ? new Date(team.createdAt).toLocaleTimeString()
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
