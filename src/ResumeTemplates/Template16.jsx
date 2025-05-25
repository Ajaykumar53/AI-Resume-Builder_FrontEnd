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

// Default resume data - kept the same as original
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

function Template16() {
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#0f172a",
  }; // Dark slate blue default
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};

  // Premium ATS-Optimized Styles
  const styles = {
    // Container and Page Layout
    container: {
      fontFamily: fontName || "'Arial', 'Helvetica', sans-serif", // Sans-serif fonts are ATS-friendly
      width: "794px",
      height: "1123px",
      backgroundColor: "#ffffff",
      boxSizing: "border-box",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      color: "#262626",
      padding: "40px 50px",
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },

    // Header Section
    header: {
      marginBottom: "25px",
    },
    headerName: {
      fontSize: name || "28px",
      fontWeight: "700",
      color: "#262626",
      margin: "0 0 8px 0",
      letterSpacing: "-0.5px",
      lineHeight: 1.1,
    },
    headerTitle: {
      fontSize: subheading || "16px",
      fontWeight: "600",
      color: theme.primaryColor,
      marginBottom: "15px",
      letterSpacing: "0.2px",
    },
    contactBar: {
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      marginTop: "15px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      fontSize: body || "13px",
      color: "#4a5568",
      gap: "8px",
    },
    headerDivider: {
      height: "3px",
      width: "100%",
      backgroundColor: theme.primaryColor,
      marginTop: "20px",
    },

    // Main Content Layout
    mainContent: {
      display: "flex",
      flex: 1,
      gap: "30px",
    },
    leftColumn: {
      flex: "66%",
    },
    rightColumn: {
      flex: "34%",
    },

    // Section Styling
    section: {
      marginBottom: "24px",
    },
    sectionTitle: {
      fontSize: heading || "16px",
      fontWeight: "700",
      color: "#262626",
      marginBottom: "16px",
      textTransform: "uppercase",
      letterSpacing: "1px",
      paddingBottom: "4px",
      borderBottom: `2px solid ${theme.primaryColor}`,
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    sectionIcon: {
      color: theme.primaryColor,
    },

    // Professional Summary
    summary: {
      fontSize: body || "14px",
      lineHeight: "1.5",
      color: "#4a5568",
      marginBottom: "10px",
    },

    // Experience Styling
    experienceItem: {
      marginBottom: "20px",
      breakInside: "avoid",
    },
    companyHeader: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "5px",
      flexWrap: "wrap",
    },
    companyName: {
      fontSize: subheading || "16px",
      fontWeight: "700",
      color: "#262626",
    },
    dateDuration: {
      fontSize: body || "14px",
      color: "#4a5568",
      fontWeight: "500",
    },
    jobSubheader: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
      flexWrap: "wrap",
    },
    jobTitle: {
      fontSize: body || "15px",
      fontWeight: "600",
      color: theme.primaryColor,
    },
    location: {
      fontSize: body || "14px",
      color: "#4a5568",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    jobDescription: {
      paddingLeft: "0",
      margin: "0",
      listStylePosition: "inside",
    },
    jobBullet: {
      fontSize: body || "14px",
      color: "#4a5568",
      margin: "0 0 8px 0",
      lineHeight: "1.5",
      position: "relative",
      paddingLeft: "20px",
      display: "flex",
    },
    bulletPoint: {
      position: "absolute",
      left: "0",
      top: "6px",
      width: "6px",
      height: "6px",
      backgroundColor: theme.primaryColor,
      borderRadius: "50%",
    },

    // Education Styling
    educationItem: {
      marginBottom: "16px",
    },
    degreeTitle: {
      fontSize: subheading || "15px",
      fontWeight: "600",
      color: "#262626",
      marginBottom: "3px",
    },
    institution: {
      fontSize: body || "14px",
      color: theme.primaryColor,
      fontWeight: "500",
      marginBottom: "5px",
    },
    educationDetails: {
      fontSize: body || "14px",
      color: "#4a5568",
    },

    // Project Styling
    projectItem: {
      marginBottom: "16px",
    },
    projectTitle: {
      fontSize: subheading || "15px",
      fontWeight: "600",
      color: "#262626",
      marginBottom: "5px",
    },
    projectDescription: {
      fontSize: body || "14px",
      margin: "0",
      padding: "0",
      listStylePosition: "inside",
    },
    projectBullet: {
      fontSize: body || "14px",
      color: "#4a5568",
      margin: "0 0 5px 0",
      lineHeight: "1.5",
      position: "relative",
      paddingLeft: "20px",
      display: "flex",
    },
    technologies: {
      fontSize: label || "13px",
      color: "#4a5568",
      fontWeight: "500",
      marginTop: "5px",
    },
    techHighlight: {
      color: theme.primaryColor,
      fontWeight: "600",
    },

    // Skills Styling
    skillsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    skillItem: {
      fontSize: body || "14px",
      color: "#4a5568",
      backgroundColor: "#f8fafc",
      padding: "6px 12px",
      borderRadius: "3px",
      border: "1px solid #e2e8f0",
      fontWeight: "500",
    },

    // Certifications Styling
    certItem: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "12px",
    },
    certIcon: {
      color: theme.primaryColor,
      flexShrink: 0,
    },
    certText: {
      fontSize: body || "14px",
      color: "#4a5568",
    },
  };

  return (
    <>
      <DownloadController
        resumeRef={resumeRef}
        fileName="ATS_Optimized_Resume.pdf"
      />

      {/* Resume Container */}
      <div
        style={styles.container}
        className="template-container scale-50 md:scale-100 transform origin-top-left m-1 md:m-0"
        ref={resumeRef}
        id="resume"
      >
        {/* Header Section with Name and Contact */}
        <div style={styles.header}>
          <h1 style={styles.headerName}>
            {ResumeDetails.personal?.name || DEFAULT_RESUME_DATA.personal.name}
          </h1>
          <div style={styles.headerTitle}>
            {ResumeDetails.personal?.jobTitle ||
              DEFAULT_RESUME_DATA.personal.jobTitle}
          </div>

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
        </div>

        {/* Main Content Area */}
        <div style={styles.mainContent}>
          {/* Left Column - Experience, Education, Projects */}
          <div style={styles.leftColumn}>
            {/* Professional Summary - ATS Keywords Section */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Professional Summary</h2>
              <p style={styles.summary}>
                {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
              </p>
            </div>

            {/* Professional Experience */}
            {ResumeDetails.experience?.length > 0 && (
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>
                  <FaBriefcase style={styles.sectionIcon} />
                  Professional Experience
                </h2>

                {(ResumeDetails.experience?.length > 0
                  ? ResumeDetails.experience
                  : DEFAULT_RESUME_DATA.experience
                ).map((exp, idx) => (
                  <div key={`exp-${idx}`} style={styles.experienceItem}>
                    <div style={styles.companyHeader}>
                      <div style={styles.companyName}>{exp.companyName}</div>
                      <div style={styles.dateDuration}>
                        {new Date(exp.startDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}{" "}
                        -
                        {exp.endDate === "Present"
                          ? " Present"
                          : ` ${new Date(exp.endDate).toLocaleDateString(
                              "en-US",
                              { year: "numeric", month: "short" }
                            )}`}
                      </div>
                    </div>

                    <div style={styles.jobSubheader}>
                      <div style={styles.jobTitle}>{exp.jobTitle}</div>
                      <div style={styles.location}>
                        <FaMapMarkerAlt
                          size={12}
                          style={{ marginRight: "4px" }}
                        />
                        {exp.location} {exp.remote ? " (Remote)" : ""} •{" "}
                        {exp.workType}
                      </div>
                    </div>

                    <ul style={styles.jobDescription}>
                      {exp.description
                        .split("\n")
                        .filter((line) => line.trim())
                        .map((line, i) => (
                          <li key={i} style={styles.jobBullet}>
                            <span style={styles.bulletPoint}></span>
                            <span>{line.replace("-", "").trim()}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Education</h2>

              {(ResumeDetails.education?.length > 0
                ? ResumeDetails.education
                : DEFAULT_RESUME_DATA.education
              ).map((edu, idx) => (
                <div key={idx} style={styles.educationItem}>
                  <div style={styles.degreeTitle}>{edu.degree}</div>
                  <div style={styles.institution}>{edu.institution}</div>
                  <div style={styles.educationDetails}>
                    {new Date(edu.educationStartDate).getFullYear()} -{" "}
                    {new Date(edu.educationEndDate).getFullYear()} | GPA:{" "}
                    {edu.gpa}
                  </div>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                <FaLaptopCode style={styles.sectionIcon} />
                Projects
              </h2>

              {(ResumeDetails.projects?.length > 0
                ? ResumeDetails.projects
                : DEFAULT_RESUME_DATA.projects
              ).map((project, idx) => (
                <div key={`proj-${idx}`} style={styles.projectItem}>
                  <div style={styles.projectTitle}>{project.projectTitle}</div>

                  <ul style={styles.projectDescription}>
                    {project.projectDescription
                      .split("\n")
                      .filter((line) => line.trim())
                      .map((line, i) => (
                        <li key={i} style={styles.projectBullet}>
                          <span style={styles.bulletPoint}></span>
                          <span>{line.replace("-", "").trim()}</span>
                        </li>
                      ))}
                  </ul>

                  <div style={styles.technologies}>
                    <span style={styles.techHighlight}>Technologies:</span>{" "}
                    {project.technologies}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills and Certifications */}
          <div style={styles.rightColumn}>
            {/* Technical Skills - Keywords for ATS */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Technical Skills</h2>
              <div style={styles.skillsContainer}>
                {(ResumeDetails.skills?.length > 0
                  ? ResumeDetails.skills
                  : DEFAULT_RESUME_DATA.skills
                ).map((skill, idx) => (
                  <div key={idx} style={styles.skillItem}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                <FaCertificate style={styles.sectionIcon} />
                Certifications
              </h2>

              {(ResumeDetails.certifications?.length > 0
                ? ResumeDetails.certifications
                : DEFAULT_RESUME_DATA.certifications
              ).map((cert, idx) => (
                <div key={idx} style={styles.certItem}>
                  <FaCertificate style={styles.certIcon} />
                  <div style={styles.certText}>{cert}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template16;
