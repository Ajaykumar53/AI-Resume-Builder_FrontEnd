import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { FaSquarePhone, FaLinkedin } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
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

function Template5() {
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#1A2A44", // Navy Blue
  };

  const styles = {
    container: {
      fontFamily: fontName || "Arial, sans-serif",
      width: "794px",
      height: "1123px",
      padding: "24px",
      backgroundColor: "#F9FAFB", // Soft White
      boxSizing: "border-box",
    },
    innerSection: {
      display: "flex",
      borderRadius: "8px",
      overflow: "hidden",
      backgroundColor: "#FFFFFF",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    },
    leftSection: {
      width: "35%",
      backgroundColor: "#E6ECEF", // Light Gray
      padding: "28px 20px",
      display: "flex",
      height: "full",
      flexDirection: "column",
      gap: "20px",
    },
    rightSection: {
      width: "65%",
      padding: "32px 28px",
      height: "1080px",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      backgroundColor: "#FFFFFF",
    },
    headerSection: {
      paddingBottom: "16px",
      borderBottom: "2px solid #2B6777", // Teal
    },
    headerName: {
      fontSize: name || "28px",
      fontWeight: "700",
      color: theme.primaryColor || "#1A2A44",
      marginBottom: "4px",
    },
    headerTitle: {
      fontSize: subheading || "16px",
      fontWeight: "500",
      color: "#4B5563",
    },
    sectionTitle: {
      fontSize: heading || "14px",
      fontWeight: "600",
      color: theme.primaryColor || "#1A2A44",
      textTransform: "uppercase",
      marginBottom: "8px",
      borderBottom: "1px solid #E5E7EB",
      paddingBottom: "4px",
    },
    contactItems: {
      fontSize: body || "12px",
      color: "#374151",
      marginBottom: "8px",
      display: "flex",
      gap: "8px",
      alignItems: "center",
    },
    contactIcon: {
      color: "#2B6777", // Teal
      fontSize: "14px",
    },
    skillDetails: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
    },
    skillItem: {
      backgroundColor: "#2B6777", // Teal
      color: "#FFFFFF",
      fontSize: label || "11px",
      padding: "4px 12px",
      borderRadius: "12px",
      fontWeight: "500",
    },
    summaryDetails: {
      fontSize: body || "12px",
      color: "#374151",
      lineHeight: "1.6",
    },
    jobContainer: {
      fontSize: body || "12px",
      color: "#374151",
      padding: "12px 0",
      borderBottom: "1px solid #E5E7EB",
    },
    jobTitle: {
      fontSize: subheading || "13px",
      fontWeight: "600",
      color: "#1A2A44",
    },
    companyName: {
      fontSize: body || "12px",
      fontWeight: "500",
      color: "#6B7280",
    },
    jobDuration: {
      fontSize: label || "11px",
      color: "#9CA3AF",
      marginBottom: "6px",
    },
    jobDescription: {
      fontSize: body || "12px",
      color: "#374151",
      lineHeight: "1.6",
    },
    projectCard: {
      padding: "10px 0",
      borderBottom: "1px solid #E5E7EB",
    },
    projectName: {
      fontSize: subheading || "13px",
      fontWeight: "600",
      color: "#1A2A44",
    },
    projectDescription: {
      fontSize: body || "12px",
      color: "#374151",
      lineHeight: "1.6",
    },
    educationDetails: {
      fontSize: body || "12px",
      color: "#374151",
      marginBottom: "12px",
    },
    educationItem: {
      fontSize: subheading || "13px",
      fontWeight: "600",
      color: "#1A2A44",
      marginBottom: "4px",
    },
    certificateDetails: {
      fontSize: body || "12px",
      color: "#374151",
      marginBottom: "6px",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    linkedIn: {
      color: "#374151",
      textDecoration: "none",
    },
  };

  return (
    <>
      <DownloadController resumeRef={resumeRef} fileName="Template5.pdf" />
      <div
        ref={resumeRef}
        style={styles.container}
        id="resume"
        className="h-[1123px] w-[794px]  scale-50 md:scale-100 transform origin-top-left md:m-0 m-1"
      >
        <div style={styles.innerSection}>
          {/* Left Section */}
          <div style={styles.leftSection}>
            {/* Contact Section */}
            <div>
              <div style={styles.sectionTitle}>Contact</div>
              <div>
                <span style={styles.contactItems}>
                  <FaSquarePhone style={styles.contactIcon} />
                  {ResumeDetails.personal?.phone ||
                    DEFAULT_RESUME_DATA.personal.phone}
                </span>
                <span style={styles.contactItems}>
                  <MdMarkEmailUnread style={styles.contactIcon} />
                  {ResumeDetails.personal?.email ||
                    DEFAULT_RESUME_DATA.personal.email}
                </span>
                <span style={styles.contactItems}>
                  <FaLinkedin style={styles.contactIcon} />
                  <a
                    style={styles.linkedIn}
                    href={`https://${
                      ResumeDetails.personal?.linkedin ||
                      DEFAULT_RESUME_DATA.personal.linkedin
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ResumeDetails.personal?.linkedin ||
                      DEFAULT_RESUME_DATA.personal.linkedin}
                  </a>
                </span>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <div style={styles.sectionTitle}>Skills</div>
              <div style={styles.skillDetails}>
                {(ResumeDetails.skills?.length > 0
                  ? ResumeDetails.skills
                  : DEFAULT_RESUME_DATA.skills
                ).map((skill) => (
                  <span key={skill} style={styles.skillItem}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <div style={styles.sectionTitle}>Certifications</div>
              {(ResumeDetails.certifications?.length > 0
                ? ResumeDetails.certifications
                : DEFAULT_RESUME_DATA.certifications
              ).map((cert) => (
                <div style={styles.certificateDetails} key={cert}>
                  <TbPointFilled style={{ marginTop: "2px" }} />
                  {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div style={styles.rightSection}>
            {/* Header Section */}
            <div style={styles.headerSection}>
              <div style={styles.headerName}>
                {ResumeDetails.personal?.name ||
                  DEFAULT_RESUME_DATA.personal.name}
              </div>
              <h3 style={styles.headerTitle}>
                {ResumeDetails.personal?.jobTitle ||
                  DEFAULT_RESUME_DATA.personal.jobTitle}
              </h3>
            </div>

            {/* Summary Section */}
            <div>
              <div style={styles.sectionTitle}>Professional Summary</div>
              <p style={styles.summaryDetails}>
                {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
              </p>
            </div>

            {/* Experience Section */}
            {ResumeDetails.experience?.length > 0 && (
              <div>
                <div style={styles.sectionTitle}>Work Experience</div>
                {(ResumeDetails.experience?.length > 0
                  ? ResumeDetails.experience
                  : DEFAULT_RESUME_DATA.experience
                ).map((exp) => (
                  <div style={styles.jobContainer} key={exp.jobTitle}>
                    <div style={styles.jobTitle}>{exp.jobTitle}</div>
                    <div style={styles.companyName}>{exp.companyName}</div>
                    <div style={styles.jobDuration}>
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
                        : "Dates not provided"}{" "}
                      | {exp.location} | {exp.workType}
                    </div>
                    <div style={styles.jobDescription}>
                      <ul
                        style={{ paddingLeft: "20px", listStyleType: "disc" }}
                      >
                        {exp.description
                          .split("\n")
                          .filter((line) => line.trim())
                          .map((line, i) => (
                            <li key={i}>{line.replace(/^-/, "").trim()}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* Education Section */}
            <div>
              <div style={styles.sectionTitle}>Education</div>
              {(ResumeDetails.education?.length > 0
                ? ResumeDetails.education
                : DEFAULT_RESUME_DATA.education
              ).map((edu) => (
                <div style={styles.educationDetails} key={edu.degree}>
                  <p style={styles.educationItem}>{edu.degree}</p>
                  <p>{edu.institution}</p>
                  <p>
                    {edu.educationStartDate && edu.educationEndDate
                      ? `${new Date(
                          edu.educationStartDate
                        ).getFullYear()} - ${new Date(
                          edu.educationEndDate
                        ).getFullYear()}`
                      : "Dates not provided"}
                  </p>
                  <p>GPA: {edu.gpa}</p>
                </div>
              ))}
            </div>

            {/* Projects Section */}
            <div>
              <div style={styles.sectionTitle}>Projects</div>
              {(ResumeDetails.projects?.length > 0
                ? ResumeDetails.projects
                : DEFAULT_RESUME_DATA.projects
              ).map((project) => (
                <div style={styles.projectCard} key={project.projectTitle}>
                  <div style={styles.projectName}>{project.projectTitle}</div>
                  <div style={styles.projectDescription}>
                    <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                      {project.projectDescription
                        .split("\n")
                        .filter((line) => line.trim())
                        .map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                    </ul>
                    <p>
                      <b>Technologies:</b> {project.technologies}
                    </p>
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

export default Template5;
