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

function Template4() {
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
    container: {
      fontFamily: fontName || "Arial, sans-serif",
      width: "794px",
      height: "1123px",
      padding: "20px",
      backgroundColor: "#fafafa",
      boxSizing: "border-box",
    },
    newInnerSection: {
      display: "flex",
      borderRadius: "12px",
      overflow: "hidden",
    },
    LeftSection: {
      width: "35%",
      backgroundColor: "#f1f5f9",
      height: "1083px",
      padding: "30px 24px",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },
    RightSection: {
      width: "65%",
      padding: "32px",
      display: "flex",
      flexDirection: "column",
      gap: "28px",
      backgroundColor: "#ffffff",
    },
    HeaderSection: {
      padding: "24px",
      borderRadius: "8px",
      borderBottom: "1px solid #e5e7eb",
    },
    HeaderName: {
      fontSize: name || "26px",
      fontWeight: "700",
      color: theme.primaryColor || "#111827",
      marginBottom: "4px",
    },
    HeaderTitle: {
      fontSize: subheading || "14px",
      fontWeight: "500",
      color: "#6b7280",
    },
    SectionTitle: {
      fontSize: heading || "13px",
      color: theme.primaryColor || "#374151",
      fontWeight: "600",
      textTransform: "uppercase",
      marginBottom: "10px",
      borderBottom: "1px solid #e5e7eb",
      paddingBottom: "4px",
    },
    ContactItems: {
      fontSize: body || "13px",
      color: "#4b5563",
      marginBottom: "6px",
      display: "flex",
      gap: "8px",
      alignItems: "center",
    },
    SkillDetails: {
      display: "flex",
      flexWrap: "wrap",
      gap: "6px",
    },
    SkillItems: {
      backgroundColor: "#e5e7eb",
      color: "#111827",
      fontSize: label || "12px",
      padding: "4px 10px",
      borderRadius: "999px",
      fontWeight: "500",
    },
    SummaryDetails: {
      fontSize: body || "13px",
      color: "#374151",
      lineHeight: "1.5",
    },
    job_container: {
      fontSize: body || "12px",
      color: "#374151",
      padding: "12px 0",
      borderBottom: "1px solid #e5e7eb",
    },
    job_title: {
      fontSize: subheading || "13px",
      fontWeight: "600",
      color: "#111827",
    },
    company_name: {
      fontSize: body || "12px",
      fontWeight: "500",
      color: "#6b7280",
    },
    job_duration: {
      fontSize: label || "11px",
      color: "#9ca3af",
      marginBottom: "6px",
    },
    job_description: {
      fontSize: body || "12px",
      color: "#4b5563",
      lineHeight: "1.5",
    },
    project_card: {
      padding: "10px 0",
      borderBottom: "1px solid #e5e7eb",
    },
    project_name: {
      fontSize: subheading || "13px",
      fontWeight: "600",
      color: "#1f2937",
    },
    project_description: {
      fontSize: body || "12px",
      color: "#4b5563",
      lineHeight: "1.5",
    },
    EducationDetails: {
      fontSize: body || "12px",
      color: "#4b5563",
      marginBottom: "12px",
    },
    EducationItems: {
      fontSize: subheading || "13px",
      fontWeight: "600",
      color: "#111827",
      marginBottom: "4px",
    },
    CertificateDetails: {
      fontSize: body || "12px",
      color: "#6b7280",
      marginBottom: "6px",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    linkedIn: {
      color: "#4b5563",
      textDecoration: "none",
    },
  };

  return (
    <>
      <DownloadController resumeRef={resumeRef} fileName="Template4.pdf" />
      <div
        ref={resumeRef}
        style={styles.container}
        id="resume"
        className="h-[1123px] w-[794px] scale-50 md:scale-100 transform origin-top-left md:m-0 m-1"
      >
        <div style={styles.newInnerSection}>
          {/* Left Section */}
          <div style={styles.LeftSection}>
            {/* Contact Section */}
            <div>
              <div style={styles.SectionTitle}>Contact</div>
              <div>
                <span style={styles.ContactItems}>
                  <FaSquarePhone />
                  {ResumeDetails.personal?.phone ||
                    DEFAULT_RESUME_DATA.personal.phone}
                </span>
                <span style={styles.ContactItems}>
                  <MdMarkEmailUnread />
                  {ResumeDetails.personal?.email ||
                    DEFAULT_RESUME_DATA.personal.email}
                </span>
                <span style={styles.ContactItems}>
                  <FaLinkedin />
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
              <div style={styles.SectionTitle}>Skills</div>
              <div style={styles.SkillDetails}>
                {(ResumeDetails.skills?.length > 0
                  ? ResumeDetails.skills
                  : DEFAULT_RESUME_DATA.skills
                ).map((skill) => (
                  <span key={skill} style={styles.SkillItems}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div style={styles.SectionTitle}>Education</div>
              {(ResumeDetails.education?.length > 0
                ? ResumeDetails.education
                : DEFAULT_RESUME_DATA.education
              ).map((edu) => (
                <div style={styles.EducationDetails} key={edu.degree}>
                  <p style={styles.EducationItems}>{edu.degree}</p>
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

            {/* Certifications Section */}
            <div>
              <div style={styles.SectionTitle}>Certifications</div>
              {(ResumeDetails.certifications?.length > 0
                ? ResumeDetails.certifications
                : DEFAULT_RESUME_DATA.certifications
              ).map((cert) => (
                <div style={styles.CertificateDetails} key={cert}>
                  <TbPointFilled style={{ marginTop: "2px" }} />
                  {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div style={styles.RightSection}>
            {/* Header Section */}
            <div style={styles.HeaderSection}>
              <div style={styles.HeaderName}>
                {ResumeDetails.personal?.name ||
                  DEFAULT_RESUME_DATA.personal.name}
              </div>
              <h3 style={styles.HeaderTitle}>
                {ResumeDetails.personal?.jobTitle ||
                  DEFAULT_RESUME_DATA.personal.jobTitle}
              </h3>
            </div>

            {/* Summary Section */}
            <div>
              <div style={styles.SectionTitle}>Summary</div>
              <p style={styles.SummaryDetails}>
                {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
              </p>
            </div>
            {ResumeDetails.experience?.length > 0 && (
              <div>
                <div style={styles.SectionTitle}>Experience</div>
                {(ResumeDetails.experience?.length > 0
                  ? ResumeDetails.experience
                  : DEFAULT_RESUME_DATA.experience
                ).map((exp) => (
                  <div style={styles.job_container} key={exp.jobTitle}>
                    <div style={styles.job_title}>{exp.jobTitle}</div>
                    <div style={styles.company_name}>{exp.companyName}</div>
                    <div style={styles.job_duration}>
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
                    <div style={styles.job_description}>
                      <p>{exp.description.split("\n")[0]}</p>
                      <ul
                        style={{ paddingLeft: "20px", listStyleType: "disc" }}
                      >
                        {exp.description
                          .split("\n")
                          .filter((line) => line.startsWith("-"))
                          .map((line, i) => (
                            <li key={i}>{line.replace("-", "").trim()}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Projects Section */}
            <div>
              <div style={styles.SectionTitle}>Projects</div>
              {(ResumeDetails.projects?.length > 0
                ? ResumeDetails.projects
                : DEFAULT_RESUME_DATA.projects
              ).map((project) => (
                <div style={styles.project_card} key={project.projectTitle}>
                  <div style={styles.project_name}>{project.projectTitle}</div>
                  <div style={styles.project_description}>
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

export default Template4;
