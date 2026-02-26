import { CodeXml, Download } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 min-h-[55vh] flex flex-col items-center justify-center py-8">
      {/* Status Badge */}
      <div className="bg-card border border-primary text-primary tracking-widest font-bold rounded-full py-1 px-4 flex items-center justify-center gap-2 text-sm mb-10">
        <span className="relative flex size-3">
          <span className="absolute inline-flex w-full h-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex size-3 bg-primary rounded-full" />
        </span>
        <span>Available for Work</span>
      </div>
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center">
        <span className="text-gradient">Wahyu</span> Esya Nasution
      </h1>
      <span className="my-6 text-slate-500 tracking-wide text-center">
        Next.js • TypeScript • 1+ Year Experience
      </span>
      {/* Details */}
      <div className="flex items-center justify-center gap-1">
        <CodeXml className="text-primary" />
        <span className="font-semibold">Frontend Developer</span>
      </div>
      {/* CTA */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <Button className="w-40">
          <Download /> Resume
        </Button>
      </div>
    </div>
  );
};

export default Hero;
