import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DeptOfEEE = () => {
  return (
    <div
      className="w-full min-h-screen bg-black text-white overflow-x-hidden"
      style={{
        "--color-gold": "#C9A154",
        "--color-gray": "#4B5563",
      }}
    >
      <Navbar />

      <section className="max-w-6xl px-4 md:px-20 py-12 mx-auto mt-16">
        <div className="relative text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ color: "var(--color-gold)" }}>
            DEPARTMENT OF ELECTRICAL & ELECTRONICS ENGINEERING
          </h1>
          
        </div>

        {/* VISION */}
        <div className="mt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: "var(--color-gold)" }}>
            VISION
          </h2>

          <div className="flex gap-6 items-start w-full mt-4">
            <div className="hidden md:block w-1 rounded-full" style={{ background: "var(--color-gold)", minHeight: '48px' }}></div>
            <div className="flex-1 bg-black/40 border border-gray-800 p-6 rounded-2xl shadow-sm">
              <p className="text-xl text-left w-full text-gray-300">
                Be a globally acclaimed center dedicated to nurture academic, research and professional
                excellence in the field of electrical and electronics engineering for the betterment of society
              </p>
            </div>
          </div>
        </div>

        {/* MISSION */}
        <div className="mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: "var(--color-gold)" }}>
            MISSION
          </h2>

          <div className="flex gap-6 w-full mt-4">
            <div className="hidden md:block w-1 rounded-full" style={{ background: "var(--color-gold)", minHeight: '48px' }}></div>
            <div className="flex-1 bg-black/40 border border-gray-800 p-6 rounded-2xl shadow-sm">
              <ul className="mt-2 space-y-4 list-none">
                <li className="flex gap-4 items-start">
                  <span className="mt-1 h-3 w-3 rounded-full" style={{ background: "var(--color-gold)" }}></span>
                  <span className="text-xl text-gray-300">To achieve the highest quality in the academic programs and research work to remain competitive in the changing world scenario.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="mt-1 h-3 w-3 rounded-full" style={{ background: "var(--color-gold)" }}></span>
                  <span className="text-xl text-gray-300">To transform each student into a confident, knowledgeable, honest and humane individual with ability to synchronize with emerging technologies and capability to solve real-life engineering problems.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="mt-1 h-3 w-3 rounded-full" style={{ background: "var(--color-gold)" }}></span>
                  <span className="text-xl text-gray-300">To serve the community and stakeholders in the field of electrical and electronics engineering through collaborative research.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>


<div className="mt-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: "var(--color-gold)" }}>
            PEO - PROGRAM EDUCATIONAL OBJECTIVES
          </h2>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-black/30">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200">PEO</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-200">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className=" py-4  align-top font-semibold" style={{ color: "var(--color-gold)" }}>PEO-1</td>
                  <td className="px-4 py-4 text-gray-300">Graduates of this program will become successful practicing engineers in the domain of electrical and electronics engineering in areas such as design, manufacturing, testing and commissioning.</td>
                </tr>
                <tr>
                  <td className=" py-4  align-top font-semibold" style={{ color: "var(--color-gold)" }}>PEO-2</td>
                  <td className="px-4 py-4 text-gray-300">Graduates of this program will pursue higher education at national and international premier institutions in engineering and interdisciplinary areas to emerge as researchers, experts, and educators.</td>
                </tr>
                <tr>
                  <td className=" py-4  align-top font-semibold" style={{ color: "var(--color-gold)" }}>PEO-3</td>
                  <td className="px-4 py-4 text-gray-300">Graduates of this program will emerge as leaders having lifelong learning abilities to maintain and enhance professional skills needed to fulfill the needs of society in solving technical problems using engineering principles, tools and practices in an ethical and responsible manner understanding environmental impacts.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>





        {/* PO - Program Outcomes */}
        <div className="mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: "var(--color-gold)" }}>
            PO - PROGRAM OUTCOMES
          </h2>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-black/30">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-200">PO</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-200">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="px-4 py-4 align-top font-semibold text-gold" style={{ color: "var(--color-gold)" }}>PO1</td>
                  <td className="px-4 py-4 text-gray-300">Engineering Knowledge: Apply knowledge of mathematics, natural science, computing, engineering fundamentals and an engineering specialization as specified in WK1 to WK4 respectively to develop to the solution of complex engineering problems.</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 align-top font-semibold" style={{ color: "var(--color-gold)" }}>PO2</td>
                  <td className="px-4 py-4 text-gray-300">Problem Analysis: Identify, formulate, review research literature and analyze complex engineering problems reaching substantiated conclusions with consideration for sustainable development. (WK1 to WK4)</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 align-top font-semibold" style={{ color: "var(--color-gold)" }}>PO3</td>
                  <td className="px-4 py-4 text-gray-300">Design/Development of Solutions: Design creative solutions for complex engineering problems and design/develop systems/components/processes to meet identified needs with consideration for the public health and safety, whole-life cost, net zero carbon, culture, society and environment as required. (WK5)</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 align-top font-semibold" style={{ color: "var(--color-gold)" }}>PO4</td>
                  <td className="px-4 py-4 text-gray-300">Conduct Investigations of Complex Problems: Conduct investigations of complex engineering problems using research-based knowledge including design of experiments, modelling, analysis & interpretation of data to provide valid conclusions. (WK8).</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 align-top font-semibold" style={{ color: "var(--color-gold)" }}>PO5</td>
                  <td className="px-4 py-4 text-gray-300">Engineering Tool Usage: Create, select and apply appropriate techniques, resources and modern engineering & IT tools, including prediction and modelling recognizing their limitations to solve complex engineering problems. (WK2 and WK6)</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 align-top font-semibold" style={{ color: "var(--color-gold)" }}>PO6</td>
                  <td className="px-4 py-4 text-gray-300">The Engineer and The World: Analyze and evaluate societal and environmental aspects while solving complex engineering problems for its impact on sustainability with reference to economy, health, safety, legal framework, culture and environment. (WK1, WK5, and WK7).</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 align-top font-semibold" style={{ color: "var(--color-gold)" }}>PO7</td>
                  <td className="px-4 py-4 text-gray-300">Ethics: Apply ethical principles and commit to professional ethics, human values, diversity and inclusion; adhere to national & international laws. (WK9)</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 align-top font-semibold" style={{ color: "var(--color-gold)" }}>PO8</td>
                  <td className="px-4 py-4 text-gray-300">Individual and Collaborative Teamwork: Function effectively as an individual, and as a member or leader in diverse/multi-disciplinary teams.</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 align-top font-semibold" style={{ color: "var(--color-gold)" }}>PO9</td>
                  <td className="px-4 py-4 text-gray-300">Communication: Communicate effectively and inclusively within the engineering community and society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations considering cultural, language, and learning differences</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 align-top font-semibold" style={{ color: "var(--color-gold)" }}>PO10</td>
                  <td className="px-4 py-4 text-gray-300">Project Management and Finance: Apply knowledge and understanding of engineering management principles and economic decision making and apply these to one’s own work, as a member and leader in a team, and to manage projects and in multidisciplinary environments.</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 align-top font-semibold" style={{ color: "var(--color-gold)" }}>PO11</td>
                  <td className="px-4 py-4 text-gray-300">Life-Long Learning: Recognize the need for, and have the preparation and ability for independent and life-long learning; adaptability to new and emerging technologies; and critical thinking in the broadest context of technological change. (WK8)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* PSO - Program Specific Outcomes */}
        <div className="mt-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: "var(--color-gold)" }}>
            PSO - PROGRAM SPECIFIC OUTCOMES
          </h2>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-black/30">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-200">PSO</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-200">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className=" py-4  align-top font-semibold" style={{ color: "var(--color-gold)" }}>PSO-1</td>
                  <td className="px-4 py-4 text-gray-300">Apply knowledge of power systems and high voltage engineering to design, test, install, and operate systems in the power sector.</td>
                </tr>
                <tr>
                  <td className=" py-4  align-top font-semibold" style={{ color: "var(--color-gold)" }}>PSO-2</td>
                  <td className="px-4 py-4 text-gray-300">Design analog and digital systems, test, and implement power electronic, control, and automation systems.</td>
                </tr>
                <tr>
                  <td className=" py-4  align-top font-semibold" style={{ color: "var(--color-gold)" }}>PSO-3</td>
                  <td className="px-4 py-4 text-gray-300">Implement eco-friendly energy systems for sustainable development.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  )
}

export default DeptOfEEE
