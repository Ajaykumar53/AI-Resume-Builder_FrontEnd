import React, { useRef } from "react";
import { useSelector } from "react-redux";
import {
  FaLinkedin,
  FaPhoneSquare,
  FaRegCalendarAlt,
  FaRegLightbulb,
} from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

import { BsDot } from "react-icons/bs";
import DownloadController from "../Resume/DownloadController";
import { MdEmail } from "react-icons/md";

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
        " Led development of microservices architecture\n- Optimized API performance by 40%\n- Mentored junior developers",
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

function Template12() {
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#1d4ed8",
  };
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};

  // 🎨 Dynamic Styles Object
  const styles = {
    container: {
      fontFamily: fontName || "Arial, sans-serif",
      width: "794px",
      height: "1123px",
      backgroundColor: "#ffffff",
      padding: "30px",
      boxSizing: "border-box",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    },
    header: {
      borderBottom: `2px solid ${theme.primaryColor}`,
      paddingBottom: "20px",
      marginBottom: "20px",
    },
    name: {
      fontSize: name || "28px",
      fontWeight: "700",
      color: theme.primaryColor,
      margin: "0 0 4px 0",
    },
    role: {
      fontSize: subheading || "16px",
      fontWeight: "500",
      color: "#2d3748",
      marginBottom: "15px",
    },
    contactSection: {
      display: "flex",
      flexWrap: "wrap",
      gap: "15px",
      marginTop: "10px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      fontSize: body || "13px",
      color: "#4a5568",
      gap: "8px",
    },
    sectionTitle: {
      fontSize: heading || "16px",
      fontWeight: "600",
      color: theme.primaryColor,
      marginBottom: "10px",
      borderBottom: `1px solid ${theme.primaryColor}`,
      paddingBottom: "4px",
      marginTop: "20px",
    },
    summary: {
      fontSize: body || "13px",
      lineHeight: "1.5",
      color: "#4a5568",
      marginBottom: "15px",
    },
    skillBadge: {
      display: "inline-block",
      padding: "4px 12px",
      borderRadius: "20px",
      margin: "4px 8px 4px 0",
      fontSize: label || "12px",
      fontWeight: "500",
      backgroundColor: `${theme.primaryColor}10`, // 10% opacity
      color: theme.primaryColor,
    },
    timelineItem: {
      display: "flex",
      gap: "20px",
      marginBottom: "15px",
      position: "relative",
      paddingLeft: "25px",
    },
    timelineDot: {
      width: "8px",
      height: "8px",
      backgroundColor: theme.primaryColor,
      borderRadius: "50%",
      position: "absolute",
      left: "0",
      top: "6px",
    },
    timelineDate: {
      fontSize: label || "12px",
      color: theme.primaryColor,
      minWidth: "120px",
    },
    jobTitle: {
      fontSize: subheading || "14px",
      fontWeight: "600",
      color: "#2d3748",
    },
    company: {
      fontSize: body || "13px",
      color: "#718096",
      marginBottom: "4px",
    },
    description: {
      fontSize: body || "13px",
      color: "#4a5568",
      marginLeft: "20px",
      listStylePosition: "inside",
    },
    projectTitle: {
      fontSize: subheading || "14px",
      fontWeight: "600",
      color: "#2d3748",
      marginBottom: "4px",
    },
    techStack: {
      fontSize: label || "12px",
      color: "#718096",
      marginTop: "5px",
    },
    section: {
      marginBottom: "20px",
    },
    divider: {
      height: "1px",
      backgroundColor: "#e2e8f0",
      margin: "20px 0",
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
      <DownloadController resumeRef={resumeRef} fileName="Resume.pdf" />

      {/* Resume Container */}
      <div
        style={styles.container}
        className="template-container scale-50 md:scale-100 transform origin-top-left m-1 md:m-0"
        ref={resumeRef}
        id="resume"
      >
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.name}>
            {ResumeDetails.personal?.name || DEFAULT_RESUME_DATA.personal.name}
            <div style={styles.role}>
              {ResumeDetails.personal?.jobTitle ||
                DEFAULT_RESUME_DATA.personal.jobTitle}
            </div>
          </h1>

          {/* Contact Info */}
          <div style={styles.contactSection}>
            <div style={styles.contactItem}>
              <FaPhoneSquare style={{ color: theme.primaryColor }} />
              {ResumeDetails.personal?.phone ||
                DEFAULT_RESUME_DATA.personal.phone}
            </div>
            <div style={styles.contactItem}>
              <MdEmail style={{ color: theme.primaryColor }} />
              {ResumeDetails.personal?.email ||
                DEFAULT_RESUME_DATA.personal.email}
            </div>
            <div style={styles.contactItem}>
              <FaLinkedin style={{ color: theme.primaryColor }} />
              {ResumeDetails.personal?.linkedin ||
                DEFAULT_RESUME_DATA.personal.linkedin}
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", gap: "30px" }}>
          {/* Left Column */}
          <div style={{ width: "30%", paddingRight: "15px" }}>
            {/* Skills */}
            <div>
              <div style={styles.sectionTitle}>Skills</div>
              <div>
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

            {/* Certifications */}
            <div style={{ marginTop: "30px" }}>
              <div style={styles.sectionTitle}>Certifications</div>
              <ul style={styles.bulletList}>
                {(ResumeDetails.certifications?.length > 0
                  ? ResumeDetails.certifications
                  : DEFAULT_RESUME_DATA.certifications
                ).map((cert, idx) => (
                  <li key={idx} style={{ ...styles.description }}>
                    <span className="ml-3">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ width: "70%" }}>
            {/* Summary */}
            <div>
              <div style={styles.sectionTitle}>Professional Summary</div>
              <p style={styles.summary}>
                {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
              </p>
            </div>

            {/* Work Experience */}
            {ResumeDetails.experience?.length > 0 && (
              <div>
                <div style={styles.sectionTitle}>Work Experience</div>
                {(ResumeDetails.experience?.length > 0
                  ? ResumeDetails.experience
                  : DEFAULT_RESUME_DATA.experience
                ).map((exp, idx) => (
                  <div key={idx} style={styles.timelineItem}>
                    <span style={styles.timelineDot}></span>
                    <div>
                      <div style={styles.jobTitle}>{exp.jobTitle}</div>
                      <div style={styles.company}>
                        {exp.companyName} | {exp.location} | {exp.workType}
                      </div>
                      <div style={styles.timelineDate}>
                        {new Date(exp.startDate).getFullYear()} -{" "}
                        {exp.endDate === "Present"
                          ? "Present"
                          : new Date(exp.endDate).getFullYear()}
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
                  </div>
                ))}
              </div>
            )}
            {/* Education */}
            <div>
              <div style={styles.sectionTitle}>Education</div>
              {(ResumeDetails.education?.length > 0
                ? ResumeDetails.education
                : DEFAULT_RESUME_DATA.education
              ).map((edu, idx) => (
                <div key={idx} style={styles.timelineItem}>
                  <span style={styles.timelineDot}></span>
                  <div>
                    <div style={styles.jobTitle}>{edu.degree}</div>
                    <div style={styles.company}>{edu.institution}</div>
                    <div style={styles.timelineDate}>
                      {new Date(edu.educationStartDate).getFullYear()} -{" "}
                      {new Date(edu.educationEndDate).getFullYear()}
                    </div>
                    <div style={styles.description}>GPA: {edu.gpa}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div>
              <div style={styles.sectionTitle}>Projects</div>
              {(ResumeDetails.projects?.length > 0
                ? ResumeDetails.projects
                : DEFAULT_RESUME_DATA.projects
              ).map((project, idx) => (
                <div key={idx} style={styles.section}>
                  <div style={styles.projectTitle}>{project.projectTitle}</div>
                  <ul>
                    {project.projectDescription
                      .split("\n")
                      .filter((line) => line.trim())
                      .map((line, i) => (
                        <li key={i} style={styles.description}>
                          {line.replace("-", "•")}
                        </li>
                      ))}
                  </ul>
                  <div style={styles.techStack}>
                    <b>Technologies:</b> {project.technologies}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template12;
