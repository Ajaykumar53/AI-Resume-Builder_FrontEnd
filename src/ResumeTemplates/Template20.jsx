import React, { useRef } from "react";
import { useSelector } from "react-redux";
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
        "Led development of microservices architecture\n- Optimized API performance by 40%\n- Mentored junior developers",
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

function Template20() {
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#0d4f8c",
  }; // Professional blue
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};

  // Premium ATS-Friendly Styles
  const styles = {
    // Container & Top-level Structure
    container: {
      fontFamily: fontName || "'Arial', 'Helvetica', sans-serif", // ATS-friendly fonts
      width: "794px",
      height: "1123px",
      backgroundColor: "#ffffff",
      padding: "40px 50px",
      boxSizing: "border-box",
      color: "#2d3748", // Professional dark gray for text
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },

    // Header Styles
    header: {
      marginBottom: "25px",
      borderBottom: `2px solid ${theme.primaryColor}`,
      paddingBottom: "20px",
    },
    headerTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: "15px",
    },
    nameTitle: {
      flex: "1",
    },
    contactInfo: {
      flex: "1",
      textAlign: "right",
    },
    name: {
      fontSize: name || "28px",
      fontWeight: "700",
      color: "#1a202c", // Almost black for name
      margin: "0 0 4px 0",
      letterSpacing: "0.5px",
    },
    role: {
      fontSize: subheading || "16px",
      fontWeight: "600",
      color: theme.primaryColor,
      marginBottom: "4px",
    },
    contactItem: {
      fontSize: body || "12px",
      marginBottom: "5px",
      color: "#4a5568",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "8px",
    },
    contactLabel: {
      fontWeight: "600",
      color: "#2d3748",
    },

    // Summary Section
    summarySection: {
      marginBottom: "25px",
    },
    summary: {
      fontSize: body || "13px",
      lineHeight: "1.6",
      color: "#4a5568",
      margin: "0",
      textAlign: "justify",
    },

    // Sections
    section: {
      marginBottom: "25px",
    },
    sectionTitle: {
      fontSize: heading || "16px",
      fontWeight: "700",
      color: theme.primaryColor,
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginBottom: "12px",
      paddingBottom: "6px",
      borderBottom: `1px solid #e2e8f0`,
      position: "relative",
    },
    sectionTitleBar: {
      position: "absolute",
      bottom: "-1px",
      left: "0",
      width: "60px",
      height: "3px",
      backgroundColor: theme.primaryColor,
    },

    // Experience Items
    experienceItem: {
      marginBottom: "18px",
      pageBreakInside: "avoid", // Helps with PDF rendering
    },
    experienceHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "8px",
    },
    companyPosition: {
      flex: "3",
    },
    dateDuration: {
      flex: "1",
      textAlign: "right",
    },
    companyName: {
      fontSize: subheading || "15px",
      fontWeight: "700",
      color: "#2d3748",
      marginBottom: "2px",
    },
    jobTitle: {
      fontSize: body || "14px",
      fontWeight: "600",
      color: theme.primaryColor,
      marginBottom: "2px",
    },
    location: {
      fontSize: label || "12px",
      color: "#718096",
    },
    duration: {
      fontSize: label || "12px",
      fontWeight: "600",
      color: "#718096",
    },
    workType: {
      fontSize: label || "11px",
      backgroundColor: `${theme.primaryColor}10`,
      color: theme.primaryColor,
      padding: "2px 6px",
      borderRadius: "4px",
      display: "inline-block",
      marginTop: "3px",
    },
    descriptionList: {
      margin: "8px 0 0 0",
      paddingLeft: "20px",
    },
    descriptionItem: {
      fontSize: body || "13px",
      color: "#4a5568",
      marginBottom: "4px",
      position: "relative",
      lineHeight: "1.5",
    },

    // Skills Section
    skillsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "15px",
      alignItems: "center",
      marginTop: "10px",
    },
    skillPill: {
      padding: "6px 12px",
      backgroundColor: "#f7fafc",
      border: `1px solid ${theme.primaryColor}40`,
      borderRadius: "4px",
      fontSize: label || "12px",
      color: "#4a5568",
      fontWeight: "500",
    },

    // Education Section
    educationItem: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "15px",
    },
    educationMain: {
      flex: "3",
    },
    educationDate: {
      flex: "1",
      textAlign: "right",
    },
    institution: {
      fontSize: subheading || "15px",
      fontWeight: "600",
      color: "#2d3748",
      marginBottom: "2px",
    },
    degree: {
      fontSize: body || "14px",
      fontWeight: "500",
      color: theme.primaryColor,
      marginBottom: "2px",
    },
    gpa: {
      fontSize: label || "12px",
      color: "#718096",
    },
    educationDuration: {
      fontSize: label || "12px",
      fontWeight: "600",
      color: "#718096",
    },

    // Projects Section
    projectsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    projectItem: {
      padding: "15px",
      backgroundColor: "#f8fafc",
      border: `1px solid #e2e8f0`,
      borderLeft: `3px solid ${theme.primaryColor}`,
      borderRadius: "4px",
    },
    projectHeader: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
    },
    projectTitle: {
      fontSize: subheading || "15px",
      fontWeight: "600",
      color: "#2d3748",
    },
    techStack: {
      fontSize: label || "12px",
      color: theme.primaryColor,
      fontWeight: "500",
    },

    // Certifications Section
    certificationsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    },
    certificationItem: {
      fontSize: body || "13px",
      color: "#4a5568",
      padding: "6px 12px",
      backgroundColor: "#f7fafc",
      borderRadius: "4px",
      border: `1px solid #e2e8f0`,
    },

    // Horizontal divider
    divider: {
      height: "1px",
      backgroundColor: "#e2e8f0",
      margin: "20px 0",
    },

    // Two-column layout
    twoColumnSection: {
      display: "flex",
      gap: "30px",
    },
    column: {
      flex: "1",
    },

    // Footer
    footer: {
      marginTop: "auto", // Pushes to bottom
      fontSize: label || "10px",
      color: "#a0aec0",
      textAlign: "center",
      borderTop: "1px solid #e2e8f0",
      paddingTop: "10px",
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

  // Format date to proper ATS-friendly format
  const formatDate = (dateString) => {
    if (dateString === "Present") return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
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
        {/* Header Section */}
        <div style={styles.header}>
          <div style={styles.headerTop}>
            <div style={styles.nameTitle}>
              <h1 style={styles.name}>
                {ResumeDetails.personal?.name ||
                  DEFAULT_RESUME_DATA.personal.name}
              </h1>
              <div style={styles.role}>
                {ResumeDetails.personal?.jobTitle ||
                  DEFAULT_RESUME_DATA.personal.jobTitle}
              </div>
            </div>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <span style={styles.contactLabel}>Phone:</span>
                <span>
                  {ResumeDetails.personal?.phone ||
                    DEFAULT_RESUME_DATA.personal.phone}
                </span>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactLabel}>Email:</span>
                <span>
                  {ResumeDetails.personal?.email ||
                    DEFAULT_RESUME_DATA.personal.email}
                </span>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactLabel}>LinkedIn:</span>
                <span>
                  {ResumeDetails.personal?.linkedin ||
                    DEFAULT_RESUME_DATA.personal.linkedin}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div style={styles.summarySection}>
          <h2 style={styles.sectionTitle}>
            Professional Summary
            <div style={styles.sectionTitleBar}></div>
          </h2>
          <p style={styles.summary}>
            {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
          </p>
        </div>

        {/* Core Skills Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Core Skills & Technologies
            <div style={styles.sectionTitleBar}></div>
          </h2>
          <div style={styles.skillsContainer}>
            {(ResumeDetails.skills?.length > 0
              ? ResumeDetails.skills
              : DEFAULT_RESUME_DATA.skills
            ).map((skill, idx) => (
              <div key={idx} style={styles.skillPill}>
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        {ResumeDetails.experience?.length > 0 && (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              Professional Experience
              <div style={styles.sectionTitleBar}></div>
            </h2>

            {(ResumeDetails.experience?.length > 0
              ? ResumeDetails.experience
              : DEFAULT_RESUME_DATA.experience
            ).map((exp, idx) => (
              <div key={`exp-${idx}`} style={styles.experienceItem}>
                <div style={styles.experienceHeader}>
                  <div style={styles.companyPosition}>
                    <div style={styles.companyName}>{exp.companyName}</div>
                    <div style={styles.jobTitle}>{exp.jobTitle}</div>
                    <div style={styles.location}>
                      {exp.location} {exp.remote ? " (Remote)" : ""}
                    </div>
                    <div style={styles.workType}>{exp.workType}</div>
                  </div>
                  <div style={styles.dateDuration}>
                    <div style={styles.duration}>
                      {formatDate(exp.startDate)} -{" "}
                      {exp.endDate === "Present"
                        ? "Present"
                        : formatDate(exp.endDate)}
                    </div>
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
          </div>
        )}

        {/* Two-column layout for Education and Certifications */}
        <div style={styles.twoColumnSection}>
          {/* Education Column */}
          <div style={styles.column}>
            <h2 style={styles.sectionTitle}>
              Education
              <div style={styles.sectionTitleBar}></div>
            </h2>

            {(ResumeDetails.education?.length > 0
              ? ResumeDetails.education
              : DEFAULT_RESUME_DATA.education
            ).map((edu, idx) => (
              <div key={idx} style={styles.educationItem}>
                <div style={styles.educationMain}>
                  <div style={styles.institution}>{edu.institution}</div>
                  <div style={styles.degree}>{edu.degree}</div>
                  <div style={styles.gpa}>GPA: {edu.gpa}</div>
                </div>
                <div style={styles.educationDate}>
                  <div style={styles.educationDuration}>
                    {new Date(edu.educationStartDate).getFullYear()} -{" "}
                    {new Date(edu.educationEndDate).getFullYear()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div style={styles.column}>
            <h2 style={styles.sectionTitle}>
              Certifications
              <div style={styles.sectionTitleBar}></div>
            </h2>

            <div style={styles.certificationsContainer}>
              {(ResumeDetails.certifications?.length > 0
                ? ResumeDetails.certifications
                : DEFAULT_RESUME_DATA.certifications
              ).map((cert, idx) => (
                <div key={idx} style={styles.certificationItem}>
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Key Projects
            <div style={styles.sectionTitleBar}></div>
          </h2>

          <div style={styles.projectsContainer}>
            {(ResumeDetails.projects?.length > 0
              ? ResumeDetails.projects
              : DEFAULT_RESUME_DATA.projects
            ).map((project, idx) => (
              <div key={`proj-${idx}`} style={styles.projectItem}>
                <div style={styles.projectHeader}>
                  <div style={styles.projectTitle}>{project.projectTitle}</div>
                  <div style={styles.techStack}>{project.technologies}</div>
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
        </div>
      </div>
    </>
  );
}

export default Template20;
