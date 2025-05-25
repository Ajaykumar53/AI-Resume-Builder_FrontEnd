import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { FaPhone, FaEnvelope, FaLinkedin, FaCircle } from "react-icons/fa";
import DownloadController from "../Resume/DownloadController";

const DEFAULT_RESUME_DATA = {
  personal: {
    name: "Your Name",
    jobTitle: "Your Job Title",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    linkedin: "linkedin.com/in/your-profile",
  },
  summary: "A dedicated professional with a passion for excellence.",
  education: [
    {
      degree: "Your Degree",
      institution: "Your Institution",
      gpa: "N/A",
      educationStartDate: "YYYY-MM-DD",
      educationEndDate: "YYYY-MM-DD",
    },
  ],
  experience: [
    {
      companyName: "Your Company",
      jobTitle: "Your Role",
      location: "Your Location",
      remote: false,
      workType: "Full-time",
      startDate: "YYYY-MM-DD",
      endDate: "YYYY-MM-DD",
      description:
        "Describe your responsibilities and achievements.\n- Achievement 1\n- Achievement 2",
    },
  ],
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  certifications: ["Your Certification"],
  projects: [
    {
      projectTitle: "Your Project",
      projectDescription: "Describe your project.\n- Feature 1\n- Feature 2",
      technologies: "Tech 1, Tech 2",
    },
  ],
};

