import { useState } from "react";
import { MdDownload } from "react-icons/md";

const DownloadResumeButton = ({ onDownload }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleClick = async () => {
    setIsDownloading(true); // ⏳ Start loading
    try {
      await onDownload(); // 🧠 Your actual download logic from backend
    } catch (error) {
    } finally {
      setIsDownloading(false); // ✅ Stop loading once done
    }
  };

  return (
    <button
      disabled={isDownloading}
      onClick={handleClick}
      className={`w-full h-12 px-6 ${
        isDownloading
          ? "bg-stone-700 cursor-wait"
          : "bg-stone-800 hover:bg-opacity-90 cursor-pointer"
      } text-white font-semibold text-[18px] border-2 border-[#eae7dc] rounded-md transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex justify-center items-center gap-2`}
    >
      {isDownloading ? (
        <>
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 018 8h-4l3.5 3.5L20 12h-4a8 8 0 01-8 8v-4l-3.5 3.5L4 20v-4a8 8 0 010-8z"
            ></path>
          </svg>
          Preparing PDF...
        </>
      ) : (
        <>
          <MdDownload className="text-white" />
          Download
        </>
      )}
    </button>
  );
};

export default DownloadResumeButton;
