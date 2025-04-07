import { cx } from "../../utils/cx";
import { isNumberMatch } from "./functions";
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
        {isNumberMatch(hundreds, [400, 500]) && (
          <line
            x1="47.4142"
            y1="89.5858"
            x2="89.8406"
            y2="132.012"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(hundreds, [300]) && (
          <line
            x1="48.5858"
            y1="132.012"
            x2="91.0122"
            y2="89.5858"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(thousands, [4000, 5000]) && (
          <line
            x1="4.58579"
            y1="131.586"
            x2="47.0122"
            y2="89.1594"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(thousands, [3000]) && (
          <line
            x1="2.41421"
            y1="89.1594"
            x2="44.8406"
            y2="131.586"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(ones, [4, 5]) && (
          <line
            x1="48.5858"
            y1="44.5858"
            x2="91.0122"
            y2="2.15938"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(ones, [3]) && (
          <line
            x1="48.4142"
            y1="2.15938"
            x2="90.8406"
            y2="44.5858"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(tens, [40, 50]) && (
          <line
            x1="3.23401"
            y1="2.58579"
            x2="45.6604"
            y2="45.0122"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(tens, [30]) && (
          <line
            x1="3.40559"
            y1="45.0122"
            x2="45.832"
            y2="2.58579"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(hundreds, [100, 500, 700, 900]) && (
          <line
            x1="48"
            y1="133"
            x2="93"
            y2="133"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(thousands, [1000, 5000, 7000, 9000]) && (
          <line
            y1="133"
            x2="45"
            y2="133"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(hundreds, [200, 800, 900]) && (
          <line
            x1="48"
            y1="89"
            x2="93"
            y2="89"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(thousands, [2000, 8000, 9000]) && (
          <line
            y1="89"
            x2="45"
            y2="89"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(ones, [2, 8, 9]) && (
          <line
            x1="48"
            y1="46"
            x2="93"
            y2="46"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(tens, [20, 80, 90]) && (
          <line
            y1="46"
            x2="45"
            y2="46"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(ones, [1, 5, 7, 9]) && (
          <line
            x1="48"
            y1="2"
            x2="93"
            y2="2"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(tens, [10, 50, 70, 90]) && (
          <line
            y1="2"
            x2="45"
            y2="2"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(hundreds, [600, 700, 800, 900]) && (
          <line
            x1="91"
            y1="90"
            x2="91"
            y2="135"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(ones, [6, 7, 8, 9]) && (
          <line
            x1="91"
            y1="8.74228e-08"
            x2="91"
            y2="45"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(thousands, [6000, 7000, 8000, 9000]) && (
          <line
            x1="2"
            y1="89"
            x2="2"
            y2="134"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(tens, [60, 70, 80, 90, 90]) && (
          <line
            x1="2"
            y1="2"
            x2="2"
            y2="47"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(0, [0]) && (
          <line
            x1="47"
            y1="90"
            x2="47"
            y2="135"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(0, [0]) && (
          <line
            x1="47"
            y1="45"
            x2="47"
            y2="90"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
        {isNumberMatch(0, [0]) && (
          <line
            x1="47"
            y1="8.74228e-08"
            x2="47"
            y2="45"
            className="stroke-slate-300"
            strokeWidth="4"
          />
        )}
    </svg>
  );
};
