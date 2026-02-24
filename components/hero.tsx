import { CodeXml, Download, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="w-3/4 mx-auto min-h-[60vh] flex flex-col items-center justify-center py-8">
      {/* Status Badge */}
      <div className="bg-card border border-primary text-primary tracking-widest font-bold rounded-full py-1 px-4 flex items-center justify-center gap-2 text-sm mb-10">
        <span className="relative flex size-3">
          <span className="absolute inline-flex w-full h-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex size-3 bg-primary rounded-full" />
        </span>
        <span>Available for Work</span>
      </div>
      {/* Heading */}
      <h1 className="text-6xl font-extrabold tracking-tight">
        <span className="text-gradient">Wahyu</span> Esya Nasution
      </h1>
      <span className="my-6 text-slate-500 tracking-wide">
        Next.js • React • TypeScript
      </span>
      {/* Details */}
      <div className="flex items-center justify-center gap-1">
        <CodeXml className="text-primary" />
        <span className="font-semibold">Frontend Developer</span>
      </div>
      {/* CTA */}
      <div className="flex items-center justify-center gap-6 mt-14">
        <Button className="w-40">
          <Download /> Download CV
        </Button>
        <Button variant="secondary" className="w-40">
          <Mail />
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default Hero;
