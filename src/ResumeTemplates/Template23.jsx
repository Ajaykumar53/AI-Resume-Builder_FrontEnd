import React, { useRef } from "react";
import { useSelector } from "react-redux";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
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

function Template23() {
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#000000",
  }; // Black for ATS compatibility
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};

  // Industry Standard ATS-Friendly Styles
  const styles = {
    container: {
      fontFamily: fontName || "'Arial', 'Helvetica', sans-serif", // ATS-friendly fonts
      width: "794px",
      height: "1123px",
      backgroundColor: "#ffffff",
      padding: "50px 60px",
      boxSizing: "border-box",
      color: "#000000",
      lineHeight: "1.4",
    },

    // Header Section
    header: {
      textAlign: "center",
      marginBottom: "30px",
      borderBottom: "2px solid #000000",
      paddingBottom: "20px",
    },
    name: {
      fontSize: name || "28px",
      fontWeight: "bold",
      color: "#000000",
      marginBottom: "8px",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    jobTitle: {
      fontSize: subheading || "18px",
      fontWeight: "normal",
      color: "#000000",
      marginBottom: "15px",
    },
    contactInfo: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
      fontSize: body || "14px",
      color: "#000000",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },

    // Section Styles
    section: {
      marginBottom: "25px",
    },
    sectionTitle: {
      fontSize: heading || "16px",
      fontWeight: "bold",
      color: "#000000",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      marginBottom: "12px",
      borderBottom: "1px solid #000000",
      paddingBottom: "3px",
    },

    // Summary Section
    summary: {
      fontSize: body || "14px",
      color: "#000000",
      lineHeight: "1.5",
      textAlign: "justify",
      marginBottom: "5px",
    },

    // Experience Section
    experienceItem: {
      marginBottom: "20px",
    },
    experienceHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: "5px",
    },
    companyJobTitle: {
      fontSize: subheading || "15px",
      fontWeight: "bold",
      color: "#000000",
    },
    dateLocation: {
      fontSize: body || "14px",
      color: "#000000",
      fontWeight: "normal",
    },
    companyName: {
      fontSize: body || "14px",
      color: "#000000",
      fontStyle: "italic",
      marginBottom: "8px",
    },
    responsibilities: {
      fontSize: body || "14px",
      color: "#000000",
      margin: "0",
      listStyleType: "disc",
      paddingLeft: "20px",
    },
    responsibilityItem: {
      marginBottom: "4px",
      lineHeight: "1.4",
    },

    // Skills Section
    skillsContainer: {
      fontSize: body || "14px",
      color: "#000000",
      lineHeight: "1.6",
    },
    skillCategory: {
      marginBottom: "8px",
    },
    skillLabel: {
      fontWeight: "bold",
      display: "inline",
    },
    skillList: {
      display: "inline",
      fontWeight: "normal",
    },

    // Education Section
    educationItem: {
      marginBottom: "15px",
    },
    educationHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: "5px",
    },
    degree: {
      fontSize: subheading || "15px",
      fontWeight: "bold",
      color: "#000000",
    },
    educationDate: {
      fontSize: body || "14px",
      color: "#000000",
    },
    institution: {
      fontSize: body || "14px",
      color: "#000000",
      fontStyle: "italic",
      marginBottom: "3px",
    },
    gpa: {
      fontSize: body || "14px",
      color: "#000000",
    },

    // Projects Section
    projectItem: {
      marginBottom: "18px",
    },
    projectHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: "5px",
    },
    projectTitle: {
      fontSize: subheading || "15px",
      fontWeight: "bold",
      color: "#000000",
    },
    projectTech: {
      fontSize: body || "14px",
      color: "#000000",
      fontStyle: "italic",
    },
    projectDescription: {
      fontSize: body || "14px",
      color: "#000000",
      margin: "0",
      listStyleType: "disc",
      paddingLeft: "20px",
    },

    // Certifications Section
    certificationsList: {
      fontSize: body || "14px",
      color: "#000000",
      margin: "0",
      listStyleType: "disc",
      paddingLeft: "20px",
    },
    certificationItem: {
      marginBottom: "4px",
    },
  };

  // Format date function
  const formatDate = (dateString) => {
    if (dateString === "Present") return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  // Group skills by category (you can enhance this based on your needs)
  const groupSkills = (skills) => {
    // For now, treating all as technical skills. You can enhance this logic
    return {
      "Technical Skills": skills,
    };
  };

  const skillGroups = groupSkills(
    ResumeDetails.skills?.length > 0
      ? ResumeDetails.skills
      : DEFAULT_RESUME_DATA.skills
  );

  return (
    <>
      <DownloadController
        resumeRef={resumeRef}
        fileName="Professional_Resume.pdf"
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
          <h1 style={styles.name}>
            {ResumeDetails.personal?.name || DEFAULT_RESUME_DATA.personal.name}
          </h1>
          <div style={styles.jobTitle}>
            {ResumeDetails.personal?.jobTitle ||
              DEFAULT_RESUME_DATA.personal.jobTitle}
          </div>
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              <span>
                {ResumeDetails.personal?.phone ||
                  DEFAULT_RESUME_DATA.personal.phone}
              </span>
            </div>
            <div style={styles.contactItem}>
              <span>
                {ResumeDetails.personal?.email ||
                  DEFAULT_RESUME_DATA.personal.email}
              </span>
            </div>
            <div style={styles.contactItem}>
              <span>
                {ResumeDetails.personal?.linkedin ||
                  DEFAULT_RESUME_DATA.personal.linkedin}
              </span>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Professional Summary</div>
          <div style={styles.summary}>
            {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
          </div>
        </div>

        {/* Technical Skills */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Skills</div>
          <div style={styles.skillsContainer}>
            {Object.entries(skillGroups).map(([category, skills], idx) => (
              <div key={idx} style={styles.skillCategory}>
                <span style={styles.skillLabel}>{category}: </span>
                <span style={styles.skillList}>{skills.join(", ")}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        {ResumeDetails.experience?.length > 0 && (
          <div style={styles.section}>
            <div style={styles.sectionTitle}>Professional Experience</div>
            {(ResumeDetails.experience?.length > 0
              ? ResumeDetails.experience
              : DEFAULT_RESUME_DATA.experience
            ).map((exp, idx) => (
              <div key={`exp-${idx}`} style={styles.experienceItem}>
                <div style={styles.experienceHeader}>
                  <div style={styles.companyJobTitle}>{exp.jobTitle}</div>
                  <div style={styles.dateLocation}>
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  </div>
                </div>
                <div style={styles.companyName}>
                  {exp.companyName}, {exp.location}{" "}
                  {exp.remote ? "(Remote)" : ""} | {exp.workType}
                </div>
                <ul style={styles.responsibilities}>
                  {exp.description
                    .split("\n")
                    .filter((line) => line.trim())
                    .map((line, i) => (
                      <li key={i} style={styles.responsibilityItem}>
                        {line.replace(/^[-•]\s*/, "")}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Key Projects */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Key Projects</div>
          {(ResumeDetails.projects?.length > 0
            ? ResumeDetails.projects
            : DEFAULT_RESUME_DATA.projects
          ).map((project, idx) => (
            <div key={`proj-${idx}`} style={styles.projectItem}>
              <div style={styles.projectHeader}>
                <div style={styles.projectTitle}>{project.projectTitle}</div>
                <div style={styles.projectTech}>{project.technologies}</div>
              </div>
              <ul style={styles.projectDescription}>
                {project.projectDescription
                  .split("\n")
                  .filter((line) => line.trim())
                  .map((line, i) => (
                    <li key={i} style={styles.responsibilityItem}>
                      {line.replace(/^[-•]\s*/, "")}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Education</div>
          {(ResumeDetails.education?.length > 0
            ? ResumeDetails.education
            : DEFAULT_RESUME_DATA.education
          ).map((edu, idx) => (
            <div key={idx} style={styles.educationItem}>
              <div style={styles.educationHeader}>
                <div style={styles.degree}>{edu.degree}</div>
                <div style={styles.educationDate}>
                  {new Date(edu.educationStartDate).getFullYear()} -{" "}
                  {new Date(edu.educationEndDate).getFullYear()}
                </div>
              </div>
              <div style={styles.institution}>{edu.institution}</div>
              <div style={styles.gpa}>GPA: {edu.gpa}</div>
            </div>
          ))}
        </div>

        {/* Professional Certifications */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Professional Certifications</div>
          <ul style={styles.certificationsList}>
            {(ResumeDetails.certifications?.length > 0
              ? ResumeDetails.certifications
              : DEFAULT_RESUME_DATA.certifications
            ).map((cert, idx) => (
              <li key={idx} style={styles.certificationItem}>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Template23;
