import React, { useRef } from "react";
import { useSelector } from "react-redux";
import DownloadController from "../Resume/DownloadController";

// Default resume data - maintained for compatibility
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

// Format date function for consistent date display
const formatDate = (dateString) => {
  if (dateString === "Present") return "Present";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

// Clean description text function to handle bullet points consistently
const cleanDescription = (text) => {
  return text.replace(/^-\s*/gm, "").trim();
};

function Template17() {
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#0F52BA",
  }; // Professional blue as default
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};

  // Access data with fallbacks to default
  const personalData = ResumeDetails.personal || DEFAULT_RESUME_DATA.personal;
  const experienceData =
    ResumeDetails.experience?.length > 0
      ? ResumeDetails.experience
      : DEFAULT_RESUME_DATA.experience;
  const educationData =
    ResumeDetails.education?.length > 0
      ? ResumeDetails.education
      : DEFAULT_RESUME_DATA.education;
  const skillsData =
    ResumeDetails.skills?.length > 0
      ? ResumeDetails.skills
      : DEFAULT_RESUME_DATA.skills;
  const certificationsData =
    ResumeDetails.certifications?.length > 0
      ? ResumeDetails.certifications
      : DEFAULT_RESUME_DATA.certifications;
  const projectsData =
    ResumeDetails.projects?.length > 0
      ? ResumeDetails.projects
      : DEFAULT_RESUME_DATA.projects;
  const summaryText = ResumeDetails.summary || DEFAULT_RESUME_DATA.summary;

  // Premium ATS-Optimized Resume Styles
  const styles = {
    // Main container
    container: {
      fontFamily: fontName || "'Arial', 'Helvetica', sans-serif", // Highly ATS-friendly fonts
      width: "794px", // A4 width in pixels
      height: "1123px", // A4 height in pixels
      backgroundColor: "#ffffff",
      color: "#2D3748", // Dark gray for readability
      boxSizing: "border-box",
      boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
      padding: "40px 50px", // Adequate margins for printability
    },

    // Header section
    header: {
      marginBottom: "20px",
    },
    name: {
      fontSize: name || "28px",
      fontWeight: "700",
      color: "#000000", // Black for prominence
      margin: "0 0 4px 0",
      letterSpacing: "-0.2px",
    },
    jobTitle: {
      fontSize: subheading || "18px",
      fontWeight: "600",
      color: theme.primaryColor,
      marginBottom: "12px",
    },
    contactInfo: {
      display: "flex",
      flexWrap: "wrap",
      gap: "15px",
      fontSize: body || "12px",
    },
    contactItem: {
      marginRight: "20px",
      color: "#4A5568",
    },
    contactValue: {
      fontWeight: "500",
    },

    // Section styling
    section: {
      marginBottom: "20px",
    },
    sectionTitle: {
      fontSize: heading || "16px",
      fontWeight: "700",
      color: "#000000", // Black for prominence
      marginBottom: "12px",
      paddingBottom: "5px",
      borderBottom: `2px solid ${theme.primaryColor}`,
      textTransform: "uppercase",
      letterSpacing: "1px",
    },

    // Summary section
    summary: {
      fontSize: body || "14px",
      lineHeight: "1.5",
      marginBottom: "20px",
    },

    // Experience section
    experienceItem: {
      marginBottom: "20px",
      paddingBottom: "15px",
      borderBottom: "1px solid #EDF2F7",
    },
    experienceHeader: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "5px",
    },
    jobTitleStyle: {
      fontSize: subheading || "16px",
      fontWeight: "700",
      color: "#000000",
    },
    companyName: {
      fontSize: body || "14px",
      fontWeight: "600",
      color: "#4A5568",
    },
    dateRange: {
      fontSize: label || "14px",
      color: "#4A5568",
      fontWeight: "500",
      textAlign: "right",
    },
    locationWork: {
      fontSize: label || "14px",
      color: "#718096",
      marginBottom: "8px",
    },
    bullet: {
      marginLeft: "16px",
      marginBottom: "5px",
      fontSize: body || "14px",
      lineHeight: "1.5",
      position: "relative",
      paddingLeft: "10px",
    },
    bulletPoint: {
      position: "absolute",
      left: "-8px",
      top: "8px",
      width: "4px",
      height: "4px",
      backgroundColor: "#718096",
      borderRadius: "50%",
    },

    // Skills section
    skillsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    },
    skillItem: {
      fontSize: body || "14px",
      padding: "6px 12px",
      backgroundColor: `${theme.primaryColor}10`,
      borderRadius: "4px",
      fontWeight: "500",
      color: "#4A5568",
    },

    // Education section
    educationItem: {
      marginBottom: "16px",
    },
    institutionName: {
      fontSize: subheading || "16px",
      fontWeight: "600",
      color: "#000000",
    },
    degreeInfo: {
      fontSize: body || "14px",
      color: "#4A5568",
      fontWeight: "500",
      marginTop: "4px",
    },
    educationDates: {
      fontSize: label || "14px",
      color: "#718096",
      marginTop: "4px",
    },
    gpaInfo: {
      fontSize: label || "14px",
      color: "#718096",
      marginTop: "4px",
    },

    // Certifications section
    certificationList: {
      margin: "0",
      paddingLeft: "20px",
    },
    certificationItem: {
      fontSize: body || "14px",
      marginBottom: "6px",
      color: "#4A5568",
    },

    // Projects section
    projectItem: {
      marginBottom: "16px",
      paddingBottom: "16px",
      borderBottom: "1px solid #EDF2F7",
    },
    projectTitle: {
      fontSize: subheading || "16px",
      fontWeight: "600",
      color: "#000000",
      marginBottom: "6px",
    },
    technologies: {
      fontSize: label || "14px",
      color: "#718096",
      fontStyle: "italic",
      marginBottom: "8px",
    },

    // Two-column layout
    twoColumnLayout: {
      display: "flex",
      gap: "30px",
    },
    mainColumn: {
      flex: "2",
    },
    sideColumn: {
      flex: "1",
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

      {/* Resume Container - ATS Optimized */}
      <div
        style={styles.container}
        className="template-container resume-wrapper hide-scrollbar  scale-50 md:scale-100 transform origin-top-left md:m-0 m-1"
        ref={resumeRef}
        id="resume"
      >
        {/* Header with Name and Contact - ATS Header Best Practices */}

        <header style={styles.header}>
          <h1 style={styles.name}>
            {" "}
            {ResumeDetails.personal?.name || DEFAULT_RESUME_DATA.personal.name}
          </h1>
          <div style={styles.jobTitle}>
            {ResumeDetails.personal?.jobTitle ||
              DEFAULT_RESUME_DATA.personal.jobTitle}
          </div>

          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              <span style={styles.contactValue}>
                {ResumeDetails.personal?.phone ||
                  DEFAULT_RESUME_DATA.personal.phone}
              </span>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactValue}>
                {" "}
                {ResumeDetails.personal?.email ||
                  DEFAULT_RESUME_DATA.personal.email}
              </span>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactValue}>
                {" "}
                {ResumeDetails.personal?.linkedin ||
                  DEFAULT_RESUME_DATA.personal.linkedin}
              </span>
            </div>
          </div>
        </header>

        {/* Professional Summary - ATS Optimized Keywords */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Professional Summary</h2>
          <p style={styles.summary}>{summaryText}</p>
        </section>

        {/* Two-Column Layout for better organization */}
        <div style={styles.twoColumnLayout}>
          {/* Main Column: Work Experience and Projects */}
          <div style={styles.mainColumn}>
            {/* Work Experience - Chronological for ATS */}
            {ResumeDetails.experience?.length > 0 && (
              <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Professional Experience</h2>

                {experienceData.map((exp, idx) => (
                  <div key={`exp-${idx}`} style={styles.experienceItem}>
                    <div style={styles.experienceHeader}>
                      <div>
                        <div style={styles.jobTitleStyle}>{exp.jobTitle}</div>
                        <div style={styles.companyName}>{exp.companyName}</div>
                      </div>
                      <div style={styles.dateRange}>
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </div>
                    </div>

                    <div style={styles.locationWork}>
                      {exp.location} {exp.remote ? "(Remote)" : ""} |{" "}
                      {exp.workType}
                    </div>

                    <div>
                      {exp.description
                        .split("\n")
                        .filter((line) => line.trim())
                        .map((line, i) => (
                          <div key={i} style={styles.bullet}>
                            <span style={styles.bulletPoint}></span>
                            {cleanDescription(line)}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </section>
            )}
            {/* Projects Section */}
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Key Projects</h2>

              {projectsData.map((project, idx) => (
                <div key={`proj-${idx}`} style={styles.projectItem}>
                  <div style={styles.projectTitle}>{project.projectTitle}</div>
                  <div style={styles.technologies}>
                    <strong>Technologies:</strong> {project.technologies}
                  </div>

                  <div>
                    {project.projectDescription
                      .split("\n")
                      .filter((line) => line.trim())
                      .map((line, i) => (
                        <div key={i} style={styles.bullet}>
                          <span style={styles.bulletPoint}></span>
                          {cleanDescription(line)}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* Side Column: Skills, Education, Certifications */}
          <div style={styles.sideColumn}>
            {/* Skills Section - ATS Keyword Optimization */}
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Technical Skills</h2>
              <div style={styles.skillsContainer}>
                {skillsData.map((skill, idx) => (
                  <div key={idx} style={styles.skillItem}>
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Education</h2>

              {educationData.map((edu, idx) => (
                <div key={idx} style={styles.educationItem}>
                  <div style={styles.institutionName}>{edu.institution}</div>
                  <div style={styles.degreeInfo}>{edu.degree}</div>
                  <div style={styles.educationDates}>
                    {formatDate(edu.educationStartDate)} -{" "}
                    {formatDate(edu.educationEndDate)}
                  </div>
                  <div style={styles.gpaInfo}>GPA: {edu.gpa}</div>
                </div>
              ))}
            </section>

            {/* Certifications Section */}
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Certifications</h2>

              <ul style={styles.bulletList}>
                {certificationsData.map((cert, idx) => (
                  <li key={idx} style={styles.description}>
                    {cert}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template17;
