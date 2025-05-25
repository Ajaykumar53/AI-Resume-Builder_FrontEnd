import React from "react";
import { useSelector } from "react-redux";
import ResumeActionsMenu from "../Resume/ResumeActionMenus";
import Template1 from "../ResumeTemplates/Template1";
import Template2 from "../ResumeTemplates/Template2";
import Template3 from "../ResumeTemplates/Template3";
import Template4 from "../ResumeTemplates/Template4";
import Template5 from "../ResumeTemplates/Template5";
import Template6 from "../ResumeTemplates/Template6";
import Template7 from "../ResumeTemplates/Template7";
import Template8 from "../ResumeTemplates/Template8";
import Template9 from "../ResumeTemplates/Template9";
import Template10 from "../ResumeTemplates/Template10";
import Template11 from "../ResumeTemplates/Template11";
import Template12 from "../ResumeTemplates/Template12";
import Template13 from "../ResumeTemplates/Template13";
import Template14 from "../ResumeTemplates/Template14";
import Template15 from "../ResumeTemplates/Template15";
import Template16 from "../ResumeTemplates/Template16";
import Template17 from "../ResumeTemplates/Template17";
import Template18 from "../ResumeTemplates/Template18";
import Template19 from "../ResumeTemplates/Template19";
import Template20 from "../ResumeTemplates/Template20";
import Template21 from "../ResumeTemplates/Template21";
import Template22 from "../ResumeTemplates/Template22";
import Template23 from "../ResumeTemplates/Template23";
import ScrollToTop from "../DashBoard/ScrollTopContainer";
import { SheetDemo } from "../Resume/TemplatesChanger";

function EditResumePage() {
  const { layout } = useSelector((state) => state.resume);
  const selectedComponent = useSelector((state) => state.resume.Template);
  const { fileName } = useSelector((state) => state.resume);
  console.log(fileName);
  const renderTemplate = () => {
    switch (selectedComponent) {
      case "Template1":
        return <Template1 />;
      case "Template2":
        return <Template2 />;
      case "Template3":
        return <Template3 />;
      case "Template4":
        return <Template4 />;
      case "Template5":
        return <Template5 />;
      case "Template6":
        return <Template6 />;
      case "Template7":
        return <Template7 />;
      case "Template8":
        return <Template8 />;
      case "Template9":
        return <Template9 />;
      case "Template10":
        return <Template10 />;
      case "Template11":
        return <Template11 />;
      case "Template12":
        return <Template12 />;
      case "Template13":
        return <Template13 />;
      case "Template14":
        return <Template14 />;
      case "Template15":
        return <Template15 />;
      case "Template16":
        return <Template16 />;
      case "Template17":
        return <Template17 />;
      case "Template18":
        return <Template18 />;
      case "Template19":
        return <Template19 />;
      case "Template20":
        return <Template20 />;
      case "Template21":
        return <Template21 />;
      case "Template22":
        return <Template22 />;
      case "Template23":
        return <Template23 />;
      default:
        return <Template1 />;
    }
  };

  return (
    <div className="w-full h-full hide-scrollbar">
      <ScrollToTop />
      <div className="md:w-[70%] px-4 py-2 bg-blue-50  md:bg-transparent md:border-b-2  md:px-6 md:py-3 flex justify-between items-center">
        <p
          className="text-blue-600 text-lg font-semibold truncate md:text-xl md:font-bold"
          title={fileName}
        >
          {fileName}
        </p>{" "}
        <SheetDemo />
      </div>
      <div className="mt-4 md:ml-[40px]">{renderTemplate()}</div>
    </div>
  );
}

export default EditResumePage;
