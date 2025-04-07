import { cx } from "../../utils/cx";
import { InputProps } from "./types";

export const Input = ({ className, hasError, ...restProps }: InputProps) => (
  <input
    className={cx(
      "inline-block w-full bg-slate-200 hover:bg-slate-300 transition-colors cursor-pointer py-2 px-3 text-slate-950 font-bold rounded",
      hasError && "bg-red-300 hover:bg-red-400",
      className
    )}
    {...restProps}
  />
);
