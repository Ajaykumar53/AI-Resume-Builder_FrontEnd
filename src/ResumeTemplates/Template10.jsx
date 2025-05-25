import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { FaRegLightbulb, FaRegChartBar, FaCode } from "react-icons/fa";
import DownloadController from "../Resume/DownloadController";

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
        "Developed an AI-powered resume builder\n- Implemented NLP-based keyword optimization\n- Achieved 98% ATS compatibility",
      technologies: "React, Node.js, MongoDB",
    },
  ],
};

function Template10() {
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#1d4ed8",
  };

  // 🎨 Dynamic Styles Object
  const styles = {
    container: {
      fontFamily: fontName || "Arial, sans-serif",
      width: "794px",
      height: "1123px",
      backgroundColor: "#ffffff",
      padding: "25px",
      boxSizing: "border-box",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    header: {
      borderBottom: `2px solid ${theme.primaryColor}`,
      paddingBottom: "20px",
      marginBottom: "20px",
    },
    name: {
      fontSize: name || "26px",
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
    bulletList: {
      paddingLeft: "15px",
      listStyleType: "disc",
      fontSize: body || "13px",
      color: "#4a5568",
      marginTop: "5px",
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
      backgroundColor: theme.primaryColor + "10", // 10% opacity
      color: theme.primaryColor,
    },
    experienceSection: {
      display: "flex",
      gap: "20px",
      marginBottom: "15px",
      paddingBottom: "10px",
      borderBottom: "1px solid #e2e8f0",
    },
    dateRange: {
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
    divider: {
      height: "1px",
      backgroundColor: "#e2e8f0",
      margin: "20px 0",
    },
    certification: {
      fontSize: body || "13px",
      color: "#4a5568",
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
              {ResumeDetails.personal?.phone ||
                DEFAULT_RESUME_DATA.personal.phone}
            </div>
            <div style={styles.contactItem}>
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
              {ResumeDetails.personal?.email ||
                DEFAULT_RESUME_DATA.personal.email}
            </div>
            <div style={styles.contactItem}>
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
                  <li key={idx} style={{ marginBottom: "6px" }}>
                    {cert}
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
                  <div key={idx} style={styles.experienceSection}>
                    <div style={styles.dateRange}>
                      {new Date(exp.startDate).getFullYear()} -{" "}
                      {exp.endDate === "Present"
                        ? "Present"
                        : new Date(exp.endDate).getFullYear()}
                    </div>
                    <div>
                      <div style={styles.jobTitle}>{exp.jobTitle}</div>
                      <div style={styles.company}>
                        {exp.companyName} | {exp.location} | {exp.workType}
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
                <div key={idx}>
                  <div style={styles.jobTitle}>{edu.degree}</div>
                  <div style={{ ...styles.company, color: theme.primaryColor }}>
                    {edu.institution}
                  </div>
                  <div style={styles.dateRange}>
                    {new Date(edu.educationStartDate).getFullYear()} -{" "}
                    {new Date(edu.educationEndDate).getFullYear()}
                  </div>
                  <div style={styles.description}>GPA: {edu.gpa}</div>
                </div>
              ))}
            </div>

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
          </div>
        </div>
      </div>
    </>
  );
}

export default Template10;
