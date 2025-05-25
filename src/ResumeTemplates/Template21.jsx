import React, { useRef } from "react";
import { useSelector } from "react-redux";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserTie,
  FaTrophy,
  FaTools,
  FaBriefcase,
  FaLaptopCode,
  FaGraduationCap,
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

function Template21() {
  // Using the same state management approach
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#2563EB", // Modern blue as default
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

  // Clean, modern single-column styles
  const styles = {
    container: {
      fontFamily: fontName || "'Inter', 'Roboto', sans-serif",
      width: "794px",
      height: "1123px",
      backgroundColor: "#ffffff",
      padding: "40px",
      boxSizing: "border-box",
      boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      color: "#333",
      position: "relative",
      overflow: "hidden",
    },
    header: {
      textAlign: "center",
      marginBottom: "24px",
      borderBottom: `2px solid ${theme.primaryColor}`,
      paddingBottom: "18px",
    },
    name: {
      fontSize: name || "32px",
      fontWeight: "700",
      color: theme.primaryColor,
      margin: "0 0 4px 0",
      letterSpacing: "0.5px",
    },
    role: {
      fontSize: subheading || "18px",
      fontWeight: "500",
      color: "#4A5568",
      marginBottom: "12px",
    },
    contactContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "16px",
      flexWrap: "wrap",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      fontSize: body || "13px",
      color: "#4a5568",
      gap: "6px",
    },
    icon: {
      color: theme.primaryColor,
      fontSize: "14px",
    },
    sectionContainer: {
      marginBottom: "20px",
    },
    sectionHeader: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "12px",
      borderBottom: `1px solid ${theme.primaryColor}40`,
      paddingBottom: "4px",
    },
    sectionIcon: {
      color: theme.primaryColor,
      fontSize: "18px",
    },
    sectionTitle: {
      fontSize: heading || "18px",
      fontWeight: "600",
      color: theme.primaryColor,
      margin: 0,
    },
    summary: {
      fontSize: body || "14px",
      lineHeight: "1.5",
      color: "#4a5568",
      padding: "0 0 0 26px",
      margin: 0,
    },
    skillsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      padding: "0 0 0 26px",
    },
    skillBadge: {
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: label || "13px",
      backgroundColor: `${theme.primaryColor}15`,
      color: theme.primaryColor,
      fontWeight: "500",
    },
    experienceItem: {
      marginBottom: "16px",
      padding: "0 0 0 26px",
    },
    jobHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "4px",
    },
    jobTitle: {
      fontSize: subheading || "16px",
      fontWeight: "600",
      color: "#2d3748",
      margin: 0,
    },
    dateRange: {
      display: "flex",
      alignItems: "center",
      fontSize: label || "13px",
      color: "#718096",
      gap: "6px",
    },
    companyLocation: {
      fontSize: body || "14px",
      color: "#4A5568",
      marginBottom: "6px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    company: {
      fontWeight: "500",
    },
    location: {
      fontSize: label || "13px",
      color: "#718096",
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
    bulletList: {
      paddingLeft: "16px",
      listStyleType: "disc",
      margin: "6px 0 0 0",
    },
    bullet: {
      fontSize: body || "13px",
      color: "#4A5568",
      lineHeight: "1.4",
      marginBottom: "4px",
    },
    projectItem: {
      marginBottom: "14px",
      padding: "14px 14px 14px 26px",
      backgroundColor: `${theme.primaryColor}08`,
      borderRadius: "6px",
      borderLeft: `3px solid ${theme.primaryColor}`,
    },
    projectTitle: {
      fontSize: subheading || "15px",
      fontWeight: "600",
      color: "#2D3748",
      marginBottom: "6px",
    },
    techStack: {
      fontSize: label || "12px",
      color: "#718096",
      marginTop: "6px",
      fontStyle: "italic",
    },
    educationItem: {
      padding: "0 0 0 26px",
      marginBottom: "16px",
    },
    institution: {
      fontSize: subheading || "15px",
      fontWeight: "600",
      color: "#2D3748",
      marginBottom: "4px",
    },
    degree: {
      fontSize: body || "14px",
      color: "#4A5568",
      marginBottom: "4px",
    },
    educationDetails: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: label || "13px",
      color: "#718096",
    },
    certList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      padding: "0 0 0 26px",
    },
    certItem: {
      fontSize: label || "13px",
      color: "#4A5568",
      backgroundColor: `${theme.primaryColor}15`,
      padding: "6px 12px",
      borderRadius: "20px",
      fontWeight: "500",
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
          <h1 style={styles.name}>
            {ResumeDetails.personal?.name || DEFAULT_RESUME_DATA.personal.name}
          </h1>
          <div style={styles.role}>
            {ResumeDetails.personal?.jobTitle ||
              DEFAULT_RESUME_DATA.personal.jobTitle}
          </div>
          <div style={styles.contactContainer}>
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
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <FaUserTie style={styles.sectionIcon} />
            <h2 style={styles.sectionTitle}>PROFESSIONAL SUMMARY</h2>
          </div>
          <p style={styles.summary}>
            {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
          </p>
        </div>

        {/* Experience Section */}
        {ResumeDetails.experience?.length > 0 && (
          <div style={styles.sectionContainer}>
            <div style={styles.sectionHeader}>
              <FaBriefcase style={styles.sectionIcon} />
              <h2 style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</h2>
            </div>
            {(ResumeDetails.experience?.length > 0
              ? ResumeDetails.experience
              : DEFAULT_RESUME_DATA.experience
            ).map((exp, idx) => (
              <div key={`exp-${idx}`} style={styles.experienceItem}>
                <div style={styles.jobHeader}>
                  <h3 style={styles.jobTitle}>{exp.jobTitle}</h3>
                  <div style={styles.dateRange}>
                    <FaCalendarAlt size={12} color={theme.primaryColor} />
                    {formatDate(exp.startDate)} -{" "}
                    {exp.endDate === "Present"
                      ? "Present"
                      : formatDate(exp.endDate)}
                  </div>
                </div>

                <div style={styles.companyLocation}>
                  <div style={styles.company}>{exp.companyName}</div>
                  <div style={styles.location}>
                    <FaMapMarkerAlt size={12} color="#718096" />
                    {exp.location} • {exp.workType}
                  </div>
                </div>
                <p style={styles.bullet}>{exp.description.split("\n")[0]}</p>
                <ul style={styles.bulletList}>
                  {parseBulletPoints(exp.description).map((point, i) => (
                    <li key={i} style={styles.bullet}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Skills Section */}
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <FaTools style={styles.sectionIcon} />
            <h2 style={styles.sectionTitle}>SKILLS</h2>
          </div>
          <div style={styles.skillsContainer}>
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

        {/* Projects Section */}
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <FaLaptopCode style={styles.sectionIcon} />
            <h2 style={styles.sectionTitle}>KEY PROJECTS</h2>
          </div>
          {(ResumeDetails.projects?.length > 0
            ? ResumeDetails.projects
            : DEFAULT_RESUME_DATA.projects
          ).map((project, idx) => (
            <div key={`proj-${idx}`} style={styles.projectItem}>
              <div style={styles.projectTitle}>{project.projectTitle}</div>

              <ul style={styles.bulletList}>
                {parseBulletPoints(project.projectDescription).map(
                  (point, i) => (
                    <li key={i} style={styles.bullet}>
                      {point}
                    </li>
                  )
                )}
              </ul>

              <div style={styles.techStack}>
                <strong>Technologies:</strong> {project.technologies}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <FaGraduationCap style={styles.sectionIcon} />
            <h2 style={styles.sectionTitle}>EDUCATION</h2>
          </div>
          {(ResumeDetails.education?.length > 0
            ? ResumeDetails.education
            : DEFAULT_RESUME_DATA.education
          ).map((edu, idx) => (
            <div key={idx} style={styles.educationItem}>
              <div style={styles.institution}>{edu.institution}</div>
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

        {/* Certifications Section */}
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <FaTrophy style={styles.sectionIcon} />
            <h2 style={styles.sectionTitle}>CERTIFICATIONS</h2>
          </div>
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
    </>
  );
}

export default Template21;
