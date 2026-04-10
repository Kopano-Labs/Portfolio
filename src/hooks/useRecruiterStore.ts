import type { RecruiterInfo } from "../data/cvConfig";

const STORAGE_KEY = "portfolio_recruiter_downloads";

export function useRecruiterStore() {
  const save = (info: RecruiterInfo) => {
    const existing: RecruiterInfo[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );
    existing.push(info);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  };

  const getAll = (): RecruiterInfo[] =>
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

  return { save, getAll };
}
