import React, { useRef } from "react";
import { useSelector } from "react-redux";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
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

function Template19() {
  // Using the same state management approach
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#1E40AF",
  };
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};

  // Helper functions
  const formatDate = (dateString) => {
    if (dateString === "Present") return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const parseBulletPoints = (description) => {
    if (!description) return [];
    return description
      .split("\n")
      .filter((line) => line.trim())
      .map((line) => line.replace(/^-\s*/, "").trim());
  };

  // Refined styles with reduced title padding and increased gaps
  const styles = {
    container: {
      fontFamily: fontName || "'Roboto', 'Arial', sans-serif",
      width: "794px",
      height: "1123px",
      backgroundColor: "#ffffff",
      padding: "30px 35px", // Slightly increased for balance
      boxSizing: "border-box",
      boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
      color: "#333",
      letterSpacing: "0.3px",
      position: "relative",
      overflow: "hidden",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px", // Increased for better spacing
      borderBottom: `2px solid ${theme.primaryColor}`,
      paddingBottom: "14px",
    },
    headerLeft: {
      flex: "1",
    },
    headerRight: {
      textAlign: "right",
    },
    name: {
      fontSize: name || "24px", // Slightly smaller for elegance
      fontWeight: "700",
      color: theme.primaryColor,
      margin: "0 0 4px 0",
      letterSpacing: "0.6px",
    },
    role: {
      fontSize: subheading || "14px", // Smaller for hierarchy
      fontWeight: "500",
      color: "#4A5568",
      marginBottom: "4px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      fontSize: body || "11px", // Smaller for compactness
      color: "#4A5568",
      gap: "8px",
      marginBottom: "6px", // Increased for clarity
    },
    icon: {
      color: theme.primaryColor,
      fontSize: "11px", // Smaller icons
    },
    sectionTitle: {
      fontSize: heading || "14px", // Smaller for sleekness
      fontWeight: "600",
      color: "#ffffff",
      backgroundColor: theme.primaryColor,
      padding: "3px 10px", // Reduced padding for titles
      display: "inline-block",
      marginBottom: "12px", // Increased for spacing
      borderRadius: "4px",
    },
    section: {
      marginBottom: "20px", // Increased for better separation
    },
    summary: {
      fontSize: body || "11px", // Smaller for compactness
      lineHeight: "1.5",
      color: "#4A5568",
      marginBottom: "12px", // Increased for spacing
      padding: "0 4px",
    },
    skillsGrid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px", // Increased for clarity
      marginBottom: "14px", // Increased for spacing
      padding: "0 4px",
    },
    skillBadge: {
      padding: "4px 10px", // Slightly larger for readability
      borderRadius: "4px",
      fontSize: label || "10px", // Smaller for compactness
      backgroundColor: "#EDF2F7",
      color: theme.primaryColor,
      border: `1px solid ${theme.primaryColor}30`,
    },
    experienceItem: {
      marginBottom: "18px", // Increased for spacing
      paddingLeft: "20px",
      position: "relative",
      borderLeft: `2px solid ${theme.primaryColor}20`,
    },
    expDot: {
      position: "absolute",
      left: "-5px",
      top: "6px",
      width: "7px", // Slightly smaller
      height: "7px",
      backgroundColor: theme.primaryColor,
      borderRadius: "50%",
    },
    jobHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "4px", // Increased slightly
    },
    jobTitle: {
      fontSize: subheading || "13px", // Smaller for hierarchy
      fontWeight: "600",
      color: "#2D3748",
      marginBottom: "2px",
    },
    dateRange: {
      display: "flex",
      alignItems: "center",
      fontSize: label || "10px", // Smaller
      color: "#718096",
      gap: "5px",
    },
    companyLocation: {
      fontSize: body || "11px", // Smaller
      color: "#4A5568",
      marginBottom: "6px", // Increased for spacing
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    company: {
      fontWeight: "500",
    },
    location: {
      fontSize: label || "10px", // Smaller
      color: "#718096",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    bulletList: {
      paddingLeft: "0",
      listStyleType: "none",
      margin: "4px 0 0 0", // Increased top margin
    },
    bullet: {
      fontSize: body || "11px", // Smaller
      color: "#4A5568",
      lineHeight: "1.4",
      marginBottom: "5px", // Increased for spacing
      position: "relative",
      paddingLeft: "14px",
    },
    bulletDot: {
      position: "absolute",
      left: "0",
      top: "5px",
      width: "4px",
      height: "4px",
      backgroundColor: theme.primaryColor,
      borderRadius: "50%",
    },
    projectCard: {
      padding: "10px 12px", // Slightly larger for balance
      marginBottom: "14px", // Increased for spacing
      borderLeft: `3px solid ${theme.primaryColor}`,
      backgroundColor: "#F8FAFC",
    },
    projectTitle: {
      fontSize: subheading || "12px", // Smaller
      fontWeight: "600",
      color: "#2D3748",
      marginBottom: "6px", // Increased
    },
    techStack: {
      fontSize: label || "10px", // Smaller
      color: "#718096",
      marginTop: "5px", // Increased
    },
    educationGrid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px", // Increased for clarity
    },
    educationItem: {
      flex: "1 0 48%",
      minWidth: "200px",
      padding: "10px 12px", // Slightly larger
      backgroundColor: "#F8FAFC",
      borderLeft: `2px solid ${theme.primaryColor}`,
    },
    institution: {
      fontSize: body || "11px", // Smaller
      fontWeight: "600",
      color: "#2D3748",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "4px", // Increased
    },
    degree: {
      fontSize: body || "11px", // Smaller
      color: "#4A5568",
      marginBottom: "4px", // Increased
    },
    educationDetails: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: label || "10px", // Smaller
      color: "#718096",
    },
    certSection: {
      marginBottom: "0",
    },
    certList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px", // Increased
    },
    certItem: {
      fontSize: label || "10px", // Smaller
      color: "#4A5568",
      backgroundColor: "#EDF2F7",
      padding: "5px 10px", // Slightly larger
      borderRadius: "4px",
      border: `1px solid ${theme.primaryColor}20`,
    },
    twoColumns: {
      display: "flex",
      gap: "20px", // Increased for better separation
    },
    column: {
      flex: "1",
    },
  };

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
          <div style={styles.headerLeft}>
            <h1 style={styles.name}>
              {ResumeDetails.personal?.name ||
                DEFAULT_RESUME_DATA.personal.name}
            </h1>
            <div style={styles.role}>
              {ResumeDetails.personal?.jobTitle ||
                DEFAULT_RESUME_DATA.personal.jobTitle}
            </div>
          </div>

          <div style={styles.headerRight}>
            <div style={styles.contactItem}>
              <FaPhone style={styles.icon} />
              {ResumeDetails.personal?.phone ||
                DEFAULT_RESUME_DATA.personal.phone}
            </div>
            <div style={styles.contactItem}>
              <FaEnvelope style={styles.icon} />
              {ResumeDetails.personal?.email ||
                DEFAULT_RESUME_DATA.personal.email}
            </div>
            <div style={styles.contactItem}>
              <FaLinkedin style={styles.icon} />
              {ResumeDetails.personal?.linkedin ||
                DEFAULT_RESUME_DATA.personal.linkedin}
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>PROFESSIONAL SUMMARY</div>
          <p style={styles.summary}>
            {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
          </p>
        </div>

        {/* Split into two columns for some sections */}
        <div style={styles.twoColumns}>
          {/* Left Column */}
          <div style={styles.column}>
            {/* Skills Section */}
            <div style={styles.section}>
              <div style={styles.sectionTitle}>SKILLS</div>
              <div style={styles.skillsGrid}>
                {(ResumeDetails.skills?.length > 0
                  ? ResumeDetails.skills
                  : DEFAULT_RESUME_DATA.skills
                ).map((skill, idx) => (
                  <div key={idx} style={styles.skillBadge}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div style={styles.section}>
              <div style={styles.sectionTitle}>EDUCATION</div>
              <div style={styles.educationGrid}>
                {(ResumeDetails.education?.length > 0
                  ? ResumeDetails.education
                  : DEFAULT_RESUME_DATA.education
                ).map((edu, idx) => (
                  <div key={idx} style={styles.educationItem}>
                    <div style={styles.institution}>
                      <TbSchool
                        style={{ color: theme.primaryColor, fontSize: "11px" }}
                      />
                      {edu.institution}
                    </div>
                    <div style={styles.degree}>{edu.degree}</div>
                    <div style={styles.educationDetails}>
                      <span>GPA: {edu.gpa}</span>
                      <span>
                        {formatDate(edu.educationStartDate)} -{" "}
                        {formatDate(edu.educationEndDate)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div style={styles.certSection}>
              <div style={styles.sectionTitle}>CERTIFICATIONS</div>
              <div style={styles.certList}>
                {(ResumeDetails.certifications?.length > 0
                  ? ResumeDetails.certifications
                  : DEFAULT_RESUME_DATA.certifications
                ).map((cert, idx) => (
                  <div key={idx} style={styles.certItem}>
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div style={styles.column}>
            {/* Projects Section */}
            <div style={styles.section}>
              <div style={styles.sectionTitle}>KEY PROJECTS</div>
              {(ResumeDetails.projects?.length > 0
                ? ResumeDetails.projects
                : DEFAULT_RESUME_DATA.projects
              ).map((project, idx) => (
                <div key={`proj-${idx}`} style={styles.projectCard}>
                  <div style={styles.projectTitle}>{project.projectTitle}</div>
                  <ul style={styles.bulletList}>
                    {parseBulletPoints(project.projectDescription).map(
                      (point, i) => (
                        <li key={i} style={styles.bullet}>
                          <div style={styles.bulletDot}></div>
                          {point}
                        </li>
                      )
                    )}
                  </ul>
                  <div style={styles.techStack}>
                    <strong>Tech:</strong> {project.technologies}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {ResumeDetails.experience?.length > 0 && (
          <div style={{ ...styles.section, paddingTop: "20px" }}>
            <div style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</div>
            {(ResumeDetails.experience?.length > 0
              ? ResumeDetails.experience
              : DEFAULT_RESUME_DATA.experience
            ).map((exp, idx) => (
              <div key={`exp-${idx}`} style={styles.experienceItem}>
                <div style={styles.expDot}></div>
                <div style={styles.jobHeader}>
                  <div style={styles.jobTitle}>{exp.jobTitle}</div>
                  <div style={styles.dateRange}>
                    <FaCalendarAlt size={10} color={theme.primaryColor} />
                    {formatDate(exp.startDate)} -{" "}
                    {exp.endDate === "Present"
                      ? "Present"
                      : formatDate(exp.endDate)}
                  </div>
                </div>
                <div style={styles.companyLocation}>
                  <div style={styles.company}>{exp.companyName}</div>
                  <div style={styles.location}>
                    <FaMapMarkerAlt size={10} color="#718096" />
                    {exp.location} • {exp.workType}
                  </div>
                </div>
                <ul style={styles.bulletList}>
                  {parseBulletPoints(exp.description).map((point, i) => (
                    <li key={i} style={styles.bullet}>
                      <div style={styles.bulletDot}></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Template19;
