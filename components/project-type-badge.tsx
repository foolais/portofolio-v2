"use client";

import { projectTypes } from "@/lib/data";
import { Badge } from "./ui/badge";
import { useState } from "react";

const ProjectTypeBadge = () => {
  const [selectedType, setSelectedType] = useState("All");
  return (
    <div className="flex gap-2 max-w-11/12 flex-wrap">
      {projectTypes.map((p) => (
        <Badge
          key={p}
          variant={selectedType === p ? "default" : "outline"}
          onClick={() => setSelectedType(p)}
          className="cursor-pointer scale-animate text-sm hover:scale-110 transition-all duration-300 border-primary"
        >
          {p}
        </Badge>
      ))}
    </div>
  );
};

export default ProjectTypeBadge;
