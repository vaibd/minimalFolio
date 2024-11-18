import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateTimePassed = (startDate: string) => {
  const start = new Date(startDate);
  const now = new Date();

  const years = now.getFullYear() - start.getFullYear();
  const months = now.getMonth() - start.getMonth();

  let adjustedYears = years;
  let adjustedMonths = months + 2;

  if (adjustedMonths < 0) {
    adjustedYears = years - 1;
    adjustedMonths = adjustedMonths + 12;
  } else if (adjustedMonths >= 12) {
    adjustedYears += 1;
    adjustedMonths = adjustedMonths - 12;
  }

  return adjustedMonths === 0
    ? `${adjustedYears} years`
    : `${adjustedYears} yrs ${adjustedMonths} months`;
};
