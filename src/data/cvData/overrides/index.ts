import type { CVData } from "../master";
import { computerEngStudentCV } from "./computer-eng-student";
import { fullstackDeveloperCV } from "./fullstack-developer";
import { webDeveloperCV } from "./web-developer";
import { frontendDeveloperCV } from "./frontend-developer";
import { softwareDeveloperCV } from "./software-developer";
import { frontendBackendDeveloperCV } from "./frontend-backend-developer";

export const cvVariants: Record<string, CVData> = {
  "computer-eng-student": computerEngStudentCV,
  "fullstack-developer": fullstackDeveloperCV,
  "web-developer": webDeveloperCV,
  "frontend-developer": frontendDeveloperCV,
  "software-developer": softwareDeveloperCV,
  "frontend-backend-developer": frontendBackendDeveloperCV,
};
