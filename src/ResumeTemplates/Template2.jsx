// import React from "react";
// import { useRef } from "react";
// import { FaLinkedin, FaSquarePhone } from "react-icons/fa6";
// import { GoDotFill } from "react-icons/go";
// import { MdMarkEmailUnread } from "react-icons/md";
// import { useSelector } from "react-redux";
// import DownloadController from "../Resume/DownloadController";

// function Template2() {
//   const styles = {
//     resumeContainer: {
//       fontFamily: fontName,
//       width: "794px",
//       height: "1123px",
//       backgroundColor: "white",
//       padding: "20px",
//       boxSizing: "border-box",
//     },

//     newInnerSection: {
//       display: "flex",
//     },
//     leftSection: {
//       width: "30%",
//       padding: "20px 10px 20px 10px",
//     },
//     rightSection: {
//       width: "70%",
//       padding: "40px 10px",
//       height: "1080px",
//     },
//     resumeName: {
//       fontSize: name,
//       fontWeight: "bold",
//       padding: "2px 0",
//       color: theme.primaryColor,
//     },
//     role: {
//       fontSize: "16px",
//       fontWeight: "bold",
//     },
//     degree: {
//       fontSize: "14px",
//       fontWeight: "400",
//       marginBottom: "3px",
//       marginTop: "8px",
//       display: "flex",
//       justifyContent: "space-between",
//     },
//     grade: {
//       fontSize: "12px",
//       color: "#4FD1C5",
//     },
//     header: {
//       padding: "0px 10px 24px 10px",
//       marginBottom: "20px",
//     },
//     sectionTitle: {
//       fontSize: heading,
//       fontWeight: "bold",
//       paddingBottom: "4px",
//       color: theme.primaryColor,
//     },
//     resumeSummary: {
//       borderBottom: `2px solid ${theme.primaryColor}`,
//       marginBottom: "10px",
//       paddingBottom: "10px",
//       fontSize: body,
//     },
//     resumeSection: {
//       fontSize: body,
//       fontWeight: "400",
//       paddingBottom: "10px",
//       marginBottom: "10px",
//       borderBottom: `2px solid ${theme.primaryColor}`,
//     },
//     between: {
//       display: "flex",
//       justifyContent: "space-between",
//     },
//     projectTitle: {
//       fontSize: subheading,
//       fontWeight: "bold",
//       paddingBottom: "4px",
//       color: "#57534e",
//     },
//     bullet: {
//       display: "flex",
//       gap: "8px",
//     },
//     contactItem: {
//       display: "flex",
//       alignItems: "center",
//       marginBottom: "10px",
//       fontSize: body,
//     },
//     contactIcon: {
//       marginRight: "10px",
//       color: theme.primaryColor,
//       fontSize: "14px",
//     },
//   };
//   return (
//     <>
//       <DownloadController resumeRef={resumeRef} fileName="template3.pdf" />

//       <div className="resume-wrapper hide-scrollbar">
//         <div
//           style={styles.resumeContainer}
//           className="Template scale-50 md:scale-100 transform origin-top-left md:m-0 m-1"
//           ref={resumeRef}
//           id="resume"
//         >
//           <div style={styles.newInnerSection}>
//             <div style={styles.leftSection}>
//               {/* Contact Section */}
//               <div style={{ marginBottom: "25px" }}>
//                 <div style={styles.sectionTitle}>Contact</div>
//                 <div>
//                   <div style={styles.contactItem}>
//                     <span style={styles.contactIcon}>
//                       <FaSquarePhone />
//                     </span>
//                     {ResumeDetails.contactInformation.phone}
//                   </div>
//                   <div style={styles.contactItem}>
//                     <span style={styles.contactIcon}>
//                       <MdMarkEmailUnread />
//                     </span>
//                     {ResumeDetails.contactInformation.email}
//                   </div>
//                   <div style={styles.contactItem}>
//                     <span style={styles.contactIcon}>
//                       <FaLinkedin />
//                     </span>
//                     {ResumeDetails.contactInformation.address}
//                   </div>
//                 </div>
//               </div>
//               {/* Skills Section  */}
//               <div style={styles.resumeSection}>
//                 <div style={styles.sectionTitle}>Skills</div>
//                 <div style={styles.skills}>
//                   {ResumeDetails.skills.map((skill) => (
//                     <div key={skill} style={styles.bullet}>
//                       <GoDotFill /> {skill}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               {/* Education Section  */}
//               <div style={styles.resumeSection}>
//                 <div style={styles.sectionTitle}>Education</div>
//                 {ResumeDetails.education.map((education) => (
//                   <div key={education.degree}>
//                     <div style={styles.degree}>
//                       <div>{education.degree}</div>
//                       <div>{education.graduationYear}</div>
//                     </div>
//                     <div>{education.institution}</div>
//                     <div style={styles.grade}>{education.grade} Grade</div>
//                   </div>
//                 ))}
//               </div>
//               {/* Certification */}
//               <div style={styles.resumeSection}>
//                 <div style={styles.sectionTitle}>Certifications</div>
//                 {ResumeDetails.certifications.map((certificate) => (
//                   <div key={certificate.name} style={styles.bullet}>
//                     <GoDotFill />
//                     <div>{certificate.name}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div style={styles.rightSection}>
//               <div style={styles.header}>
//                 <div style={styles.resumeName}>{ResumeDetails.name}</div>
//                 <div style={styles.role}>{ResumeDetails.jobRole}</div>
//               </div>
//               <div style={styles.resumeSummary}>
//                 <div style={styles.sectionTitle}>Professional Summary</div>
//                 <p>{ResumeDetails.summary}</p>
//               </div>

