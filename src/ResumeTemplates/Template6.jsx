import React, { useRef } from "react";
import { useSelector } from "react-redux";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";
import DownloadController from "../Resume/DownloadController";

// Default resume data - maintained from original
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

function Template6() {
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#2d3748",
  }; // Professional dark gray default
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};

  // ATS-Friendly Styles - clean, professional, and highly parsable
  const styles = {
    container: {
      fontFamily: fontName || "'Arial', 'Helvetica', sans-serif", // Standard, ATS-friendly font
      width: "794px",
      height: "1123px",
      backgroundColor: "#ffffff",
      padding: "40px 50px",
      boxSizing: "border-box",
      color: "#1a202c",
      lineHeight: 1.5,
    },
    header: {
      marginBottom: "25px",
    },
    name: {
      fontSize: name || "26px",
      fontWeight: "700",
      color: "#000000", // Black for maximum contrast and ATS readability
      marginBottom: "8px",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    headerSubline: {
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "2px solid #000000", // Clear section divider
      paddingBottom: "12px",
    },
    role: {
      fontSize: subheading || "16px",
      fontWeight: "600",
      color: theme.primaryColor,
    },
    contactContainer: {
      display: "flex",
      gap: "25px",
      marginTop: "15px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      fontSize: body || "12px",
      gap: "6px",
      color: "#4a5568",
    },
    contactIcon: {
      color: theme.primaryColor,
      fontSize: "14px",
    },
    section: {
      marginBottom: "20px",
    },
    sectionHeading: {
      fontSize: heading || "16px",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "1px",
      backgroundColor: "#f7f7f7", // Light gray background for section headings
      padding: "8px 12px",
      marginBottom: "15px",
      borderLeft: `4px solid ${theme.primaryColor}`,
      color: "#000000", // Black for clarity and ATS readability
    },
    summary: {
      fontSize: body || "13px",
      marginBottom: "20px",
      lineHeight: 1.6,
      color: "#2d3748",
    },
    experienceItem: {
      marginBottom: "20px",
      paddingBottom: "15px",
      borderBottom: "1px solid #e2e8f0", // Light divider between items
    },
    experienceHeader: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "8px",
    },
    companyTitle: {
      fontSize: subheading || "14px",
      fontWeight: "700",
      color: "#000000", // Black for maximum ATS readability
    },
    jobTitle: {
      fontSize: body || "14px",
      fontWeight: "600",
      color: "#2d3748", // Dark gray for readability
      marginBottom: "5px",
    },
    dateLocation: {
      fontSize: label || "12px",
      color: "#4a5568",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    bulletList: {
      margin: "10px 0 0 0",
      paddingLeft: "20px",
      listStyleType: "disc", // Standard bullets for ATS compatibility
    },
    bulletItem: {
      fontSize: body || "13px",
      marginBottom: "5px",
      lineHeight: 1.5,
      color: "#2d3748",
    },
    skillsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "15px",
      marginBottom: "15px",
    },
    skillCategory: {
      marginBottom: "10px",
    },
    skillCategoryTitle: {
      fontSize: subheading || "14px",
      fontWeight: "600",
      marginBottom: "5px",
      color: "#000000",
    },
    skillsList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "5px 15px",
    },
    skillItem: {
      fontSize: body || "13px",
      color: "#2d3748",
      position: "relative",
      paddingLeft: "12px",
    },
    skillBullet: {
      position: "absolute",
      left: "0",
      top: "7px",
      width: "5px",
      height: "5px",
      backgroundColor: theme.primaryColor,
      borderRadius: "50%",
    },
    twoColumnGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: "30px",
    },
    educationItem: {
      marginBottom: "15px",
    },
    institutionName: {
      fontSize: subheading || "14px",
      fontWeight: "600",
      color: "#000000",
      marginBottom: "3px",
    },
    degree: {
      fontSize: body || "13px",
      fontWeight: "400",
      color: "#2d3748",
      marginBottom: "2px",
    },
    educationDetails: {
      fontSize: label || "12px",
      color: "#4a5568",
      display: "flex",
      justifyContent: "space-between",
    },
    projectItem: {
      marginBottom: "15px",
    },
    projectTitle: {
      fontSize: body || "14px",
      fontWeight: "600",
      color: "#000000",
      marginBottom: "5px",
    },
    techStack: {
      fontSize: label || "12px",
      color: "#4a5568",
      marginTop: "5px",
      fontStyle: "italic",
    },
    certificationList: {
      margin: "0",
      paddingLeft: "20px",
      listStyleType: "disc",
    },
    certItem: {
      fontSize: body || "13px",
      marginBottom: "5px",
      color: "#2d3748",
    },
    // Utility classes
    bold: {
      fontWeight: "600",
    },
    uppercase: {
      textTransform: "uppercase",
    },
    row: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    divider: {
      height: "1px",
      width: "100%",
      backgroundColor: "#e2e8f0",
      margin: "15px 0",
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
        {/* Header - Name and Contact Info */}
        <div style={styles.header}>
          <h1 style={styles.name}>
            {ResumeDetails.personal?.name || DEFAULT_RESUME_DATA.personal.name}
          </h1>
          <div style={styles.headerSubline}>
            <div style={styles.role}>
              {ResumeDetails.personal?.jobTitle ||
                DEFAULT_RESUME_DATA.personal.jobTitle}
            </div>
          </div>

          <div style={styles.contactContainer}>
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
        </div>

        {/* Professional Summary */}
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>Professional Summary</h2>
          <p style={styles.summary}>
            {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
          </p>
        </div>

        {/* Technical Skills - ATS-optimized keyword section */}
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>Technical Skills</h2>

          <div style={styles.skillsContainer}>
            {/* Group skills by categories for better ATS parsing */}
            <div style={styles.skillCategory}>
              <div style={styles.skillsList}>
                {(ResumeDetails.skills?.length > 0
                  ? ResumeDetails.skills
                  : DEFAULT_RESUME_DATA.skills
                ).map((skill, idx) => (
                  <div key={idx} style={styles.skillItem}>
                    <span style={styles.skillBullet}></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        {ResumeDetails.experience?.length > 0 && (
          <div style={styles.section}>
            <h2 style={styles.sectionHeading}>Professional Experience</h2>

            {(ResumeDetails.experience?.length > 0
              ? ResumeDetails.experience
              : DEFAULT_RESUME_DATA.experience
            ).map((exp, idx) => (
              <div key={`exp-${idx}`} style={styles.experienceItem}>
                <div style={styles.experienceHeader}>
                  <div>
                    <div style={styles.companyTitle}>{exp.companyName}</div>
                    <div style={styles.jobTitle}>{exp.jobTitle}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={styles.dateLocation}>
                      <FaRegCalendarAlt size={12} />
                      <span>
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
                      </span>
                    </div>
                    <div style={styles.dateLocation}>
                      <FaMapMarkerAlt size={12} />
                      <span>
                        {exp.location} {exp.remote ? " (Remote)" : ""}
                      </span>
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
          </div>
        )}
        {/* Projects Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>Projects</h2>

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
                    <li key={i} style={styles.bulletItem}>
                      {line.replace("-", "").trim()}
                    </li>
                  ))}
              </ul>
              <div style={styles.techStack}>
                <span style={styles.bold}>Technologies:</span>{" "}
                {project.technologies}
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout for Education and Certifications */}
        <div style={styles.twoColumnGrid}>
          {/* Education */}
          <div style={styles.section}>
            <h2 style={styles.sectionHeading}>Education</h2>

            {(ResumeDetails.education?.length > 0
              ? ResumeDetails.education
              : DEFAULT_RESUME_DATA.education
            ).map((edu, idx) => (
              <div key={idx} style={styles.educationItem}>
                <div style={styles.institutionName}>{edu.institution}</div>
                <div style={styles.degree}>{edu.degree}</div>
                <div style={styles.educationDetails}>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <FaRegCalendarAlt
                      size={10}
                      style={{ marginRight: "4px" }}
                    />
                    {new Date(edu.educationStartDate).getFullYear()} -{" "}
                    {new Date(edu.educationEndDate).getFullYear()}
                  </span>
                  <span>GPA: {edu.gpa}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div style={styles.section}>
            <h2 style={styles.sectionHeading}>Certifications</h2>

            <ul style={styles.certificationList}>
              {(ResumeDetails.certifications?.length > 0
                ? ResumeDetails.certifications
                : DEFAULT_RESUME_DATA.certifications
              ).map((cert, idx) => (
                <li key={idx} style={styles.certItem}>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template6;
