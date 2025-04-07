import { cx } from "../../utils/cx";
import { ButtonProps } from "./types";

export const Button = ({ children, className, ...restProps }: ButtonProps) => (
  <button
    className={cx(
      "inline-flex justify-center items-center w-full md:w-auto bg-slate-200 hover:bg-slate-300 transition-colors cursor-pointer py-2 px-3 text-slate-950 text-center font-bold rounded",
      className
    )}
    {...restProps}
  >
    {children}
  </button>
);
