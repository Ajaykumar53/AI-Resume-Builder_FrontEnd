import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { FaPhone, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import DownloadController from "../Resume/DownloadController";

const DEFAULT_RESUME_DATA = {
  personal: {
    name: "Your Name",
    jobTitle: "Data Scientist",
    email: "rahul.patel@example.com",
    phone: "+91 91234 *****",
    linkedin: "linkedin.com/in/rahul-patel",
  },
  summary:
    "Data Scientist with 5+ years of experience in machine learning and data analytics, driving business insights through Python, TensorFlow, and SQL.",
  education: [
    {
      degree: "M.Tech in Data Science",
      institution: "IIT Bombay",
      gpa: "9.0/10",
      educationStartDate: "2018-08-01",
      educationEndDate: "2020-05-31",
    },
  ],
  experience: [
    {
      companyName: "DataTech Solutions",
      jobTitle: "Senior Data Scientist",
      location: "Pune, India",
      remote: false,
      workType: "Full-time",
      startDate: "2021-09-01",
      endDate: "2025-05-01",
      description:
        "- Built predictive models using TensorFlow, improving accuracy by 35%.\n- Analyzed large datasets with SQL, optimizing marketing strategies.\n- Collaborated with cross-functional teams to deploy ML pipelines.",
    },
  ],
  skills: ["Python", "TensorFlow", "SQL", "Pandas", "Tableau"],
  certifications: [
    "Google Data Analytics Professional",
    "Microsoft Azure AI Engineer",
  ],
  projects: [
    {
      projectTitle: "Customer Churn Prediction",
      projectDescription:
        "- Developed a churn prediction model using Python and XGBoost.\n- Reduced customer churn by 20% through targeted interventions.\n- Visualized insights using Tableau dashboards.",
      technologies: "Python, XGBoost, Tableau",
    },
  ],
};

function Template7() {
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, name } =
    useSelector((state) => state.FontSlice?.fontSize) || {};
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#333333", // Charcoal
  };

  const styles = {
    container: {
      fontFamily: fontName || "Arial, sans-serif",
      width: "794px",
      height: "1123px",
      padding: "30px",
      backgroundColor: "#FFFFFF", // White
      boxSizing: "border-box",
      color: theme.primaryColor || "#333333",
    },
    header: {
      marginBottom: "20px",
      paddingBottom: "12px",
      borderBottom: "1px solid black", // Coral
    },
    headerName: {
      fontSize: name || "26px",
      fontWeight: "700",
      color: theme.primaryColor || "#333333",
      marginBottom: "4px",
    },
    headerTitle: {
      fontSize: heading || "14px",
      fontWeight: "500",
      color: "#4B5563",
      marginBottom: "8px",
    },
    contactContainer: {
      display: "flex",
      gap: "16px",
      fontSize: body || "11px",
      color: "#374151",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    contactIcon: {
      color: theme.primaryColor, // Coral
      fontSize: "12px",
    },
    section: {
      marginBottom: "16px",
    },
    sectionTitle: {
      fontSize: heading || "14px",
      fontWeight: "600",
      color: theme.primaryColor || "#333333",
      textTransform: "uppercase",
      marginBottom: "8px",
      borderBottom: "1px solid black", // Coral
    },
    summaryText: {
      fontSize: body || "11px",
      lineHeight: "1.6",
      color: "#374151",
    },
    skillsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
    },
    skillItem: {
      fontSize: body || "11px",
      color: "#374151",
      padding: "4px 10px",
      border: `1px solid ${theme.primaryColor}`, // Coral
    },
    experienceItem: {
      marginBottom: "12px",
    },
    jobTitle: {
      fontSize: heading || "13px",
      fontWeight: "600",
      color: "#333333",
    },
    companyDetails: {
      fontSize: body || "11px",
      color: "#6B7280",
      marginBottom: "4px",
    },
    jobDescription: {
      fontSize: body || "11px",
      color: "#374151",
      lineHeight: "1.6",
      paddingLeft: "16px",
      listStyleType: "disc",
    },
    educationItem: {
      marginBottom: "12px",
    },
    degree: {
      fontSize: heading || "13px",
      fontWeight: "600",
      color: "#333333",
    },
    educationDetails: {
      fontSize: body || "11px",
      color: "#374151",
    },
    projectItem: {
      marginBottom: "12px",
    },
    projectTitle: {
      fontSize: heading || "13px",
      fontWeight: "600",
      color: "#333333",
    },
    projectDescription: {
      fontSize: body || "11px",
      color: "#374151",
      lineHeight: "1.6",
      paddingLeft: "16px",
      listStyleType: "disc",
    },
    certificationItem: {
      fontSize: body || "11px",
      color: "#374151",
      marginBottom: "6px",
    },
    linkedIn: {
      color: "#374151",
      textDecoration: "none",
    },
  };

  return (
    <>
      <DownloadController resumeRef={resumeRef} fileName="Template6.pdf" />
      <div
        ref={resumeRef}
        style={styles.container}
        id="resume"
        className="h-[1123px] w-[794px]  scale-50 md:scale-100 transform origin-top-left md:m-0 m-1"
      >
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerName}>
            {ResumeDetails.personal?.name || DEFAULT_RESUME_DATA.personal.name}
          </div>
          <div style={styles.headerTitle}>
            {ResumeDetails.personal?.jobTitle ||
              DEFAULT_RESUME_DATA.personal.jobTitle}
          </div>
          <div style={styles.contactContainer}>
            <span style={styles.contactItem}>
              <FaPhone style={styles.contactIcon} />
              {ResumeDetails.personal?.phone ||
                DEFAULT_RESUME_DATA.personal.phone}
            </span>
            <span style={styles.contactItem}>
              <MdEmail style={styles.contactIcon} />
              {ResumeDetails.personal?.email ||
                DEFAULT_RESUME_DATA.personal.email}
            </span>
            <span style={styles.contactItem}>
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

        {/* Professional Summary */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Professional Summary</div>
          <p style={styles.summaryText}>
            {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
          </p>
        </div>

        {/* Skills */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Skills</div>
          <div style={styles.skillsContainer}>
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

        {/* Work Experience */}
        {ResumeDetails.experience?.length > 0 && (
          <div style={styles.section}>
            <div style={styles.sectionTitle}>Work Experience</div>
            {(ResumeDetails.experience?.length > 0
              ? ResumeDetails.experience
              : DEFAULT_RESUME_DATA.experience
            ).map((exp) => (
              <div style={styles.experienceItem} key={exp.jobTitle}>
                <div style={styles.jobTitle}>{exp.jobTitle}</div>
                <div style={styles.companyDetails}>
                  {exp.companyName} | {exp.location} | {exp.workType} |{" "}
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
                <ul style={styles.jobDescription}>
                  {exp.description
                    .split("\n")
                    .filter((line) => line.trim())
                    .map((line, i) => (
                      <li key={`${line}-${i}`}>
                        {line.replace(/^-/, "").trim()}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Education</div>
          {(ResumeDetails.education?.length > 0
            ? ResumeDetails.education
            : DEFAULT_RESUME_DATA.education
          ).map((edu) => (
            <div style={styles.educationItem} key={edu.degree}>
              <div style={styles.degree}>{edu.degree}</div>
              <div style={styles.educationDetails}>
                {edu.institution} |{" "}
                {edu.educationStartDate && edu.educationEndDate
                  ? `${new Date(
                      edu.educationStartDate
                    ).getFullYear()} - ${new Date(
                      edu.educationEndDate
                    ).getFullYear()}`
                  : "Dates not provided"}{" "}
                | GPA: {edu.gpa}
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Projects</div>
          {(ResumeDetails.projects?.length > 0
            ? ResumeDetails.projects
            : DEFAULT_RESUME_DATA.projects
          ).map((project) => (
            <div style={styles.projectItem} key={project.projectTitle}>
              <div style={styles.projectTitle}>{project.projectTitle}</div>
              <ul style={styles.projectDescription}>
                {project.projectDescription
                  .split("\n")
                  .filter((line) => line.trim())
                  .map((line, i) => (
                    <li key={`${line}-${i}`}>
                      {line.replace(/^-/, "").trim()}
                    </li>
                  ))}
              </ul>
              <div style={styles.educationDetails}>
                <strong>Technologies:</strong> {project.technologies}
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
          ).map((cert) => (
            <div style={styles.certificationItem} key={cert}>
              - {cert}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Template7;
