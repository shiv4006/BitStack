import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const [showUpload, setShowUpload] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const jobsRef = useRef<HTMLDivElement | null>(null);

  const isLoggedIn = () => {
    return !!localStorage.getItem("token"); // adjust if needed
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
    } else {
      alert("Please upload a PDF file only.");
    }
  };

  const handleSubmit = () => {
    if (!isLoggedIn()) {
      alert("Please login or signup to submit your resume.");
      navigate("/login");
      return;
    }

    if (!file) {
      alert("Please upload your resume first.");
      return;
    }

    alert(`Resume "${file.name}" uploaded successfully!`);
    setShowUpload(false);
    setFile(null);
  };

  const scrollToJobs = () => {
    jobsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative py-28 px-6 bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-24 right-24 w-[28rem] h-[28rem] bg-cyan-500 rounded-full mix-blend-multiply blur-3xl animate-pulse"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-24 left-24 w-[28rem] h-[28rem] bg-blue-500 rounded-full mix-blend-multiply blur-3xl animate-pulse delay-2000"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Build the Future With <span className="text-cyan-400">Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-100 mb-4"
          >
            Careers that grow with your ambition
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-14"
          >
            Join a team of passionate engineers, designers, and problem-solvers
            building world-class digital solutions. Whether you're starting your
            career or leveling up, we provide the environment, mentorship, and
            impact-driven projects to help you thrive.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToJobs}
              className="bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
            >
              View Open Positions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowUpload(true)}
              className="border-2 border-cyan-400 text-cyan-300 px-10 py-4 rounded-full text-lg font-bold hover:bg-cyan-400/10 transition-all duration-300"
            >
              Send Your Resume
            </motion.button>
          </motion.div>

          {/* Why Join Us */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {[
              {
                icon: "🚀",
                title: "Fast Growth",
                desc: "Work on real-world projects with cutting-edge technologies and accelerate your career.",
              },
              {
                icon: "🤝",
                title: "Amazing Team",
                desc: "Collaborate with talented, supportive, and diverse professionals across domains.",
              },
              {
                icon: "⚖️",
                title: "Work-Life Balance",
                desc: "Flexible work culture, remote opportunities, and a focus on well-being.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 text-center hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact / Careers Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: "📧", label: "Careers Email", value: "careers@bitstack.tech" },
              { icon: "📞", label: "HR Contact", value: "+1 (555) 123-4567" },
              { icon: "📍", label: "Office Location", value: "Tech Hub, Silicon Valley" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                <p className="text-white font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust / Culture Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-20 pt-10 border-t border-white/10"
          >
            <p className="text-gray-400 text-sm mb-5">
              Loved by employees worldwide. Building impact-driven products since
              day one.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span>✓ Employee-first Culture</span>
              <span>✓ Learning & Growth Focused</span>
              <span>✓ Remote-Friendly</span>
            </div>
          </motion.div>
        </div>
      </section>
{/* JOBS POSTED SECTION */}
<section
  ref={jobsRef}
  className="py-28 px-6 bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white"
>
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
      Current Open Positions
    </h3>
    <p className="text-lg text-blue-100 mb-14 max-w-2xl mx-auto">
      We’re always looking for talented people. Check back soon or upload
      your resume to be considered for future opportunities.
    </p>

    {/* Empty State */}
    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-16 text-gray-300 shadow-lg">
      <p className="text-xl font-semibold mb-3 text-white">
        No openings right now
      </p>
      <p className="text-sm text-gray-400">
        New job opportunities will appear here once posted.
      </p>
    </div>
  </div>
</section>


      {/* Resume Upload Modal */}
      <AnimatePresence>
        {showUpload && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 rounded-2xl p-8 w-full max-w-md text-white relative"
            >
              <h3 className="text-2xl font-bold mb-4">Upload Your Resume</h3>
              <p className="text-gray-400 mb-6">Only PDF files are accepted.</p>

              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="w-full mb-6 text-sm text-gray-300
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-cyan-400 file:text-slate-900
                  hover:file:bg-cyan-300"
              />

              {file && (
                <p className="text-sm text-green-400 mb-4">
                  Selected file: {file.name}
                </p>
              )}

              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => setShowUpload(false)}
                  className="px-6 py-2 rounded-full border border-gray-600 text-gray-300 hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold hover:shadow-lg transition"
                >
                  Submit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Career;
