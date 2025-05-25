import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ResumeSelector() {
  const templates = [
    "Modern Resume",
    "Creative Resume",
    "Executive Resume",
    "Minimal Resume",
    "Classic Resume",
    "Technical Resume",
    "Marketing Resume",
    "Creative Freelancer Resume",
  ];

  return (
    <Select>
      <SelectTrigger className="md:w-[370px] w-[420px] bg-stone-200 ring-2 ring-white text-stone-800 font-medium">
        <SelectValue placeholder="Select a Template" />
      </SelectTrigger>

      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectLabel className="text-stone-600 font-semibold">
            Templates
          </SelectLabel>

          {templates.map((template) => (
            <SelectItem
              key={template}
              value={template}
              className="group relative font-medium focus:bg-stone-800 focus:text-white data-[state=checked]:bg-stone-800 data-[state=checked]:text-white"
            >
              <span className="group-hover:bg-stone-800 group-hover:text-white transition-all duration-200 w-full block px-2 py-1 rounded">
                {template}
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