//               {/* Experience Section */}
//               {ResumeDetails.experience.length > 0 && (
//                 <div style={styles.resumeSection}>
//                   <div style={styles.sectionTitle}>Work Experience</div>

//                   {ResumeDetails.experience.map((job) => (
//                     <div key={job.jobTitle}>
//                       <div style={styles.between}>
//                         <div>{job.jobTitle}</div>
//                         <div>{job.Duration}</div>
//                       </div>
//                       <div style={styles.projectTitle}>{job.company}</div>
//                       <div>{job.jobDetails.jobDescription}</div>
//                       <ul
//                         style={{ paddingLeft: "20px", listStyleType: "disc" }}
//                       >
//                         {job.jobDetails.responsibilities.map(
//                           (responsibility, index) => (
//                             <li key={index}>
//                               <span>{responsibility}</span>
//                             </li>
//                           )
//                         )}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* ProjectSection */}
//               <div style={styles.resumeSection}>
//                 <div style={styles.sectionTitle}>Projects</div>
//                 {ResumeDetails.projects.map((project) => (
//                   <div key={project.name}>
//                     <div style={styles.projectTitle}>{project.name}</div>
//                     <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
//                       {project.description.map((desc, index) => (
//                         <li key={index}>
//                           <span>{desc}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Template2;

import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { FaPhoneSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
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

function Template2() {
  const ResumeDetails = useSelector((state) => state.resume);
  const { fileName, layout } = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
  const { fontName } =
    useSelector((state) => state.FontSlice?.fontFamily) || {};
  const { body, heading, label, name, subheading } =
    useSelector((state) => state.FontSlice?.fontSize) || {};
  const theme = useSelector((state) => state.theme) || {
    primaryColor: "#2c3e50",
  };

  const styles = {
    resumeContainer: {
      fontFamily: fontName || "Arial, sans-serif",
      width: "794px",
      height: "1123px",
      backgroundColor: "#ffffff",
      padding: "25px",
      boxSizing: "border-box",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    innerSection: {
      display: "flex",
      height: "100%",
    },
    leftSection: {
      width: "35%",
      padding: "20px",
      backgroundColor: "#f7fafc",
      borderRight: "1px solid #e2e8f0",
    },
    rightSection: {
      width: "65%",
      padding: "20px 25px",
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
      borderBottom: `2px solid ${theme.primaryColor || "#2c3e50"}`,
      paddingBottom: "4px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
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
    resumeSection: {
      marginBottom: "15px",
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
      gap: "6px",
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
  };

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
          <div style={styles.innerSection}>
            {/* Left Section */}
            <div style={styles.leftSection}>
              {/* Contact */}
              <div style={styles.resumeSection}>
                <div style={styles.sectionTitle}>Contact</div>
                <div style={styles.contactItem}>
                  <span style={styles.contactIcon}>
                    <FaPhoneSquare />
                  </span>
                  {ResumeDetails.personal?.phone ||
                    DEFAULT_RESUME_DATA.personal.phone}
                </div>
                <div style={styles.contactItem}>
                  <span style={styles.contactIcon}>
                    <MdEmail />
                  </span>
                  {ResumeDetails.personal?.email ||
                    DEFAULT_RESUME_DATA.personal.email}
                </div>
                <div style={styles.contactItem}>
                  <span style={styles.contactIcon}>
                    <FaLinkedin />
                  </span>
                  {ResumeDetails.personal?.linkedin ||
                    DEFAULT_RESUME_DATA.personal.linkedin}
                </div>
              </div>

              {/* Skills */}
              <div style={styles.resumeSection}>
                <div style={styles.sectionTitle}>Skills</div>
                {(ResumeDetails.skills?.length > 0
                  ? ResumeDetails.skills
                  : DEFAULT_RESUME_DATA.skills
                ).map((skill, index) => (
                  <div key={index} style={styles.bullet}>
                    <GoDotFill style={{ marginTop: "4px" }} />
                    {skill}
                  </div>
                ))}
              </div>

              {/* Education */}
              <div style={styles.resumeSection}>
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

              {/* Certifications */}
              <div style={styles.resumeSection}>
                <div style={styles.sectionTitle}>Certifications</div>
                {(ResumeDetails.certifications?.length > 0
                  ? ResumeDetails.certifications
                  : DEFAULT_RESUME_DATA.certifications
                ).map((cert, index) => (
                  <div key={index} style={styles.bullet}>
                    <GoDotFill style={{ marginTop: "4px" }} />
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div style={styles.rightSection}>
              {/* Header */}
              <div style={{ marginBottom: "15px" }}>
                <div style={styles.resumeName}>
                  {ResumeDetails.personal?.name ||
                    DEFAULT_RESUME_DATA.personal.name}
                </div>
                <div style={styles.role}>
                  {ResumeDetails.personal?.jobTitle ||
                    DEFAULT_RESUME_DATA.personal.jobTitle}
                </div>
              </div>

              {/* Summary */}
              <div style={styles.resumeSection}>
                <div style={styles.sectionTitle}>Professional Summary</div>
                <p style={styles.resumeSummary}>
                  {ResumeDetails.summary || DEFAULT_RESUME_DATA.summary}
                </p>
              </div>

              {ResumeDetails.experience?.length > 0 && (
                <div style={styles.resumeSection}>
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
              <div style={styles.resumeSection}>
                <div style={styles.sectionTitle}>Projects</div>
                {(ResumeDetails.projects?.length > 0
                  ? ResumeDetails.projects
                  : DEFAULT_RESUME_DATA.projects
                ).map((project, index) => (
                  <div key={index} style={{ marginBottom: "12px" }}>
                    <div style={styles.projectTitle}>
                      {project.projectTitle}
                    </div>

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
      </div>
    </>
  );
}

export default Template2;
