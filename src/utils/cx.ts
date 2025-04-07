import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export const cx = (...classNames: ClassValue[]) =>
  twMerge(clsx(...classNames));
