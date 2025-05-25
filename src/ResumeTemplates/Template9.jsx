import React, { useRef } from "react";
import { useSelector } from "react-redux";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaCertificate,
} from "react-icons/fa";
import DownloadController from "../Resume/DownloadController";

const DEFAULT_RESUME_DATA = {
  personal: {
    name: "Ajay Parmar",
    jobTitle: "MERN Stack Developer",
    email: "ajay.parmar@example.com",
    phone: "+91 987-654-3210",
    linkedin: "linkedin.com/in/ajay-parmar",
  },
  summary:
    "Dynamic MERN Stack Developer with expertise in building scalable web applications using MongoDB, Express.js, React, and Node.js. Spearheaded projects like an AI Resume Builder, enhancing user experience and efficiency. Passionate about delivering innovative, high-performance solutions.",
  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "ITM Vocational University, Vadodara",
      gpa: "3.8/4.0",
      educationStartDate: "2018-08-01",
      educationEndDate: "2022-06-30",
    },
  ],
  experience: [
    {
      companyName: "TechCorp Solutions",
      jobTitle: "Full-Stack Developer",
      location: "Vadodara, India",
      remote: false,
      workType: "Full-time",
      startDate: "2022-07-01",
      endDate: "Present",
      description:
        "Led development of MERN stack applications with a focus on performance optimization.\n- Designed a real-time analytics dashboard using React and Node.js.\n- Reduced API response time by 35% through optimized MongoDB queries.\n- Mentored junior developers in adopting best practices.",
    },
  ],
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  certifications: [
    "AWS Certified Developer – Associate",
    "MongoDB Certified Developer",
    "React Professional Certification",
  ],
  projects: [
    {
      projectTitle: "AI Resume Builder",
      projectDescription:
        "Developed a full-stack web application to create dynamic, ATS-friendly resumes.\n- Built responsive UI with React and Tailwind CSS.\n- Integrated AI-driven content suggestions via Node.js and APIs.\n- Implemented secure MongoDB storage for user data.",
      technologies: "React, Node.js, MongoDB, Tailwind CSS, AI APIs",
      link: "https://github.com/ajayparmar/ai-resume-builder",
    },
  ],
};

