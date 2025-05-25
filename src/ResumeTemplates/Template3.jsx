import React, { useRef } from "react";
import { useSelector } from "react-redux";
import DownloadController from "../Resume/DownloadController";

// Default resume data - same as original
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

function Template3() {
  const ResumeDetails = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#2D3748",
  }; // Professional dark gray as default
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};

  // ATS-Optimized Resume Styles
  const styles = {
    container: {
      fontFamily: fontName || "'Arial', 'Helvetica', sans-serif", // Standard font for ATS compatibility
      width: "794px",
      height: "1123px",
      backgroundColor: "#ffffff",
      padding: "35px 35px",
      boxSizing: "border-box",
      color: "#1A202C",
      position: "relative",
    },
    header: {
      marginBottom: "20px",
      borderBottom: "2px solid #E2E8F0",
      paddingBottom: "15px",
    },
    name: {
      fontSize: name || "28px",
      fontWeight: "700",
      color: "#1A202C",
      margin: "0 0 4px 0",
      textAlign: "center",
    },
    role: {
      fontSize: subheading || "18px",
      fontWeight: "600",
      color: theme.primaryColor,
      marginBottom: "8px",
      textAlign: "center",
    },
    contactInfo: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "20px",
      fontSize: body || "12px",
      color: "#4A5568",
      marginTop: "10px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
    },
    contentContainer: {
      display: "flex",
      gap: "30px",
    },
    column: {
      flex: 1,
    },
    section: {
      marginBottom: "20px",
    },
    sectionTitle: {
      fontSize: heading || "16px",
      fontWeight: "700",
      color: "#1A202C",
      marginBottom: "15px",
      borderBottom: "1px solid #E2E8F0",
      paddingBottom: "5px",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    sectionSubtitle: {
      fontSize: subheading || "14px",
      fontWeight: "600",
      color: theme.primaryColor,
      marginBottom: "5px",
    },
    summary: {
      fontSize: body || "13px",
      lineHeight: "1.5",
      color: "#4A5568",
      marginBottom: "15px",
    },
    experienceItem: {
      marginBottom: "18px",
    },
    experienceHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "6px",
    },
    company: {
      fontWeight: "600",
      color: "#1A202C",
      fontSize: subheading || "15px",
    },
    jobTitle: {
      fontSize: body || "14px",
      fontWeight: "500",
      color: "#4A5568",
      marginBottom: "3px",
    },
    duration: {
      fontSize: label || "12px",
      color: "#718096",
      textAlign: "right",
    },
    location: {
      fontSize: label || "12px",
      color: "#718096",
      marginBottom: "5px",
    },
    descriptionList: {
      margin: "0",
      paddingLeft: "18px",
      fontSize: body || "13px",
      color: "#4A5568",
    },
    descriptionItem: {
      marginBottom: "4px",
    },
    educationItem: {
      marginBottom: "15px",
    },
    degree: {
      fontSize: body || "14px",
      fontWeight: "500",
      color: "#4A5568",
      marginBottom: "3px",
    },
    institution: {
      fontSize: body || "14px",
      fontWeight: "600",
      color: "#1A202C",
      marginBottom: "3px",
    },
    projectItem: {
      marginBottom: "15px",
    },
    projectTitle: {
      fontSize: subheading || "14px",
      fontWeight: "600",
      color: "#1A202C",
      marginBottom: "5px",
    },
    technologies: {
      fontSize: label || "12px",
      color: "#718096",
      marginTop: "5px",
      fontStyle: "italic",
    },
    skillsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px 15px",
    },
    skillItem: {
      fontSize: body || "13px",
      color: "#4A5568",
    },
    bulletPoint: {
      color: theme.primaryColor,
      marginRight: "5px",
      fontSize: "12px",
    },
    certificationsList: {
      margin: "0",
      paddingLeft: "0",
      listStyleType: "none",
    },
    certificationItem: {
      fontSize: body || "13px",
      color: "#4A5568",
      marginBottom: "5px",
      paddingLeft: "12px",
      position: "relative",
    },
    certBullet: {
      position: "absolute",
      left: "0",
      top: "6px",
      width: "5px",
      height: "5px",
      backgroundColor: theme.primaryColor,
      borderRadius: "50%",
    },
    description: {
      fontSize: body || "13px",
      color: "#4a5568",
      lineHeight: "1.5",
      marginTop: "5px",
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
      <DownloadController
        resumeRef={resumeRef}
        fileName="ATS_Optimized_Resume.pdf"
      />

      {/* Resume Container */}
      <div
        style={styles.container}
        className="template-container scale-50 md:scale-100 transform origin-top-left m-1 md:m-0"
        ref={resumeRef}
        id="resume"
      >
        {/* Header with Name, Title and Contact Info */}
        <div style={styles.header}>
          <h1 style={styles.name}>
            {ResumeDetails.personal?.name || DEFAULT_RESUME_DATA.personal.name}
          </h1>
          <div style={styles.role}>
            {ResumeDetails.personal?.jobTitle ||
              DEFAULT_RESUME_DATA.personal.jobTitle}
          </div>
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              {ResumeDetails.personal?.phone ||
                DEFAULT_RESUME_DATA.personal.phone}
            </div>
            <div style={styles.contactItem}>|</div>
            <div style={styles.contactItem}>
              {ResumeDetails.personal?.email ||
                DEFAULT_RESUME_DATA.personal.email}
            </div>
            <div style={styles.contactItem}>|</div>
            <div style={styles.contactItem}>
              {ResumeDetails.personal?.linkedin ||
                DEFAULT_RESUME_DATA.personal.linkedin}
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Professional Summary</div>
          <p style={styles.summary}>
            {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
          </p>
        </div>

        {/* Two-column layout for content */}
        <div style={styles.contentContainer}>
          {/* Left Column */}
          <div style={styles.column}>
            {ResumeDetails.experience?.length > 0 && (
              <div style={styles.section}>
                <div style={styles.sectionTitle}>Professional Experience</div>

                {(ResumeDetails.experience?.length > 0
                  ? ResumeDetails.experience
                  : DEFAULT_RESUME_DATA.experience
                ).map((exp, idx) => (
                  <div key={`exp-${idx}`} style={styles.experienceItem}>
                    <div style={styles.experienceHeader}>
                      <div>
                        <div style={styles.company}>{exp.companyName}</div>
                        <div style={styles.jobTitle}>{exp.jobTitle}</div>
                        <div style={styles.location}>
                          {exp.location} {exp.remote ? "(Remote)" : ""} •{" "}
                          {exp.workType}
                        </div>
                      </div>
                      <div style={styles.duration}>
                        {new Date(exp.startDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}{" "}
                        -
                        {exp.endDate === "Present"
                          ? " Present"
                          : ` ${new Date(exp.endDate).toLocaleDateString(
                              "en-US",
                              { year: "numeric", month: "short" }
                            )}`}
                      </div>
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

            {/* Projects Section */}
            <div style={styles.section}>
              <div style={styles.sectionTitle}>Key Projects</div>

              {(ResumeDetails.projects?.length > 0
                ? ResumeDetails.projects
                : DEFAULT_RESUME_DATA.projects
              ).map((project, idx) => (
                <div key={`proj-${idx}`} style={styles.projectItem}>
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

                  <div style={styles.technologies}>
                    <strong>Technologies:</strong> {project.technologies}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div style={styles.column}>
            {/* Skills Section */}
            <div style={styles.section}>
              <div style={styles.sectionTitle}>Skills</div>
              <div style={styles.skillsContainer}>
                {(ResumeDetails.skills?.length > 0
                  ? ResumeDetails.skills
                  : DEFAULT_RESUME_DATA.skills
                ).map((skill, idx) => (
                  <div key={idx} style={styles.skillItem}>
                    <span style={styles.bulletPoint}>•</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div style={styles.section}>
              <div style={styles.sectionTitle}>Education</div>

              {(ResumeDetails.education?.length > 0
                ? ResumeDetails.education
                : DEFAULT_RESUME_DATA.education
              ).map((edu, idx) => (
                <div key={idx} style={styles.educationItem}>
                  <div style={styles.experienceHeader}>
                    <div>
                      <div style={styles.institution}>{edu.institution}</div>
                      <div style={styles.degree}>{edu.degree}</div>
                      <div style={styles.location}>GPA: {edu.gpa}</div>
                    </div>
                    <div style={styles.duration}>
                      {new Date(edu.educationStartDate).getFullYear()} -{" "}
                      {new Date(edu.educationEndDate).getFullYear()}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Section */}
            <div style={styles.section}>
              <div style={styles.sectionTitle}>Certifications</div>

              <ul style={styles.certificationsList}>
                {(ResumeDetails.certifications?.length > 0
                  ? ResumeDetails.certifications
                  : DEFAULT_RESUME_DATA.certifications
                ).map((cert, idx) => (
                  <li key={idx} style={styles.certificationItem}>
                    <span style={styles.certBullet}></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template3;
