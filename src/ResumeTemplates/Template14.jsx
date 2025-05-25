import React, { useRef } from "react";
import { useSelector } from "react-redux";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import DownloadController from "../Resume/DownloadController";

// Default resume data structure - maintained as in original
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

function Template14() {
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#0F172A",
  }; // Professional dark blue default
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};

  // Premium ATS-Friendly Resume Styles
  const styles = {
    // Main container - clean A4 page
    container: {
      fontFamily: fontName || "'Arial', 'Helvetica', sans-serif", // Sans-serif is better for ATS
      width: "794px",
      height: "1123px",
      backgroundColor: "#ffffff",
      padding: "60px 65px",
      boxSizing: "border-box",
      color: "#1f2937", // Dark gray for better readability
      position: "relative",
      lineHeight: 1.4,
    },
    // Header section - clean and minimal for maximum ATS readability
    header: {
      marginBottom: "25px",
      borderBottom: "2px solid #e5e7eb",
      paddingBottom: "25px",
    },
    name: {
      fontSize: name || "28px",
      fontWeight: "700",
      color: "#000000", // Pure black for name - maximum contrast
      marginBottom: "2px",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    role: {
      fontSize: subheading || "16px",
      fontWeight: "600",
      color: theme.primaryColor,
      marginBottom: "12px",
    },
    contactRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      marginTop: "15px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      fontSize: label || "12px",
      color: "#4b5563",
      gap: "8px",
    },
    contactIcon: {
      color: theme.primaryColor,
      width: "14px",
      height: "14px",
    },
    // Section styles - consistent and clear for ATS parsing
    section: {
      marginBottom: "25px",
    },
    sectionTitle: {
      fontSize: heading || "16px",
      fontWeight: "700",
      color: "#000000",
      marginBottom: "15px",
      paddingBottom: "5px",
      borderBottom: `1px solid ${theme.primaryColor}`,
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    // Summary section - clear paragraph for ATS keyword detection
    summary: {
      fontSize: body || "14px",
      lineHeight: "1.6",
      color: "#374151",
      marginBottom: "5px",
    },
    // Skills section - optimized for ATS keyword scanning
    skillsContainer: {
      marginBottom: "20px",
    },
    skillsRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px 30px",
      marginBottom: "10px",
    },
    skillCategory: {
      fontSize: label || "12px",
      fontWeight: "600",
      color: "#000000",
      marginBottom: "5px",
      width: "100%",
    },
    skillItem: {
      fontSize: body || "14px",
      color: "#4b5563",
      flex: "1 0 auto",
    },
    // Experience section - clear structure for ATS parsing
    experienceItem: {
      marginBottom: "20px",
      paddingBottom: "15px",
      borderBottom: "1px solid #e5e7eb",
    },
    experienceHeader: {
      marginBottom: "8px",
    },
    roleAndCompany: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
    },
    jobTitle: {
      fontSize: subheading || "16px",
      fontWeight: "700",
      color: "#000000",
    },
    companyName: {
      fontSize: body || "14px",
      fontWeight: "600",
      color: theme.primaryColor,
    },
    periodAndLocation: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: label || "12px",
      color: "#6b7280",
      marginTop: "3px",
    },
    period: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    location: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    bulletItem: {
      fontSize: body || "14px",
      color: "#374151",
      marginBottom: "5px",
      position: "relative",
    },
    // Education section - structured for ATS
    educationItem: {
      marginBottom: "15px",
      display: "flex",
      justifyContent: "space-between",
    },
    educationMain: {
      flex: 3,
    },
    educationPeriod: {
      flex: 1,
      textAlign: "right",
      fontSize: label || "12px",
      color: "#6b7280",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "5px",
    },
    degreeTitle: {
      fontSize: body || "14px",
      fontWeight: "700",
      color: "#000000",
    },
    institution: {
      fontSize: body || "14px",
      color: theme.primaryColor,
      fontWeight: "600",
    },
    gpa: {
      fontSize: label || "12px",
      color: "#6b7280",
      marginTop: "2px",
    },
    // Project section - structured for ATS
    projectsGrid: {
      marginTop: "15px",
    },
    projectItem: {
      marginBottom: "18px",
      paddingBottom: "15px",
      borderBottom: "1px solid #e5e7eb",
    },
    projectHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: "5px",
    },
    projectTitle: {
      fontSize: subheading || "16px",
      fontWeight: "700",
      color: "#000000",
    },
    techBadge: {
      fontSize: label || "11px",
      color: theme.primaryColor,
      fontWeight: "600",
    },
    projectList: {
      paddingLeft: "18px",
      marginTop: "5px",
    },
    // Certification section - list format for ATS
    certList: {
      paddingLeft: "18px",
    },
    certItem: {
      fontSize: body || "14px",
      color: "#374151",
      marginBottom: "5px",
    },
    // Two-column layout for certain sections
    twoColumnGrid: {
      display: "flex",
      gap: "30px",
    },
    column: {
      flex: 1,
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
        {/* Header - Name, Title, Contact */}
        <header style={styles.header}>
          <h1 style={styles.name}>
            {ResumeDetails.personal?.name || DEFAULT_RESUME_DATA.personal.name}
          </h1>
          <div style={styles.role}>
            {ResumeDetails.personal?.jobTitle ||
              DEFAULT_RESUME_DATA.personal.jobTitle}
          </div>
          <div style={styles.contactRow}>
            <div style={styles.contactItem}>
              <FaPhone style={styles.contactIcon} />
              <span>
                {ResumeDetails.personal?.phone ||
                  DEFAULT_RESUME_DATA.personal.phone}
              </span>
            </div>
            <div style={styles.contactItem}>
              <FaEnvelope style={styles.contactIcon} />
              <span>
                {ResumeDetails.personal?.email ||
                  DEFAULT_RESUME_DATA.personal.email}
              </span>
            </div>
            <div style={styles.contactItem}>
              <FaLinkedin style={styles.contactIcon} />
              <span>
                {ResumeDetails.personal?.linkedin ||
                  DEFAULT_RESUME_DATA.personal.linkedin}
              </span>
            </div>
          </div>
        </header>

        {/* Professional Summary - ATS Optimized */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Professional Summary</h2>
          <p style={styles.summary}>
            {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
          </p>
        </section>

        {/* Skills Section - ATS Optimized Format */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Technical Skills</h2>
          <div style={styles.skillsContainer}>
            <div style={styles.skillsRow}>
              {(ResumeDetails.skills?.length > 0
                ? ResumeDetails.skills
                : DEFAULT_RESUME_DATA.skills
              ).map((skill, idx) => (
                <div key={idx} style={styles.skillItem}>
                  • {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section - ATS Optimized */}
        {ResumeDetails.experience?.length > 0 && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Professional Experience</h2>

            {(ResumeDetails.experience?.length > 0
              ? ResumeDetails.experience
              : DEFAULT_RESUME_DATA.experience
            ).map((exp, idx) => (
              <div
                key={`exp-${idx}`}
                style={{
                  ...styles.experienceItem,
                  borderBottom:
                    idx ===
                    (ResumeDetails.experience?.length ||
                      DEFAULT_RESUME_DATA.experience.length) -
                      1
                      ? "none"
                      : "1px solid #e5e7eb",
                }}
              >
                <div style={styles.experienceHeader}>
                  <div style={styles.roleAndCompany}>
                    <div style={styles.jobTitle}>{exp.jobTitle}</div>
                    <div style={styles.companyName}>{exp.companyName}</div>
                  </div>

                  <div style={styles.periodAndLocation}>
                    <div style={styles.period}>
                      <FaCalendarAlt size={11} style={styles.contactIcon} />
                      {new Date(exp.startDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}{" "}
                      -
                      {exp.endDate === "Present"
                        ? " Present"
                        : ` ${new Date(exp.endDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                            }
                          )}`}
                    </div>
                    <div style={styles.location}>
                      <FaMapMarkerAlt size={11} style={styles.contactIcon} />
                      {exp.location} {exp.remote ? " (Remote)" : ""} •{" "}
                      {exp.workType}
                    </div>
                  </div>
                </div>

                <ul style={styles.bulletList}>
                  {exp.description
                    .split("\n")
                    .filter((line) => line.trim())
                    .map((line, i) => (
                      <li key={i} style={styles.bulletItem}>
                        {line.replace("-", "").trim()}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Two-Column Layout for Education and Certifications */}
        <div style={styles.twoColumnGrid}>
          {/* Education Section - ATS Optimized */}
          <section style={{ ...styles.section, ...styles.column }}>
            <h2 style={styles.sectionTitle}>Education</h2>

            {(ResumeDetails.education?.length > 0
              ? ResumeDetails.education
              : DEFAULT_RESUME_DATA.education
            ).map((edu, idx) => (
              <div key={idx} style={styles.educationItem}>
                <div style={styles.educationMain}>
                  <div style={styles.degreeTitle}>{edu.degree}</div>
                  <div style={styles.institution}>{edu.institution}</div>
                  <div style={styles.gpa}>GPA: {edu.gpa}</div>
                </div>
                <div style={styles.educationPeriod}>
                  <FaCalendarAlt size={11} style={styles.contactIcon} />
                  {new Date(edu.educationStartDate).getFullYear()} -{" "}
                  {new Date(edu.educationEndDate).getFullYear()}
                </div>
              </div>
            ))}
          </section>

          {/* Certifications Section - ATS Optimized */}
          <section style={{ ...styles.section, ...styles.column }}>
            <h2 style={styles.sectionTitle}>Certifications</h2>

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

        {/* Projects Section - ATS Optimized */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Projects</h2>

          <div style={styles.projectsGrid}>
            {(ResumeDetails.projects?.length > 0
              ? ResumeDetails.projects
              : DEFAULT_RESUME_DATA.projects
            ).map((project, idx) => (
              <div
                key={`proj-${idx}`}
                style={{
                  ...styles.projectItem,
                  borderBottom:
                    idx ===
                    (ResumeDetails.projects?.length ||
                      DEFAULT_RESUME_DATA.projects.length) -
                      1
                      ? "none"
                      : "1px solid #e5e7eb",
                }}
              >
                <div style={styles.projectHeader}>
                  <div style={styles.projectTitle}>{project.projectTitle}</div>
                  <div style={styles.techBadge}>{project.technologies}</div>
                </div>

                <ul style={styles.bulletList}>
                  {project.projectDescription
                    .split("\n")
                    .filter((line) => line.trim())
                    .map((line, i) => (
                      <li key={i} style={styles.description}>
                        {line.replace("-", "").trim()}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Template14;
