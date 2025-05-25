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

// Default resume data - kept the same as in original
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

function Template11() {
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#2563eb",
  }; // Changed default to a professional blue
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};

  // Enhanced Styles Object
  const styles = {
    container: {
      fontFamily: fontName || "'Inter', 'Roboto', sans-serif",
      width: "794px",
      height: "1123px",
      backgroundColor: "#ffffff",
      padding: "40px",
      boxSizing: "border-box",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      position: "relative",
      color: "#333",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
      borderBottom: `2px solid ${theme.primaryColor}`,
      paddingBottom: "20px",
    },
    headerLeft: {
      flex: 2,
    },
    headerRight: {
      flex: 1,
      textAlign: "right",
    },
    name: {
      fontSize: name || "36px",
      fontWeight: "700",
      color: "#1a202c",
      marginBottom: "5px",
      letterSpacing: "-0.5px",
    },
    role: {
      fontSize: subheading || "18px",
      fontWeight: "500",
      color: theme.primaryColor,
      marginBottom: "5px",
      letterSpacing: "0.3px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      fontSize: body || "13px",
      color: "#4a5568",
      gap: "8px",
      marginBottom: "10px",
    },
    sectionTitle: {
      fontSize: heading || "18px",
      fontWeight: "600",
      color: theme.primaryColor,
      marginBottom: "15px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      position: "relative",
      paddingBottom: "5px",
      borderBottom: `1px solid ${theme.primaryColor}20`,
    },
    summary: {
      fontSize: body || "14px",
      lineHeight: "1.6",
      color: "#4a5568",
      marginBottom: "25px",
      padding: "0 5px",
    },
    mainContainer: {
      display: "flex",
      gap: "30px",
    },
    leftColumn: {
      flex: "2",
    },
    rightColumn: {
      flex: "1",
    },
    experienceItem: {
      marginBottom: "25px",
      position: "relative",
      paddingLeft: "20px",
      borderLeft: `2px solid ${theme.primaryColor}20`,
    },
    experienceHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: "5px",
    },
    jobTitle: {
      fontSize: subheading || "16px",
      fontWeight: "600",
      color: "#1a202c",
    },
    company: {
      fontSize: body || "14px",
      fontWeight: "500",
      color: theme.primaryColor,
      marginBottom: "2px",
    },
    durationLocation: {
      display: "flex",
      gap: "15px",
      fontSize: label || "13px",
      color: "#718096",
      marginBottom: "10px",
      alignItems: "center",
    },
    description: {
      fontSize: body || "14px",
      color: "#4a5568",
      listStyleType: "none",
      paddingLeft: "0",
      margin: "10px 0",
    },
    descriptionItem: {
      marginBottom: "6px",
      display: "flex",
      alignItems: "baseline",
    },
    bullet: {
      display: "inline-block",
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      backgroundColor: theme.primaryColor,
      marginRight: "10px",
      flexShrink: 0,
    },
    skillGrid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginBottom: "20px",
    },
    skillBadge: {
      padding: "5px 12px",
      borderRadius: "4px",
      fontSize: label || "12px",
      fontWeight: "500",
      backgroundColor: `${theme.primaryColor}10`,
      color: theme.primaryColor,
      border: `1px solid ${theme.primaryColor}30`,
    },
    projectCard: {
      padding: "15px",
      marginBottom: "20px",
      borderRadius: "6px",
      backgroundColor: "#f8fafc",
      border: `1px solid ${theme.primaryColor}20`,
    },
    projectTitle: {
      fontSize: subheading || "16px",
      fontWeight: "600",
      color: "#1a202c",
      marginBottom: "10px",
    },
    projectDescription: {
      fontSize: body || "14px",
      color: "#4a5568",
      marginBottom: "10px",
    },
    techStack: {
      fontSize: label || "12px",
      color: "#718096",
      padding: "5px 10px",
      backgroundColor: "#f1f5f9",
      borderRadius: "4px",
      display: "inline-block",
    },
    educationItem: {
      marginBottom: "15px",
    },
    institution: {
      fontSize: body || "14px",
      fontWeight: "600",
      color: "#1a202c",
    },
    degree: {
      fontSize: body || "14px",
      color: "#4a5568",
    },
    certItem: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "8px",
    },
    infoIcon: {
      color: theme.primaryColor,
      flexShrink: 0,
    },
    timelineDot: {
      position: "absolute",
      left: "-6px",
      top: "6px",
      width: "10px",
      height: "10px",
      backgroundColor: theme.primaryColor,
      borderRadius: "50%",
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
        {/* Header with Name and Contact Info */}
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
              <FaPhone style={styles.infoIcon} />
              <span>
                {ResumeDetails.personal?.phone ||
                  DEFAULT_RESUME_DATA.personal.phone}
              </span>
            </div>
            <div style={styles.contactItem}>
              <FaEnvelope style={styles.infoIcon} />
              <span>
                {ResumeDetails.personal?.email ||
                  DEFAULT_RESUME_DATA.personal.email}
              </span>
            </div>
            <div style={styles.contactItem}>
              <FaLinkedin style={styles.infoIcon} />
              <span>
                {ResumeDetails.personal?.linkedin ||
                  DEFAULT_RESUME_DATA.personal.linkedin}
              </span>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div>
          <div style={styles.sectionTitle}>Professional Summary</div>
          <p style={styles.summary}>
            {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
          </p>
        </div>

        {/* Main Content Area */}
        <div style={styles.mainContainer}>
          {/* Left Column - Experience and Projects */}
          <div style={styles.leftColumn}>
            {/* Work Experience */}
            {ResumeDetails.experience?.length > 0 && (
              <div style={{ marginBottom: "30px" }}>
                <div style={styles.sectionTitle}>Professional Experience</div>

                {(ResumeDetails.experience?.length > 0
                  ? ResumeDetails.experience
                  : DEFAULT_RESUME_DATA.experience
                ).map((exp, idx) => (
                  <div key={`exp-${idx}`} style={styles.experienceItem}>
                    <div style={styles.timelineDot}></div>
                    <div style={styles.company}>{exp.companyName}</div>
                    <div style={styles.experienceHeader}>
                      <div style={styles.jobTitle}>{exp.jobTitle}</div>
                    </div>
                    <div style={styles.durationLocation}>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <FaCalendarAlt size={12} style={styles.infoIcon} />
                        {new Date(exp.startDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}{" "}
                        -{" "}
                        {exp.endDate === "Present"
                          ? "Present"
                          : new Date(exp.endDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                            })}
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <FaMapMarkerAlt size={12} style={styles.infoIcon} />
                        {exp.location} {exp.remote ? " (Remote)" : ""} •{" "}
                        {exp.workType}
                      </span>
                    </div>
                    <ul style={styles.description}>
                      {exp.description
                        .split("\n")
                        .filter((line) => line.trim())
                        .map((line, i) => (
                          <li key={i} style={styles.descriptionItem}>
                            <span style={styles.bullet}></span>
                            <span>{line.replace("-", "").trim()}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            {/* Projects */}
            <div>
              <div style={styles.sectionTitle}>Notable Projects</div>
              {(ResumeDetails.projects?.length > 0
                ? ResumeDetails.projects
                : DEFAULT_RESUME_DATA.projects
              ).map((project, idx) => (
                <div key={`proj-${idx}`} style={styles.projectCard}>
                  <div style={styles.projectTitle}>{project.projectTitle}</div>
                  <ul style={styles.description}>
                    {project.projectDescription
                      .split("\n")
                      .filter((line) => line.trim())
                      .map((line, i) => (
                        <li key={i} style={styles.descriptionItem}>
                          <span style={styles.bullet}></span>
                          <span>{line.replace("-", "").trim()}</span>
                        </li>
                      ))}
                  </ul>
                  <div style={styles.techStack}>
                    <strong>Tech Stack:</strong> {project.technologies}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Skills, Education, Certs */}
          <div style={styles.rightColumn}>
            {/* Skills */}
            <div style={{ marginBottom: "30px" }}>
              <div style={styles.sectionTitle}>Core Technical Skills</div>
              <div style={styles.skillGrid}>
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

            {/* Education */}
            <div style={{ marginBottom: "30px" }}>
              <div style={styles.sectionTitle}>
                <TbSchool style={styles.infoIcon} />
                Education
              </div>
              {(ResumeDetails.education?.length > 0
                ? ResumeDetails.education
                : DEFAULT_RESUME_DATA.education
              ).map((edu, idx) => (
                <div key={idx} style={styles.educationItem}>
                  <div style={styles.institution}>{edu.institution}</div>
                  <div style={styles.degree}>{edu.degree}</div>
                  <div style={{ ...styles.durationLocation, marginTop: "5px" }}>
                    <FaCalendarAlt size={12} style={styles.infoIcon} />
                    <span>
                      {new Date(edu.educationStartDate).getFullYear()} -{" "}
                      {new Date(edu.educationEndDate).getFullYear()}
                    </span>
                  </div>
                  <div style={{ fontSize: label || "13px", color: "#4a5568" }}>
                    GPA: <strong>{edu.gpa}</strong>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div style={styles.sectionTitle}>Professional Certifications</div>
              <div>
                {(ResumeDetails.certifications?.length > 0
                  ? ResumeDetails.certifications
                  : DEFAULT_RESUME_DATA.certifications
                ).map((cert, idx) => (
                  <div key={idx} style={styles.certItem}>
                    <span style={styles.bullet}></span>
                    <span
                      style={{ fontSize: body || "14px", color: "#4a5568" }}
                    >
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template11;
