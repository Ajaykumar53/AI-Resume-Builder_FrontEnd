// components/DownloadController.jsx
import React from "react";
import { useSelector } from "react-redux";
import ResumeActionsMenu from "./ResumeActionMenus";

const DownloadController = ({ resumeRef, fileName = "resume.pdf", height }) => {
  const { fontName, fontLink } = useSelector(
    (state) => state.FontSlice.fontFamily
  );
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const handleDownloadPdf = async () => {
    if (!resumeRef?.current) return;
    const htmlData = resumeRef.current.outerHTML;

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Resume</title>
          <link href="${fontLink}" rel="stylesheet">
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { font-family: '${fontName}'; 
line-height: 1.35;
letter-spacing: 0.8px; }
          </style>
        </head>
        <body>
          ${htmlData}
        </body>
      </html>
    `;

    try {
      const response = await fetch(`${API_URL}/download-resume`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ htmlContent }),
      });

      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {}
  };

  return <ResumeActionsMenu onDownload={handleDownloadPdf} />;
};

export default DownloadController;
