import React, { useRef } from "react";
import { useSelector } from "react-redux";
import DownloadController from "../Resume/DownloadController";

// Default resume data - unchanged from original
const DEFAULT_RESUME_DATA = {
  personal: {
    name: "Your Name",
    jobTitle: "Full-Stack Developer",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    linkedin: "linkedin.com/in/your-profile",
  },
  summary:
    "Innovative software developer with 5+ years of experience building scalable web applications.",
  education: [
    {
      degree: "B.Sc. Computer Science",
      institution: "University of Technology",
      gpa: "3.9/4.0",
      educationStartDate: "2018-09-01",
      educationEndDate: "2022-06-01",
    },
  ],
  experience: [
    {
      companyName: "Tech Innovators Inc.",
      jobTitle: "Senior Developer",
      location: "New York, NY",
      remote: false,
      workType: "Full-time",
      startDate: "2022-01-01",
      endDate: "Present",
      description:
        "- Led development of microservices architecture\n- Optimized API performance by 40%\n- Mentored junior developers",
    },
  ],
  skills: ["React", "Node.js", "Express", "MongoDB", "Python", "AWS"],
  certifications: ["AWS Certified Developer", "Google Cloud Fundamentals"],
  projects: [
    {
      projectTitle: "AI Resume Builder",
      projectDescription:
        "- Developed an AI-powered resume builder\n- Implemented NLP-based keyword optimization\n- Achieved 98% ATS compatibility",
      technologies: "React, Node.js, MongoDB",
    },
  ],
};

/**
 * ATS-Optimized Professional Resume Template
 *
 * This template follows industry best practices for ATS compatibility:
 * - Clean structure with standard section headings
 * - No complex graphics, tables, or columns that could confuse ATS
 * - Proper semantic hierarchy
 * - Consistent formatting
 * - Clear section separation
 * - Standard fonts and formatting
 */
