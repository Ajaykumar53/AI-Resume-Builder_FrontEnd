import React from "react";
import { useSelector } from "react-redux";
import { TbPointFilled } from "react-icons/tb";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import ResumeTemplates from "./ResumeTemplates";
import ResumeEditDialog from "./EditResume";
// import ResumeEditDialog from "../subComponents/EditResumeComponent";

function DoubleResumeTemplate() {
  const ResumeDetails = useSelector((state) => state.ResumeDetails);
  const styles = ResumeTemplates.DoubleColumResumeTemplates.Templates1;
  const resumeRef = useRef(null);

  const handleDownloadPdf = async () => {
    const htmlData = document.getElementById("resume").outerHTML;
    try {
      const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Resume</title>
  </style>

        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: Arial, sans-serif; }
          /* Inline all your ResumeTemplates.DoubleColumResumeTemplates.Templates1 styles here */
        </style>
      </head>
      <body>
        ${htmlData}
      </body>
    </html>
  `;

      const backendURL = "http://192.168.68.151:3000/download-resume";
      const response = await await fetch(backendURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ htmlContent }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {}
  };
  return (
    <>
      <div
        className={` w-full rounded-sm cursor-pointer text-stone-800 pl-[75%] -mb-[40px] pt-[50px] `}
      ></div>
      <div className="ResumeMenus fixed  left-[72dvw] top-[12dvh]  w-[25dvw] ">
        <button
          className=" w-[25dvw]  h-12   md:top-[10dvh] md:left-[55dvw] px-6 bg-stone-800 text-white font-semibold text-[18px] border-2 border-[#eae7dc] rounded-md  transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-opacity-90 "
          onClick={handleDownloadPdf}
        >
          Download
        </button>
        <ResumeEditDialog />
      </div>

      <div
        ref={resumeRef}
        style={styles.container}
        id="resume"
        className="bg-red-300 h-[1123px] w-[794px] "
      >
        <div style={styles.ResumeTemplate}>
          {/* Left Section */}
          <div style={styles.LeftSection}>
            {/* Contact Section */}
            <div>
              <div style={styles.SectionTitle}>Contact</div>
              <div style={styles.ContactDetails}>
                <span style={styles.ContactItems}>
                  <FaSquarePhone />
                  {ResumeDetails.contactInformation.phone}
                </span>
                <span style={styles.ContactItems}>
                  <MdMarkEmailUnread />
                  {ResumeDetails.contactInformation.email}
                </span>
                <span style={styles.ContactItems}>
                  <FaLinkedin />
                  {ResumeDetails.contactInformation.address}
                </span>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <div style={styles.SectionTitle}>Skills</div>
              <div style={styles.SkillDetails}>
                {ResumeDetails.skills.map((skill) => (
                  <span key={skill} style={styles.SkillItems}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div style={styles.SectionTitle}>Education</div>
              {ResumeDetails.education.map((education) => (
                <div style={styles.EducationDetails} key={education.degree}>
                  <p style={styles.EducationItems}>{education.degree}</p>
                  <p>{education.grade} Grade</p>
                  <p>{education.institution}</p>
                  <p>{education.graduationYear}</p>
                </div>
              ))}
            </div>

            {/* Certifications Section */}
            <div>
              <div style={styles.SectionTitle}>Certifications</div>
              {ResumeDetails.certifications.map((certificate) => (
                <div style={styles.CertificateDetails} key={certificate.name}>
                  <div>{certificate.name}</div>
                  <div>{certificate.institution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div style={styles.RightSection}>
            {/* Header Section */}
            <div style={styles.HeaderSection}>
              <div style={styles.HeaderName}>{ResumeDetails.name}</div>
              <h3 style={styles.HeaderTitle}>Senior Software Engineer</h3>
            </div>

            {/* Summary Section */}
            <div>
              <div style={styles.SectionTitle}>Summary</div>
              <p style={styles.SummaryDetails}>{ResumeDetails.summary}</p>
            </div>

            {/* Experience Section */}
            <div>
              <div style={styles.SectionTitle}>Experience</div>
              {ResumeDetails.experience.map((job) => (
                <div style={styles.job_container} key={job.jobTitle}>
                  <div style={styles.job_title}>{job.jobTitle}</div>
                  <div style={styles.company_name}>{job.company}</div>
                  <div style={styles.job_duration}>{job.Duration}</div>
                  <div>
                    <div>{job.jobDetails.jobDescription}</div>
                    {job.jobDetails.responsibilities.map((responsibility) => (
                      <div
                        style={styles.ResponsibilityItem}
                        key={responsibility}
                      >
                        <TbPointFilled />
                        {responsibility}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Projects Section */}
            <div>
              <div style={styles.SectionTitle}>Projects</div>
              {ResumeDetails.projects.map((project) => (
                <div style={styles.project_card} key={project.name}>
                  <div style={styles.project_name}>{project.name}</div>
                  <div style={styles.project_description}>
                    {project.description.map((desc, index) => (
                      <div style={styles.ResponsibilityItem} key={index}>
                        <TbPointFilled />
                        {desc}
                      </div>
                    ))}
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

export default DoubleResumeTemplate;
