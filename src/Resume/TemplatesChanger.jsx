import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import templates from "../ResumeTemplates/Templates";
import ResumeDialog from "../components/TemplatesDialog";
import { useDispatch } from "react-redux";
import { templateChange } from "../store/ResumeData";

gsap.registerPlugin(ScrollTrigger);

export function SheetDemo() {
  const templatesRef = useRef(null);
  const dispatch = useDispatch();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="px-4 py-2  text-sm font-semibold text-blue-600 border-blue-200 hover:bg-blue-100 hover:text-blue-700 transition-all duration-200"
        >
          Explore Templates
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto max-h-screen bg-white p-4 sm:p-6">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl sm:text-2xl font-bold text-gray-900">
            Resume Templates
          </SheetTitle>
        </SheetHeader>
        <div
          ref={templatesRef}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 sm:gap-6"
        >
          {templates.map((temp) => (
            <div
              key={temp.id}
              className="template-card relative bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md  ring-1 ring-blue-200 hover:-translate-y-0.5"
            >
              <div className="relative aspect-[2/3] w-full">
                <img
                  src={`/Templates/${temp.component}.png`}
                  alt={temp.component}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <SheetClose asChild>
                  <button
                    className="bg-[#1d4ed8] cursor-pointer text-white text-sm mx-3 rounded-sm mb-2 py-1 px-2"
                    onClick={() => {
                      dispatch(templateChange({ Template: temp.component }));
                    }}
                  >
                    Select Template
                  </button>
                </SheetClose>
              </div>
            </div>
          ))}
        </div>
        <SheetClose asChild>
          <Button className="mt-6 w-full bg-blue-600 text-white hover:bg-blue-700 rounded-full text-sm font-semibold py-2">
            Close
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
