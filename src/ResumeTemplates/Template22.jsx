import React, { useRef } from "react";
import { useSelector } from "react-redux";
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

function Template22() {
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#2d3748",
  }; // Professional dark gray as default
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};

  // Format date function
  const formatDate = (dateString) => {
    if (dateString === "Present") return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  // ATS-Optimized Styles
  const styles = {
    container: {
      fontFamily: fontName || "'Arial', 'Helvetica', sans-serif", // Standard ATS-friendly fonts
      width: "794px",
      height: "1123px",
      backgroundColor: "#ffffff",
      padding: "0.75in 0.75in", // Standard margins for printing
      boxSizing: "border-box",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      color: "#2d3748", // Dark gray for main text - good for ATS readability
      lineHeight: "1.4",
    },
    header: {
      marginBottom: "20px",
    },
    name: {
      fontSize: name || "24px",
      fontWeight: "700",
      color: "#000000", // Black for name - maximum contrast for ATS scanning
      marginBottom: "5px",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    contactRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      fontSize: body || "12px",
      color: "#4a5568",
      marginTop: "12px",
    },
    contactItem: {
      marginRight: "15px",
      marginBottom: "5px",
    },
    jobTitle: {
      fontSize: subheading || "16px",
      fontWeight: "600",
      color: "#000000", // Black for titles - good for ATS identification
      marginBottom: "8px",
    },
    section: {
      marginBottom: "18px",
    },
    sectionTitle: {
      fontSize: heading || "16px",
      fontWeight: "700",
      color: "#000000", // Black for section titles - ensures ATS recognition
      marginBottom: "10px",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      borderBottom: `2px solid ${theme.primaryColor}`,
      paddingBottom: "4px",
    },
    summary: {
      fontSize: body || "12px",
      lineHeight: "1.6",
      color: "#2d3748",
      marginBottom: "15px",
    },
    experienceItem: {
      marginBottom: "15px",
    },
    experienceHeader: {
      marginBottom: "6px",
    },
    experiencePosition: {
      fontSize: subheading || "14px",
      fontWeight: "700",
      color: "#000000", // Black for position titles - ensures ATS detection
    },
    companyDetails: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: body || "12px",
      fontWeight: "600",
      marginBottom: "4px",
    },
    location: {
      fontSize: body || "12px",
      color: "#4a5568",
      marginBottom: "6px",
    },
    listItem: {
      marginBottom: "4px",
    },
    educationItem: {
      marginBottom: "15px",
    },
    institution: {
      fontSize: body || "14px",
      fontWeight: "700",
      color: "#000000", // Black for institution names - good for ATS
    },
    degree: {
      fontSize: body || "13px",
      fontWeight: "600",
      color: "#2d3748",
    },
    educationDuration: {
      fontSize: label || "12px",
      color: "#4a5568",
    },
    skillsContainer: {
      marginBottom: "15px",
    },
    skillGroup: {
      marginBottom: "6px",
    },
    skillsList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    },
    skill: {
      fontSize: body || "12px",
      color: "#2d3748",
    },
    projectItem: {
      marginBottom: "15px",
      borderLeft: `3px solid ${theme.primaryColor}20`,
      paddingLeft: "10px",
    },
    projectTitle: {
      fontSize: body || "14px",
      fontWeight: "700",
      color: "#000000", // Black for project titles - ensures ATS recognition
      marginBottom: "4px",
    },
    divider: {
      height: "1px",
      backgroundColor: "#e2e8f0",
      margin: "15px 0",
    },
    inlineList: {
      display: "inline",
      marginRight: "3px",
    },
    columnLayout: {
      display: "flex",
      gap: "20px",
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

      {/* Resume Container */}
      <div
        style={styles.container}
        className="template-container scale-50 md:scale-100 transform origin-top-left m-1 md:m-0"
        ref={resumeRef}
        id="resume"
      >
        {/* Header with Name and Contact Info */}
        <div style={styles.header}>
          <h1 style={styles.name}>
            {ResumeDetails.personal?.name || DEFAULT_RESUME_DATA.personal.name}
          </h1>
          <div style={styles.jobTitle}>
            {ResumeDetails.personal?.jobTitle ||
              DEFAULT_RESUME_DATA.personal.jobTitle}
          </div>
          <div style={styles.contactRow}>
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
        </div>

        {/* Professional Summary */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Professional Summary</div>
          <p style={styles.summary}>
            {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
          </p>
        </div>

        {/* Work Experience */}
        {ResumeDetails.experience?.length > 0 && (
          <div style={styles.section}>
            <div style={styles.sectionTitle}>Professional Experience</div>
            {(ResumeDetails.experience?.length > 0
              ? ResumeDetails.experience
              : DEFAULT_RESUME_DATA.experience
            ).map((exp, idx) => (
              <div key={`exp-${idx}`} style={styles.experienceItem}>
                <div style={styles.experienceHeader}>
                  <div style={styles.experiencePosition}>{exp.jobTitle}</div>
                  <div style={styles.companyDetails}>
                    <div>{exp.companyName}</div>
                    <div>
                      {formatDate(exp.startDate)} -{" "}
                      {exp.endDate === "Present"
                        ? "Present"
                        : formatDate(exp.endDate)}
                    </div>
                  </div>
                  <div style={styles.location}>
                    {exp.location} {exp.remote ? " (Remote)" : ""} |{" "}
                    {exp.workType}
                  </div>
                </div>
                <p style={styles.description}>
                  {exp.description.split("\n")[0]}
                </p>
                <ul style={styles.bulletList}>
                  {exp.description
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
        )}

        {/* Skills and Education in 2 columns */}
        <div style={styles.columnLayout}>
          {/* Left Column - Skills */}
          <div style={styles.column}>
            <div style={styles.section}>
              <div style={styles.sectionTitle}>Technical Skills</div>
              <div style={styles.skillsContainer}>
                {/* Display skills in focused, ATS-optimized format */}
                <div style={styles.skillsList}>
                  {(ResumeDetails.skills?.length > 0
                    ? ResumeDetails.skills
                    : DEFAULT_RESUME_DATA.skills
                  ).map((skill, idx, arr) => (
                    <div key={idx} style={styles.skill}>
                      {skill}
                      {idx < arr.length - 1 ? " • " : ""}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div style={styles.section}>
              <div style={styles.sectionTitle}>Certifications</div>
              <ul style={styles.description}>
                {(ResumeDetails.certifications?.length > 0
                  ? ResumeDetails.certifications
                  : DEFAULT_RESUME_DATA.certifications
                ).map((cert, idx) => (
                  <li key={idx} style={styles.listItem}>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Education */}
          <div style={styles.column}>
            <div style={styles.section}>
              <div style={styles.sectionTitle}>Education</div>
              {(ResumeDetails.education?.length > 0
                ? ResumeDetails.education
                : DEFAULT_RESUME_DATA.education
              ).map((edu, idx) => (
                <div key={idx} style={styles.educationItem}>
                  <div style={styles.institution}>{edu.institution}</div>
                  <div style={styles.degree}>{edu.degree}</div>
                  <div style={styles.educationDuration}>
                    {new Date(edu.educationStartDate).getFullYear()} -{" "}
                    {new Date(edu.educationEndDate).getFullYear()} | GPA:{" "}
                    {edu.gpa}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Projects</div>
          {(ResumeDetails.projects?.length > 0
            ? ResumeDetails.projects
            : DEFAULT_RESUME_DATA.projects
          ).map((project, idx) => (
            <div key={`proj-${idx}`} style={styles.projectItem}>
              <div style={styles.projectTitle}>{project.projectTitle}</div>
              <div style={{ fontSize: body || "12px", marginBottom: "5px" }}>
                <strong>Tech Stack:</strong> {project.technologies}
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
    </>
  );
}

export default Template22;
