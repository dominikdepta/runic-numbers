import { cx } from "../../utils/cx";
import { svgLines } from "./constants";
import { RuneProps } from "./types";

export const Rune = ({ value, ref, className }: RuneProps) => {
  const thousands = Math.floor(value / 1000) * 1000;
  const hundreds = Math.floor((value % 1000) / 100) * 100;
  const tens = Math.floor((value % 100) / 10) * 10;
  const ones = value % 10;

  return (
    <svg
      ref={ref}
      width="93"
      height="135"
      viewBox="0 0 93 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx("shrink-0", className)}
    >
      {svgLines.map(
        ({ props, condition }) =>
          condition({ ones, tens, hundreds, thousands }) && (
            <line
              key={`${props.x1}${props.y1}${props.x2}${props.y2}`}
              className="stroke-slate-300"
              strokeWidth="4"
              {...props}
            />
          )
      )}
    </svg>
  );
};
