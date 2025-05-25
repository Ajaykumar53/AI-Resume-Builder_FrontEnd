import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { resetResume, setFile } from "../store/ResumeData";

function ResumeDialog({ Style, isOpen, iconStyle, width, Template, layout }) {
  const [open, setOpen] = useState(false);
  const [resumeName, setResumeName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!resumeName.trim()) {
      alert("Please enter a resume name");
      return;
    }

    dispatch(resetResume());
    dispatch(
      setFile({ fileName: resumeName, layout: layout, Template: Template })
    );
    setOpen(false);
    navigate("/user/edit-resume");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className={`${Style} ${isOpen && ""} ${width}`}
          onClick={(e) => {
            e.stopPropagation(); // Prevent parent click
            setOpen(true);
          }}
        >
          <RiAddLine className={iconStyle} />
          {isOpen ? "Create Resume" : ""}
        </div>
      </DialogTrigger>

      <DialogContent className="bg-white sm:max-w-3xl w-full rounded-sm shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto hide-scrollbar">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-2xl font-bold text-gray-900 text-left">
            Create Your Resume
          </DialogTitle>
          <DialogDescription className="text-gray-600 mt-1 text-left">
            Enter your details to create a new resume
          </DialogDescription>
        </DialogHeader>
        <hr />
        <div className="px-6 py-4 space-y-6">
          <div className="space-y-1">
            <label
              htmlFor="resumename"
              className="block text-sm font-medium text-gray-700"
            >
              Resume Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="resumename"
              value={resumeName}
              onChange={(e) => setResumeName(e.target.value)}
              className="w-full px-4 py-2 rounded-sm border border-gray-300 focus:border-[#1d4ed8] focus:ring focus:ring-blue-200 outline-none transition"
              placeholder="e.g., JohnDoe_Resume"
            />
          </div>
        </div>

        <DialogFooter className="px-6 py-4 border-t border-gray-100">
          <Button
            type="button"
            className={`w-full py-2.5 rounded-sm font-medium transition-colors ${
              resumeName.trim()
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
            onClick={handleContinue}
            disabled={!resumeName.trim()}
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ResumeDialog;
