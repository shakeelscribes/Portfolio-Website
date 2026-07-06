"use client";

import ScrollReveal from "./ScrollReveal";

const timelineItems = [
  {
    tag: "Internship",
    title: "Full Stack Development With Java",
    org: "Phoenix Softech · Remote",
    date: "Jul 2025 – Aug 2025",
    desc: "Developed Java applications under guidance, enhancing coding skills. Assisted in troubleshooting software issues, improving system reliability. Documented technical processes and solutions for team knowledge sharing."
  },
  {
    tag: "Education",
    title: "B.E. Computer Science and Engineering",
    org: "K.L.N. College of Engineering",
    date: "2022 – 2026",
    desc: "Maintaining a 7.5 CGPA. Built foundational knowledge in algorithms, database management, and software engineering. Leading multiple technical projects and participating in hackathons."
  },
  {
    tag: "Certification",
    title: "Java SE 8 Programmer I",
    org: "Oracle",
    date: "Dec 2023",
    desc: "Demonstrated strong understanding of Java fundamentals, object-oriented concepts, and core APIs. Validated ability to write secure and robust Java code."
  }
];

export default function Timeline() {
  return (
    <section className="timeline" id="experience" style={{ background: 'transparent' }}>
      <div className="container-main">
        <ScrollReveal>
          <div className="section-head" style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
            <span className="ts-mono" style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--accent-light)" }}>[ 03 ]</span>
            <span className="gray-span" style={{ fontFamily: "var(--font-mono)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.02em", color: "var(--text-dim)", margin: 0 }}>Where I've been</span>
          </div>
        </ScrollReveal>

        <div className="timeline-grid">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-card">
              <span className="timeline-tag">{item.tag}</span>
              <h4>{item.title}</h4>
              <span className="timeline-org">{item.org}</span>
              <span className="timeline-date">{item.date}</span>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
