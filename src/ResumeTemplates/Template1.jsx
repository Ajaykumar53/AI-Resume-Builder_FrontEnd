import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { FaPhoneSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { TbPointFilled } from "react-icons/tb";
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
      description: "Describe your responsibilities and achievements.",
    },
  ],
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  certifications: ["Your Certification"],
  projects: [
    {
      projectTitle: "Your Project",
      projectDescription: "Describe your project.",
      technologies: "Tech 1, Tech 2",
    },
  ],
};

function Template1() {
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#2c3e50",
  };

  const styles = {
    jobTitle: {
      fontSize: subheading || "14px",
      fontWeight: "600",
      color: "#2d3748",
    },
    company: {
      fontSize: body || "13px",
      fontWeight: "500",
      color: "#4a5568",
    },
    workDetails: {
      fontSize: label || "12px",
      color: "#718096",
      marginBottom: "5px",
    },
    description: {
      fontSize: body || "13px",
      color: "#4a5568",
      lineHeight: "1.5",
      marginTop: "5px",
    },
    resumeContainer: {
      fontFamily: fontName,
      width: "794px",
      height: "1123px",
      backgroundColor: "#ffffff",
      padding: "25px",
      boxSizing: "border-box",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    section: {
      marginBottom: "20px",
    },
    resumeName: {
      fontSize: name || "26px",
      fontWeight: "700",
      color: theme.primaryColor || "#2c3e50",
      marginBottom: "5px",
    },
    role: {
      fontSize: subheading || "16px",
      fontWeight: "500",
      color: "#4a5568",
      marginBottom: "15px",
    },
    sectionTitle: {
      fontSize: heading || "16px",
      fontWeight: "600",
      color: theme.primaryColor || "#2c3e50",
      marginBottom: "8px",
      borderBottom: `1px solid ${theme.primaryColor || "#2c3e50"}`,
      paddingBottom: "4px",
    },

    contactItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "8px",
      fontSize: body || "13px",
      color: "#2d3748",
    },
    contactIcon: {
      marginRight: "8px",
      color: theme.primaryColor || "#2c3e50",
      fontSize: "14px",
    },
    resumeSummary: {
      fontSize: body || "13px",
      lineHeight: "1.5",
      color: "#4a5568",
      marginBottom: "15px",
    },
    bulletList: {
      paddingLeft: "15px",
      listStyleType: "disc",
      fontSize: body || "13px",
      color: "#4a5568",
      marginTop: "5px",
    },
    bullet: {
      display: "flex",
      alignItems: "flex-start",
      gap: "4px",
      marginBottom: "5px",
      fontSize: body || "13px",
      color: "#4a5568",
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
    degree: {
      fontSize: subheading || "14px",
      fontWeight: "600",
      color: "#2d3748",
      marginBottom: "4px",
    },
    institution: {
      fontSize: body || "13px",
      color: "#718096",
      marginBottom: "4px",
    },
    dateRange: {
      fontSize: label || "12px",
      color: "#718096",
    },
    gpa: {
      fontSize: label || "12px",
      color: theme.primaryColor || "#2c3e50",
      fontWeight: "500",
    },
  };
  const EmailIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v8h8V4H4zm0 0h8v2L7 9 4 6V4z" />
    </svg>
  );
  return (
    <>
      <DownloadController resumeRef={resumeRef} fileName="Resume.pdf" />
      <div className="resume-wrapper hide-scrollbar">
        <div
          style={styles.resumeContainer}
          className="Template scale-50 md:scale-100 transform origin-top-left md:m-0 m-1"
          ref={resumeRef}
          id="resume"
        >
          {/* Header */}
          <div style={{ ...styles.section, textAlign: "center" }}>
            <div style={styles.resumeName}>
              {ResumeDetails.personal?.name ||
                DEFAULT_RESUME_DATA.personal.name}

              <div style={styles.role}>
                {ResumeDetails.personal?.jobTitle ||
                  DEFAULT_RESUME_DATA.personal.jobTitle}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div
            style={{
              ...styles.section,
              display: "flex",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>
                <svg
                  class={` text-gray-${theme.primaryColor} dark:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={subheading}
                  height={subheading}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              {ResumeDetails.personal?.phone ||
                DEFAULT_RESUME_DATA.personal.phone}
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={subheading}
                  height={subheading}
                  viewBox="0 0 122.88 78.607"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M61.058 65.992L85.282 41.771l36.837 36.836H73.673h-25.23H0L36.836 41.771 61.058 65.992zM1.401 0l59.656 59.654L120.714 0H1.401zM0 69.673l31.625-31.628L0 6.42V69.673zM122.88 72.698L88.227 38.045 122.88 3.393V72.698z"
                  />
                </svg>
              </span>
              {ResumeDetails.personal?.email ||
                DEFAULT_RESUME_DATA.personal.email}
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 122.88 122.88"
                  width={subheading}
                  height={subheading}
                  fill="currentColor"
                >
                  <title>hyperlink</title>
                  <path d="M60.54,34.07A7.65,7.65,0,0,1,49.72,23.25l13-12.95a35.38,35.38,0,0,1,49.91,0l.07.08a35.37,35.37,0,0,1-.07,49.83l-13,12.95A7.65,7.65,0,0,1,88.81,62.34l13-13a20.08,20.08,0,0,0,0-28.23l-.11-.11a20.08,20.08,0,0,0-28.2.07l-12.95,13Zm14,3.16A7.65,7.65,0,0,1,85.31,48.05L48.05,85.31A7.65,7.65,0,0,1,37.23,74.5L74.5,37.23ZM62.1,89.05A7.65,7.65,0,0,1,72.91,99.87l-12.7,12.71a35.37,35.37,0,0,1-49.76.14l-.28-.27a35.38,35.38,0,0,1,.13-49.78L23,50A7.65,7.65,0,1,1,33.83,60.78L21.12,73.49a20.09,20.09,0,0,0,0,28.25l0,0a20.07,20.07,0,0,0,28.27,0L62.1,89.05Z" />
                </svg>
              </span>
              {ResumeDetails.personal?.linkedin ||
                DEFAULT_RESUME_DATA.personal.linkedin}
            </div>
          </div>

          {/* Professional Summary */}
          <div style={styles.section}>
            <div style={styles.sectionTitle}>Summary</div>
            <p style={styles.resumeSummary}>
              {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
            </p>
          </div>

          {/* Skills */}
          <div style={styles.section}>
            <div style={styles.sectionTitle}>Skills</div>
            <div style={{ display: "flex", gap: "10px" }}>
              {(ResumeDetails.skills?.length > 0
                ? ResumeDetails.skills
                : DEFAULT_RESUME_DATA.skills
              ).map((skill, index) => (
                <div key={index} style={styles.bullet}>
                  <TbPointFilled style={{ color: theme.primaryColor }} />{" "}
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div style={styles.section}>
            <div style={styles.sectionTitle}>Education</div>
            {(ResumeDetails.education?.length > 0
              ? ResumeDetails.education
              : DEFAULT_RESUME_DATA.education
            ).map((edu, index) => (
              <div key={index} style={{ marginBottom: "12px" }}>
                <div style={styles.degree}>{edu.degree}</div>
                <div style={styles.institution}>{edu.institution}</div>
                <div style={styles.dateRange}>
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

          {ResumeDetails.experience?.length > 0 && (
            <div style={styles.section}>
              <div style={styles.sectionTitle}>Work Experience</div>
              {(ResumeDetails.experience?.length > 0
                ? ResumeDetails.experience
                : DEFAULT_RESUME_DATA.experience
              ).map((exp, index) => (
                <div key={index} style={{ marginBottom: "12px" }}>
                  <div style={styles.jobTitle}>{exp.jobTitle}</div>
                  <div style={styles.company}>{exp.companyName}</div>
                  <div style={styles.workDetails}>
                    {exp.location} | {exp.workType} |{" "}
                    {exp.startDate && exp.endDate
                      ? `${new Date(exp.startDate).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })} - ${new Date(exp.endDate).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            year: "numeric",
                          }
                        )}`
                      : "Dates not provided"}
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

          {/* Projects */}
          <div style={styles.section}>
            <div style={styles.sectionTitle}>Projects</div>
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
                <div style={styles.techStack}>
                  <b>Technologies:</b> {project.technologies}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div style={styles.section}>
            <div style={styles.sectionTitle}>Certifications</div>
            {(ResumeDetails.certifications?.length > 0
              ? ResumeDetails.certifications
              : DEFAULT_RESUME_DATA.certifications
            ).map((cert, index) => (
              <div key={index} style={styles.bullet}>
                <GoDotFill />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Template1;
