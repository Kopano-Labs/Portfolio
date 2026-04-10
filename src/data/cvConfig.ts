import { GraduationCap, Layers, Globe, Code2, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CVRole {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  files: { pdf: string; docx: string };
}

export const CV_ROLES: CVRole[] = [
  {
    id: "computer-eng-student",
    label: "Computer Eng (Student)",
    description: "Engineering fundamentals & academic focus",
    icon: GraduationCap,
    files: {
      pdf: "/cv/computer-eng-student.pdf",
      docx: "/cv/computer-eng-student.docx",
    },
  },
  {
    id: "fullstack-developer",
    label: "Full-Stack Developer",
    description: "End-to-end MERN stack delivery",
    icon: Layers,
    files: {
      pdf: "/cv/fullstack-developer.pdf",
      docx: "/cv/fullstack-developer.docx",
    },
  },
  {
    id: "web-developer",
    label: "Web Developer",
    description: "Modern web apps & responsive UI",
    icon: Globe,
    files: {
      pdf: "/cv/web-developer.pdf",
      docx: "/cv/web-developer.docx",
    },
  },
  {
    id: "software-developer",
    label: "Software Developer",
    description: "Scalable software & clean architecture",
    icon: Code2,
    files: {
      pdf: "/cv/software-developer.pdf",
      docx: "/cv/software-developer.docx",
    },
  },
  {
    id: "frontend-backend-developer",
    label: "Front & Backend Developer",
    description: "Full-spectrum frontend + backend systems",
    icon: Server,
    files: {
      pdf: "/cv/frontend-backend-developer.pdf",
      docx: "/cv/frontend-backend-developer.docx",
    },
  },
];

export interface RecruiterInfo {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  downloadedRole: string;
  downloadedFormat: "pdf" | "docx";
  timestamp: string;
}
