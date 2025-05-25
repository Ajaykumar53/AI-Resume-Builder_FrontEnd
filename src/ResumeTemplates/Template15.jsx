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

// Default resume data
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

function Template15() {
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#000000",
  }; // Default black for max ATS compatibility
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};

  // ATS-Optimized Style Object - Using clean, standard formatting that ATS systems can easily parse
  const styles = {
    // Core container styles
    container: {
      fontFamily: fontName || "'Arial', 'Helvetica', sans-serif", // Standard sans-serif fonts for maximum compatibility
      width: "794px",
      height: "1123px",
      backgroundColor: "#ffffff",
      padding: "30px 40px",
      boxSizing: "border-box",
      color: "#000000", // Black text for maximum contrast and readability
      lineHeight: "1.4",
      position: "relative",
    },

    // Header section
    header: {
      marginBottom: "20px",
      borderBottom: "2px solid #000000",
      paddingBottom: "15px",
    },
    name: {
      fontSize: name || "26px",
      fontWeight: "700",
      marginBottom: "6px",
      color: "#000000",
      textTransform: "uppercase",
    },
    role: {
      fontSize: subheading || "18px",
      fontWeight: "600",
      marginBottom: "12px",
      color: "#000000",
    },
    contactInfo: {
      display: "flex",
      flexWrap: "wrap",
      gap: "15px 30px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      fontSize: body || "12px",
      gap: "6px",
    },

    // Section styling
    section: {
      marginBottom: "22px",
    },
    sectionTitle: {
      fontSize: heading || "16px",
      fontWeight: "700",
      textTransform: "uppercase",
      marginBottom: "12px",
      letterSpacing: "0.5px",
      color: "#000000",
      borderBottom: "1px solid #000000",
      paddingBottom: "4px",
    },

    // Summary styles
    summary: {
      fontSize: body || "13px",
      marginBottom: "15px",
      lineHeight: "1.6",
    },

    // Experience section
    experienceItem: {
      marginBottom: "18px",
    },
    experienceHeader: {
      marginBottom: "8px",
    },
    jobTitle: {
      fontSize: subheading || "15px",
      fontWeight: "700",
      color: "#000000",
    },
    companyInfo: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: body || "13px",
      marginBottom: "6px",
    },
    companyName: {
      fontWeight: "600",
    },
    dateRange: {
      fontWeight: "400",
    },
    location: {
      fontSize: body || "13px",
      marginBottom: "8px",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },

    // List styles for bullet points
    bulletList: {
      paddingLeft: "20px",
      margin: "8px 0",
    },
    bulletItem: {
      fontSize: body || "12px",
      marginBottom: "5px",
      lineHeight: "1.5",
      position: "relative",
      paddingLeft: "5px",
      listStyleType: "disc",
    },

    // Skills section
    skillsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    skillCategory: {
      marginBottom: "10px",
    },
    skillList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      fontSize: body || "13px",
    },

    // Education section
    educationItem: {
      marginBottom: "15px",
    },
    degreeTitle: {
      fontSize: subheading || "14px",
      fontWeight: "600",
    },
    institutionName: {
      fontSize: body || "13px",
      fontWeight: "500",
      marginBottom: "3px",
    },
    educationDetails: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: body || "12px",
    },

    // Certifications section
    certList: {
      paddingLeft: "20px",
      margin: "0",
    },
    certItem: {
      fontSize: body || "13px",
      marginBottom: "6px",
      listStyleType: "disc",
    },

    // Projects section
    projectItem: {
      marginBottom: "15px",
    },
    projectTitle: {
      fontSize: subheading || "14px",
      fontWeight: "600",
      marginBottom: "5px",
    },
    projectTech: {
      fontSize: label || "12px",
      marginTop: "5px",
      fontWeight: "500",
    },
  };

  return (
    <>
      <DownloadController
        resumeRef={resumeRef}
        fileName="ATS_Optimized_Resume.pdf"
      />

      {/* Main Resume Container */}
      <div
        style={styles.container}
        className="template-container scale-50 md:scale-100 transform origin-top-left m-1 md:m-0"
        ref={resumeRef}
        id="resume"
      >
        {/* Header Section with Name, Role and Contact Info */}
        <header style={styles.header}>
          <h1 style={styles.name}>
            {ResumeDetails.personal?.name || DEFAULT_RESUME_DATA.personal.name}
          </h1>
          <div style={styles.role}>
            {ResumeDetails.personal?.jobTitle ||
              DEFAULT_RESUME_DATA.personal.jobTitle}
          </div>
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              <FaPhone size={12} />
              {ResumeDetails.personal?.phone ||
                DEFAULT_RESUME_DATA.personal.phone}
            </div>
            <div style={styles.contactItem}>
              <FaEnvelope size={12} />
              {ResumeDetails.personal?.email ||
                DEFAULT_RESUME_DATA.personal.email}
            </div>
            <div style={styles.contactItem}>
              <FaLinkedin size={12} />
              {ResumeDetails.personal?.linkedin ||
                DEFAULT_RESUME_DATA.personal.linkedin}
            </div>
          </div>
        </header>

        {/* Professional Summary Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Professional Summary</h2>
          <p style={styles.summary}>
            {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
          </p>
        </section>

        {/* Skills Section - ATS-optimized with clear labels */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Technical Skills</h2>
          <div style={styles.skillsContainer}>
            <div style={styles.skillList}>
              {(ResumeDetails.skills?.length > 0
                ? ResumeDetails.skills
                : DEFAULT_RESUME_DATA.skills
              ).map((skill, idx) => (
                <span key={idx} style={{ marginRight: "15px" }}>
                  • {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        {ResumeDetails.experience?.length > 0 && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Professional Experience</h2>

            {(ResumeDetails.experience?.length > 0
              ? ResumeDetails.experience
              : DEFAULT_RESUME_DATA.experience
            ).map((exp, idx) => (
              <div key={`exp-${idx}`} style={styles.experienceItem}>
                <div style={styles.experienceHeader}>
                  <div style={styles.jobTitle}>{exp.jobTitle}</div>
                  <div style={styles.companyInfo}>
                    <span style={styles.companyName}>{exp.companyName}</span>
                    <span style={styles.dateRange}>
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
                    </span>
                  </div>
                  <div style={styles.location}>
                    <FaMapMarkerAlt size={10} />
                    <span>
                      {exp.location} {exp.remote ? " (Remote)" : ""} •{" "}
                      {exp.workType}
                    </span>
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

        {/* Projects Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Projects</h2>

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
              <div style={styles.projectTech}>
                <strong>Technologies:</strong> {project.technologies}
              </div>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Education</h2>

          {(ResumeDetails.education?.length > 0
            ? ResumeDetails.education
            : DEFAULT_RESUME_DATA.education
          ).map((edu, idx) => (
            <div key={idx} style={styles.educationItem}>
              <div style={styles.degreeTitle}>{edu.degree}</div>
              <div style={styles.institutionName}>{edu.institution}</div>
              <div style={styles.educationDetails}>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <FaCalendarAlt size={10} style={{ marginRight: "5px" }} />
                  {new Date(edu.educationStartDate).toLocaleDateString(
                    "en-US",
                    { year: "numeric", month: "short" }
                  )}{" "}
                  -
                  {new Date(edu.educationEndDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
                </span>
                <span>GPA: {edu.gpa}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Certifications Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Certifications</h2>

          <ul style={styles.certList}>
            {(ResumeDetails.certifications?.length > 0
              ? ResumeDetails.certifications
              : DEFAULT_RESUME_DATA.certifications
            ).map((cert, idx) => (
              <li key={idx} style={styles.certItem}>
                {cert}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default Template15;