function Template8() {
  const ResumeDetails = useSelector(
    (state) => state.resume || DEFAULT_RESUME_DATA
  );
  const resumeRef = useRef(null);
  const { fontName } = useSelector(
    (state) => state.FontSlice?.fontFamily || { fontName: "Poppins" }
  );
  const { body, heading, label, name, subheading } = useSelector(
    (state) =>
      state.FontSlice?.fontSize || {
        body: "14px",
        heading: "18px",
        label: "12px",
        name: "28px",
        subheading: "16px",
      }
  );
  const theme = useSelector(
    (state) =>
      state.theme || {
        primaryColor: "#1e40af", // Deep blue
        accentColor: "#3b82f6", // Lighter blue
      }
  );

  const styles = {
    container: {
      fontFamily: fontName || "Poppins, sans-serif",
      width: "794px",
      minHeight: "1123px",
      backgroundColor: "#ffffff",
      display: "flex",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      overflow: "hidden",
    },
    sidebar: {
      width: "35%",
      backgroundColor: `${theme.primaryColor || "#1e40af"}cc`,
      color: "#ffffff",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    mainContent: {
      width: "65%",
      padding: "24px",
      backgroundColor: "#f9fafb",
    },
    name: {
      fontSize: name || "28px",
      fontWeight: "700",
      color: "#ffffff",
      marginBottom: "8px",
    },
    jobTitle: {
      fontSize: subheading || "16px",
      fontWeight: "500",
      color: "#e5e7eb",
    },
    sectionTitle: {
      fontSize: heading || "18px",
      fontWeight: "600",
      color: theme.primaryColor || "#1e40af",
      borderBottom: `2px solid ${theme.accentColor || "#3b82f6"}`,
      paddingBottom: "6px",
      marginBottom: "12px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: body || "14px",
      marginBottom: "8px",
    },
    contactIcon: {
      fontSize: "16px",
      color: "#e5e7eb",
    },
    skillItem: {
      marginBottom: "12px",
    },
    skillName: {
      fontSize: body || "14px",
      fontWeight: "500",
      marginBottom: "4px",
    },
    skillBar: {
      backgroundColor: "#374151",
      height: "6px",
      borderRadius: "3px",
      overflow: "hidden",
    },
    skillFill: (proficiency) => ({
      width: `${proficiency}%`,
      backgroundColor: theme.accentColor || "#3b82f6",
      height: "100%",
      borderRadius: "3px",
    }),
    bulletList: {
      paddingLeft: "20px",
      listStyleType: "disc",
      fontSize: body || "14px",
      color: "#1f2937",
      marginTop: "8px",
    },
    description: {
      fontSize: body || "14px",
      color: "#1f2937",
      lineHeight: "1.6",
    },
    subSection: {
      marginBottom: "16px",
    },
    subTitle: {
      fontSize: subheading || "16px",
      fontWeight: "600",
      color: "#1f2937",
    },
    meta: {
      fontSize: label || "12px",
      color: "#6b7280",
      marginBottom: "4px",
    },
    gpa: {
      fontSize: label || "12px",
      color: theme.accentColor || "#3b82f6",
      fontWeight: "500",
    },
  };

  return (
    <>
      <DownloadController resumeRef={resumeRef} fileName="TechResume.pdf" />
      <div className="p-4 bg-gray-100 scale-50 md:scale-100 transform origin-top-left md:m-0 m-1">
        <div style={styles.container} ref={resumeRef} id="resume">
          {/* Sidebar */}
          <div style={styles.sidebar}>
            {/* Personal Info */}
            <div>
              <h1 style={styles.name}>
                {ResumeDetails.personal?.name ||
                  DEFAULT_RESUME_DATA.personal.name}
              </h1>
              <h2 style={styles.jobTitle}>
                {ResumeDetails.personal?.jobTitle ||
                  DEFAULT_RESUME_DATA.personal.jobTitle}
              </h2>
            </div>
            {/* Contact */}
            <div>
              <h3 style={{ ...styles.sectionTitle, color: "#ffffff" }}>
                Contact
              </h3>
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
            {/* Skills */}
            <div>
              <h3 style={{ ...styles.sectionTitle, color: "#ffffff" }}>
                Skills
              </h3>
              <ul style={{ ...styles.bulletList, color: "white" }}>
                {(ResumeDetails.skills?.length > 0
                  ? ResumeDetails.skills
                  : DEFAULT_RESUME_DATA.skills
                ).map((skill, index) => (
                  <li key={index} style={styles.skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            {/* Certifications */}
            <div>
              <h3 style={{ ...styles.sectionTitle, color: "#ffffff" }}>
                Certifications
              </h3>
              {(ResumeDetails.certifications?.length > 0
                ? ResumeDetails.certifications
                : DEFAULT_RESUME_DATA.certifications
              ).map((cert, index) => (
                <div
                  key={index}
                  style={{ ...styles.contactItem, fontSize: body || "14px" }}
                >
                  <FaCircle
                    style={{
                      ...styles.contactIcon,
                      fontSize: "8px",
                      marginTop: "4px",
                    }}
                  />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Main Content */}
          <div style={styles.mainContent}>
            {/* Summary */}
            <div style={styles.subSection}>
              <h3 style={styles.sectionTitle}>Professional Summary</h3>
              <p style={styles.description}>
                {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
              </p>
            </div>
            {/* Experience */}

            {ResumeDetails.experience?.length > 0 && (
              <div style={styles.subSection}>
                <h3 style={styles.sectionTitle}>Work Experience</h3>
                {(ResumeDetails.experience?.length > 0
                  ? ResumeDetails.experience
                  : DEFAULT_RESUME_DATA.experience
                ).map((exp, index) => (
                  <div key={index} style={styles.subSection}>
                    <h4 style={styles.subTitle}>{exp.jobTitle}</h4>
                    <div style={styles.meta}>
                      {exp.companyName} | {exp.location} | {exp.workType} |{" "}
                      {exp.startDate && exp.endDate
                        ? `${new Date(exp.startDate).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              year: "numeric",
                            }
                          )} - ${new Date(exp.endDate).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              year: "numeric",
                            }
                          )}`
                        : "Dates not provided"}
                    </div>
                    <ul style={styles.bulletList}>
                      {exp.description
                        .split("\n")
                        .filter((line) => line.startsWith("-"))
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
            {/* Education */}
            <div style={styles.subSection}>
              <h3 style={styles.sectionTitle}>Education</h3>
              {(ResumeDetails.education?.length > 0
                ? ResumeDetails.education
                : DEFAULT_RESUME_DATA.education
              ).map((edu, index) => (
                <div key={index} style={styles.subSection}>
                  <h4 style={styles.subTitle}>{edu.degree}</h4>
                  <div style={styles.meta}>{edu.institution}</div>
                  <div style={styles.meta}>
                    {edu.educationStartDate && edu.educationEndDate
                      ? `${new Date(
                          edu.educationStartDate
                        ).getFullYear()} - ${new Date(
                          edu.educationEndDate
                        ).getFullYear()}`
                      : "Dates not provided"}
                  </div>
                  <div style={styles.gpa}>GPA: {edu.gpa}</div>
                </div>
              ))}
            </div>
            {/* Projects */}
            <div style={styles.subSection}>
              <h3 style={styles.sectionTitle}>Projects</h3>
              {(ResumeDetails.projects?.length > 0
                ? ResumeDetails.projects
                : DEFAULT_RESUME_DATA.projects
              ).map((project, index) => (
                <div key={index} style={{ marginBottom: "12px" }}>
                  <div style={styles.projectTitle}>{project.projectTitle}</div>
                  <ul style={styles.bulletList}>
                    {project.projectDescription
                      .split("\n\n")
                      .filter((line) => line.startsWith(""))
                      .map((line, i) => (
                        <li key={i} style={styles.description}>
                          {line}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template8;