function Template9() {
  const ResumeDetails = useSelector(
    (state) => state.resume || DEFAULT_RESUME_DATA
  );
  const resumeRef = useRef(null);
  const { fontName } = useSelector(
    (state) => state.FontSlice?.fontFamily || { fontName: "Manrope" }
  );
  const { body, heading, label, name, subheading } = useSelector(
    (state) => state.FontSlice?.fontSize
  );
  const theme = useSelector((state) => state.theme);
  const styles = {
    container: {
      fontFamily: fontName || "Manrope, sans-serif",
      width: "794px",
      minHeight: "1123px",
      backgroundColor: "#ffffff",
      boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
      padding: "28px",
      position: "relative",
    },
    header: {
      backgroundColor: theme.primaryColor || "#0f172a",
      color: "#ffffff",
      padding: "24px",
      borderRadius: "10px",
      marginBottom: "24px",
      textAlign: "center",
    },
    name: {
      fontSize: name || "32px",
      fontWeight: "800",
      marginBottom: "8px",
    },
    contactContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "24px",
      flexWrap: "wrap",
      fontSize: body || "14px",
      marginTop: "8px",
    },
    jobTitle: {
      fontSize: subheading || "16px",
      fontWeight: "500",
      marginRight: "24px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: "#e5e7eb",
      transition: "color 0.3s ease",
    },
    contactItemHover: {
      color: theme.accentColor || "#ca8a04",
    },
    contactIcon: {
      fontSize: "16px",
      color: "white",
    },
    section: {
      marginBottom: "24px",
    },
    sectionTitle: {
      fontSize: heading || "20px",
      fontWeight: "700",
      color: theme.primaryColor || "#0f172a",
      paddingLeft: "12px",
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    skillContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
    },
    skillTag: {
      backgroundColor: "#f3f4f6",
      padding: "6px 12px",
      borderRadius: "16px",
      fontSize: label || "12px",
      fontWeight: "500",
      color: theme.primaryColor || "#0f172a",
      transition: "background-color 0.3s ease, transform 0.2s ease",
      cursor: "pointer",
    },
    skillTagHover: {
      backgroundColor: theme.accentColor || "#ca8a04",
      color: "#ffffff",
      transform: "scale(1.05)",
    },
    bulletList: {
      paddingLeft: "24px",
      listStyleType: "disc",
      fontSize: body || "14px",
      color: "#1f2937",
      marginTop: "10px",
    },
    description: {
      fontSize: body || "14px",
      color: "#1f2937",
      lineHeight: "1.7",
    },
    subSection: {
      marginBottom: "18px",
    },
    subTitle: {
      fontSize: subheading || "16px",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "6px",
    },
    meta: {
      fontSize: label || "12px",
      color: "#6b7280",
      marginBottom: "6px",
    },
    gpa: {
      fontSize: label || "12px",
      color: theme.accentColor || "#ca8a04",
      fontWeight: "500",
    },
    link: {
      fontSize: body || "14px",
      color: theme.accentColor,
      textDecoration: "none",
      transition: "text-decoration 0.3s ease",
    },
    linkHover: {
      textDecoration: "underline",
    },
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <DownloadController
        resumeRef={resumeRef}
        fileName="EnhancedMERNResume.pdf"
      />
      <div style={styles.container} ref={resumeRef} id="resume">
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.name}>
            {ResumeDetails.personal?.name || DEFAULT_RESUME_DATA.personal.name}
          </h1>
          <span style={styles.jobTitle}>
            {ResumeDetails.personal?.jobTitle ||
              DEFAULT_RESUME_DATA.personal.jobTitle}
          </span>
          <div style={styles.contactContainer}>
            <div
              style={styles.contactItem}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = styles.contactItemHover.color)
              }
            >
              <FaPhone style={styles.contactIcon} />
              <span>
                {ResumeDetails.personal?.phone ||
                  DEFAULT_RESUME_DATA.personal.phone}
              </span>
            </div>
            <div
              style={styles.contactItem}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = styles.contactItemHover.color)
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "#e5e7eb")}
            >
              <FaEnvelope style={styles.contactIcon} />
              <span>
                {ResumeDetails.personal?.email ||
                  DEFAULT_RESUME_DATA.personal.email}
              </span>
            </div>
            <div
              style={styles.contactItem}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = styles.contactItemHover.color)
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "#e5e7eb")}
            >
              <FaLinkedin style={styles.contactIcon} />
              <a
                href={
                  ResumeDetails.personal?.linkedin ||
                  DEFAULT_RESUME_DATA.personal.linkedin
                }
                style={styles.link}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration =
                    styles.linkHover.textDecoration)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                {ResumeDetails.personal?.linkedin ||
                  DEFAULT_RESUME_DATA.personal.linkedin}
              </a>
            </div>
          </div>
        </div>
        {/* Summary */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>
            <FaUser /> Professional Summary
          </h3>
          <p style={styles.description}>
            {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
          </p>
        </div>
        {/* Skills */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>
            <FaCode /> Skills
          </h3>
          <div style={styles.skillContainer}>
            {(ResumeDetails.skills?.length > 0
              ? ResumeDetails.skills
              : DEFAULT_RESUME_DATA.skills
            ).map((skill, index) => (
              <div
                key={index}
                style={styles.skillTag}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    styles.skillTagHover.backgroundColor;
                  e.currentTarget.style.color = styles.skillTagHover.color;
                  e.currentTarget.style.transform =
                    styles.skillTagHover.transform;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f3f4f6";
                  e.currentTarget.style.color = theme.primaryColor || "#0f172a";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        {/* Experience */}
        {ResumeDetails.experience?.length > 0 && (
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>
              <FaBriefcase /> Work Experience
            </h3>
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
          <h3 style={styles.sectionTitle}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill={theme.primaryColor}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5C3 3.89543 3.89543 3 5 3H9L11 5H19C20.1046 5 21 5.89543 21 7V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
                stroke={theme.primaryColor}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            Projects
          </h3>
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
        {/* Education */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>
            <FaGraduationCap /> Education
          </h3>
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
        {/* Certifications */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>
            <FaCertificate /> Certifications
          </h3>
          <ul style={styles.bulletList}>
            {(ResumeDetails.certifications?.length > 0
              ? ResumeDetails.certifications
              : DEFAULT_RESUME_DATA.certifications
            ).map((cert, index) => (
              <li key={index} style={styles.description}>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Template9;
