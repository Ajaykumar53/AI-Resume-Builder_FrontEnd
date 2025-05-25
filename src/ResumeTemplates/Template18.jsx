import React, { useRef } from "react";
import { useSelector } from "react-redux";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaBriefcase,
  FaLaptopCode,
  FaCertificate,
} from "react-icons/fa";
import DownloadController from "../Resume/DownloadController";

// Default resume data (consistent with your original)
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

function Template18() {
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#2dd4bf",
  }; // Teal for a modern look
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};

  // ATS-Optimized Styles in Object
  const styles = {
    container: {
      fontFamily: fontName || "'Arial', sans-serif",
      width: "794px",
      minHeight: "1123px",
      backgroundColor: "#ffffff",
      color: "#374151", // Charcoal gray
      padding: "40px 50px",
      boxSizing: "border-box",
      boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "column",
    },

    // Header
    header: {
      marginBottom: "30px",
      textAlign: "left",
    },
    headerName: {
      fontSize: name || "32px",
      fontWeight: "700",
      color: "#1f2937",
      margin: "0 0 6px 0",
      letterSpacing: "-0.6px",
      lineHeight: "1.1",
    },
    headerTitle: {
      fontSize: subheading || "18px",
      fontWeight: "600",
      color: theme.primaryColor,
      marginBottom: "12px",
    },
    contactBar: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      marginTop: "10px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      fontSize: body || "14px",
      color: "#4b5563",
      gap: "6px",
    },
    headerDivider: {
      height: "3px",
      backgroundColor: theme.primaryColor,
      marginTop: "15px",
      width: "80px",
      borderRadius: "1px",
    },

    // Section
    section: {
      marginBottom: "25px",
    },
    sectionTitle: {
      fontSize: heading || "16px",
      fontWeight: "700",
      color: "#1f2937",
      textTransform: "uppercase",
      letterSpacing: "1.5px",
      marginBottom: "12px",
      paddingBottom: "6px",
      borderBottom: `2px solid ${theme.primaryColor}`,
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    sectionIcon: {
      color: theme.primaryColor,
      fontSize: "16px",
    },

    // Summary
    summary: {
      fontSize: body || "14px",
      lineHeight: "1.6",
      color: "#4b5563",
      textAlign: "justify",
    },

    // Skills
    skillsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    },
    skillItem: {
      fontSize: label || "13px",
      color: "#1f2937",
      backgroundColor: "#f8fafc",
      padding: "6px 12px",
      borderRadius: "20px",
      border: `1px solid ${theme.primaryColor}`,
      fontWeight: "500",
      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
    },

    // Experience
    experienceItem: {
      marginBottom: "20px",
      breakInside: "avoid",
    },
    companyHeader: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      marginBottom: "6px",
    },
    companyName: {
      fontSize: subheading || "16px",
      fontWeight: "700",
      color: "#1f2937",
    },
    dateDuration: {
      fontSize: body || "14px",
      color: "#6b7280",
      fontWeight: "500",
    },
    jobSubheader: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      marginBottom: "8px",
    },
    jobTitle: {
      fontSize: body || "15px",
      fontWeight: "600",
      color: theme.primaryColor,
    },
    location: {
      fontSize: body || "14px",
      color: "#6b7280",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    jobDescription: {
      listStyle: "none",
      padding: "0",
      margin: "0",
    },
    jobBullet: {
      fontSize: body || "14px",
      color: "#4b5563",
      marginBottom: "6px",
      lineHeight: "1.5",
      position: "relative",
      paddingLeft: "18px",
    },
    bulletPoint: {
      position: "absolute",
      left: "0",
      top: "8px",
      width: "6px",
      height: "6px",
      backgroundColor: theme.primaryColor,
      borderRadius: "50%",
    },

    // Education
    educationItem: {
      marginBottom: "16px",
    },
    degreeTitle: {
      fontSize: subheading || "15px",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "4px",
    },
    institution: {
      fontSize: body || "14px",
      color: theme.primaryColor,
      fontWeight: "500",
      marginBottom: "4px",
    },
    educationDetails: {
      fontSize: body || "14px",
      color: "#6b7280",
    },

    // Projects
    projectItem: {
      marginBottom: "16px",
    },
    projectTitle: {
      fontSize: subheading || "15px",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "6px",
    },
    projectDescription: {
      listStyle: "none",
      padding: "0",
      margin: "0",
    },
    projectBullet: {
      fontSize: body || "14px",
      color: "#4b5563",
      marginBottom: "6px",
      lineHeight: "1.5",
      position: "relative",
      paddingLeft: "18px",
    },
    technologies: {
      fontSize: label || "13px",
      color: "#6b7280",
      fontWeight: "500",
      marginTop: "6px",
    },
    techHighlight: {
      color: theme.primaryColor,
      fontWeight: "600",
    },

    // Certifications
    certItem: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "10px",
    },
    certIcon: {
      color: theme.primaryColor,
      fontSize: "14px",
    },
    certText: {
      fontSize: body || "14px",
      color: "#4b5563",
    },
  };

  return (
    <>
      <DownloadController
        resumeRef={resumeRef}
        fileName="ATS_Creative_Resume.pdf"
      />
      <div
        style={styles.container}
        ref={resumeRef}
        id="resume"
        className="scale-50 md:scale-100 transform origin-top-left md:m-0 m-1"
      >
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.headerName}>
            {ResumeDetails.personal?.name || DEFAULT_RESUME_DATA.personal.name}
          </h1>
          <h2 style={styles.headerTitle}>
            {ResumeDetails.personal?.jobTitle ||
              DEFAULT_RESUME_DATA.personal.jobTitle}
          </h2>
          <div style={styles.contactBar}>
            <div style={styles.contactItem}>
              <FaPhone />
              {ResumeDetails.personal?.phone ||
                DEFAULT_RESUME_DATA.personal.phone}
            </div>
            <div style={styles.contactItem}>
              <FaEnvelope />
              {ResumeDetails.personal?.email ||
                DEFAULT_RESUME_DATA.personal.email}
            </div>
            <div style={styles.contactItem}>
              <FaLinkedin />
              {ResumeDetails.personal?.linkedin ||
                DEFAULT_RESUME_DATA.personal.linkedin}
            </div>
          </div>
          <div style={styles.headerDivider}></div>
        </header>

        {/* Summary */}
        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>Professional Summary</h3>
          <p style={styles.summary}>
            {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
          </p>
        </section>

        {/* Skills */}
        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>Technical Skills</h3>
          <div style={styles.skillsContainer}>
            {(ResumeDetails.skills?.length > 0
              ? ResumeDetails.skills
              : DEFAULT_RESUME_DATA.skills
            ).map((skill, idx) => (
              <span key={idx} style={styles.skillItem}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        {ResumeDetails.experience?.length > 0 && (
          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>
              <FaBriefcase style={styles.sectionIcon} />
              Professional Experience
            </h3>
            {(ResumeDetails.experience?.length > 0
              ? ResumeDetails.experience
              : DEFAULT_RESUME_DATA.experience
            ).map((exp, idx) => (
              <div key={`exp-${idx}`} style={styles.experienceItem}>
                <div style={styles.companyHeader}>
                  <h4 style={styles.companyName}>{exp.companyName}</h4>
                  <span style={styles.dateDuration}>
                    {new Date(exp.startDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}{" "}
                    -
                    {exp.endDate === "Present"
                      ? "Present"
                      : new Date(exp.endDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}
                  </span>
                </div>
                <div style={styles.jobSubheader}>
                  <span style={styles.jobTitle}>{exp.jobTitle}</span>
                  <span style={styles.location}>
                    <FaMapMarkerAlt size={12} />
                    {exp.location} {exp.remote ? "(Remote)" : ""} •{" "}
                    {exp.workType}
                  </span>
                </div>
                <ul style={styles.jobDescription}>
                  {exp.description
                    .split("\n")
                    .filter((line) => line.trim())
                    .map((line, i) => (
                      <li key={i} style={styles.jobBullet}>
                        <span style={styles.bulletPoint}></span>
                        {line.replace("-", "").trim()}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>Education</h3>
          {(ResumeDetails.education?.length > 0
            ? ResumeDetails.education
            : DEFAULT_RESUME_DATA.education
          ).map((edu, idx) => (
            <div key={idx} style={styles.educationItem}>
              <h4 style={styles.degreeTitle}>{edu.degree}</h4>
              <p style={styles.institution}>{edu.institution}</p>
              <p style={styles.educationDetails}>
                {new Date(edu.educationStartDate).getFullYear()} -{" "}
                {new Date(edu.educationEndDate).getFullYear()} | GPA: {edu.gpa}
              </p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>
            <FaLaptopCode style={styles.sectionIcon} />
            Projects
          </h3>
          {(ResumeDetails.projects?.length > 0
            ? ResumeDetails.projects
            : DEFAULT_RESUME_DATA.projects
          ).map((project, idx) => (
            <div key={`proj-${idx}`} style={styles.projectItem}>
              <h4 style={styles.projectTitle}>{project.projectTitle}</h4>
              <ul style={styles.projectDescription}>
                {project.projectDescription
                  .split("\n")
                  .filter((line) => line.trim())
                  .map((line, i) => (
                    <li key={i} style={styles.projectBullet}>
                      <span style={styles.bulletPoint}></span>
                      {line.replace("-", "").trim()}
                    </li>
                  ))}
              </ul>
              <p style={styles.technologies}>
                <span style={styles.techHighlight}>Technologies:</span>{" "}
                {project.technologies}
              </p>
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>
            <FaCertificate style={styles.sectionIcon} />
            Certifications
          </h3>
          {(ResumeDetails.certifications?.length > 0
            ? ResumeDetails.certifications
            : DEFAULT_RESUME_DATA.certifications
          ).map((cert, idx) => (
            <div key={idx} style={styles.certItem}>
              <FaCertificate style={styles.certIcon} />
              <span style={styles.certText}>{cert}</span>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Template18;