function Template13() {
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#0F3057",
  }; // Professional deep blue
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};

  // ATS-Friendly Resume Styles
  const styles = {
    container: {
      fontFamily: fontName || "'Georgia', 'Times New Roman', serif", // Highly readable serif font
      width: "794px", // Standard A4 width
      height: "1123px", // Standard A4 height
      backgroundColor: "#ffffff",
      padding: "60px 72px", // Generous margins for readability
      boxSizing: "border-box",
      boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
      position: "relative",
      color: "#222",
      lineHeight: 1.5,
    },
    header: {
      marginBottom: "28px",
    },
    name: {
      fontSize: name || "32px",
      fontWeight: "700",
      color: "#000",
      marginBottom: "10px",
      textAlign: "center",
      letterSpacing: ".5px",
    },
    jobTitle: {
      fontSize: subheading || "18px",
      fontWeight: "500",
      color: theme.primaryColor,
      textAlign: "center",
      marginBottom: "16px",
    },
    contactInfo: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "18px",
      fontSize: body || "14px",
      color: "#333",
      marginTop: "14px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    section: {
      marginBottom: "26px",
    },
    sectionHeading: {
      fontSize: heading || "18px",
      fontWeight: "700",
      color: "#000",
      paddingBottom: "8px",
      borderBottom: `2px solid ${theme.primaryColor}`,
      marginBottom: "16px",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    summary: {
      fontSize: body || "15px",
      lineHeight: "1.6",
      color: "#333",
      marginBottom: "10px",
    },
    experienceItem: {
      marginBottom: "24px",
    },
    jobHeading: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "10px",
      marginBottom: "8px",
    },
    companyJobTitle: {
      fontSize: subheading || "16px",
      fontWeight: "700",
      color: "#000",
    },
    jobLocation: {
      display: "block",
      fontSize: body || "15px",
      color: "#555",
      marginTop: "2px",
    },
    duration: {
      fontSize: body || "15px",
      color: "#555",
      fontWeight: "500",
    },
    bullets: {
      margin: "10px 0 0 0",
      paddingLeft: "18px",
    },
    bulletItem: {
      fontSize: body || "15px",
      color: "#333",
      marginBottom: "6px",
      lineHeight: "1.5",
    },
    skillsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px 16px",
      marginBottom: "10px",
    },
    skillItem: {
      fontSize: body || "15px",
      color: "#333",
    },
    twoColumnGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
    },
    educationItem: {
      marginBottom: "16px",
    },
    institution: {
      fontSize: subheading || "16px",
      fontWeight: "600",
      color: "#000",
    },
    degree: {
      fontSize: body || "15px",
      color: "#333",
    },
    degreeInfo: {
      fontSize: body || "14px",
      color: "#555",
      display: "flex",
      justifyContent: "space-between",
      marginTop: "5px",
    },
    projectItem: {
      marginBottom: "20px",
    },
    projectTitle: {
      fontSize: subheading || "16px",
      fontWeight: "600",
      color: "#000",
      marginBottom: "8px",
    },
    technologies: {
      fontSize: label || "14px",
      color: "#555",
      marginTop: "8px",
      fontStyle: "italic",
    },
    certificationList: {
      margin: "0",
      paddingLeft: "18px",
    },
    certificationItem: {
      fontSize: body || "15px",
      color: "#333",
      marginBottom: "8px",
    },
    divider: {
      height: "1px",
      backgroundColor: "#ddd",
      margin: "30px 0",
    },
    description: {
      fontSize: body || "13px",
      color: "#4a5568",
      lineHeight: "1.5",
      marginTop: "5px",
    },
    bulletList: {
      paddingLeft: "15px",
      listStyleType: "disc",
      fontSize: body || "13px",
      color: "#4a5568",
      marginTop: "5px",
    },
  };

  return (
    <>
      <DownloadController
        resumeRef={resumeRef}
        fileName="ATS_Optimized_Resume.pdf"
      />

      {/* ATS-Friendly Resume Container */}
      <div
        style={styles.container}
        className="template-container scale-50 md:scale-100 transform origin-top-left m-1 md:m-0"
        ref={resumeRef}
        id="resume"
      >
        {/* Header Section - Name, Title, Contact Info */}
        <header style={styles.header}>
          <h1 style={styles.name}>
            {ResumeDetails.personal?.name || DEFAULT_RESUME_DATA.personal.name}
          </h1>
          <div style={styles.jobTitle}>
            {ResumeDetails.personal?.jobTitle ||
              DEFAULT_RESUME_DATA.personal.jobTitle}
          </div>
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              {ResumeDetails.personal?.phone ||
                DEFAULT_RESUME_DATA.personal.phone}
            </div>
            <div style={styles.contactItem}>
              {ResumeDetails.personal?.email ||
                DEFAULT_RESUME_DATA.personal.email}
            </div>
            <div style={styles.contactItem}>
              {ResumeDetails.personal?.linkedin ||
                DEFAULT_RESUME_DATA.personal.linkedin}
            </div>
          </div>
        </header>

        {/* Professional Summary Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Professional Summary</h2>
          <p style={styles.summary}>
            {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
          </p>
        </section>

        {/* Core Skills Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Core Skills</h2>
          <div style={styles.skillsContainer}>
            {(ResumeDetails.skills?.length > 0
              ? ResumeDetails.skills
              : DEFAULT_RESUME_DATA.skills
            ).map((skill, idx) => (
              <div key={idx} style={styles.skillItem}>
                • {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience Section */}
        {ResumeDetails.experience?.length > 0 && (
          <section style={styles.section}>
            <h2 style={styles.sectionHeading}>Professional Experience</h2>

            {(ResumeDetails.experience?.length > 0
              ? ResumeDetails.experience
              : DEFAULT_RESUME_DATA.experience
            ).map((exp, idx) => (
              <div key={`exp-${idx}`} style={styles.experienceItem}>
                <div style={styles.jobHeading}>
                  <div>
                    <div style={styles.companyJobTitle}>
                      {exp.jobTitle} | {exp.companyName}
                    </div>
                    <div style={styles.jobLocation}>
                      {exp.location} {exp.remote ? "(Remote)" : ""} •{" "}
                      {exp.workType}
                    </div>
                  </div>
                  <div style={styles.duration}>
                    {new Date(exp.startDate).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    -
                    {exp.endDate === "Present"
                      ? " Present"
                      : ` ${new Date(exp.endDate).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}`}
                  </div>
                </div>
                <p style={styles.description}>
                  {exp.description.split("\n")[0]}
                </p>
                <ul style={styles.bulletList}>
                  {exp.description
                    .split("\n")
                    .filter((line) => line.startsWith("-"))
                    .map((line, i) => (
                      <li key={i} style={styles.description}>
                        {line.replace("-", "")}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Projects Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Relevant Projects</h2>

          {(ResumeDetails.projects?.length > 0
            ? ResumeDetails.projects
            : DEFAULT_RESUME_DATA.projects
          ).map((project, idx) => (
            <div key={`proj-${idx}`} style={styles.projectItem}>
              <div style={styles.projectTitle}>{project.projectTitle}</div>
              <ul style={styles.bulletList}>
                {project.projectDescription
                  .split("\n")
                  .filter((line) => line.trim())
                  .map((line, i) => (
                    <li key={i} style={styles.description}>
                      {line.replace("-", "")}
                    </li>
                  ))}
              </ul>
              <div style={styles.technologies}>
                <strong>Technologies:</strong> {project.technologies}
              </div>
            </div>
          ))}
        </section>

        <div style={styles.divider}></div>

        {/* Bottom Section: Education and Certifications side by side */}
        <div style={styles.twoColumnGrid}>
          {/* Education Section */}
          <section style={styles.section}>
            <h2 style={styles.sectionHeading}>Education</h2>

            {(ResumeDetails.education?.length > 0
              ? ResumeDetails.education
              : DEFAULT_RESUME_DATA.education
            ).map((edu, idx) => (
              <div key={idx} style={styles.educationItem}>
                <div style={styles.institution}>{edu.institution}</div>
                <div style={styles.degree}>{edu.degree}</div>
                <div style={styles.degreeInfo}>
                  <span>
                    {new Date(edu.educationStartDate).getFullYear()} -{" "}
                    {new Date(edu.educationEndDate).getFullYear()}
                  </span>
                  <span>GPA: {edu.gpa}</span>
                </div>
              </div>
            ))}
          </section>

          {/* Certifications Section */}
          <section style={styles.section}>
            <h2 style={styles.sectionHeading}>Certifications</h2>
            <ul style={styles.bulletList}>
              {(ResumeDetails.certifications?.length > 0
                ? ResumeDetails.certifications
                : DEFAULT_RESUME_DATA.certifications
              ).map((cert, idx) => (
                <li key={idx} style={styles.description}>
                  {cert}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default Template13;
