import { DicesIcon, HardDriveDownloadIcon } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Rune } from "./components/Rune";
import { RUNE_NUMBER_MAX, RUNE_NUMBER_MIN } from "./constants";
import { isRuneValueValid, randomRuneValue } from "./functions";
import { saveBlob } from "./utils/saveBlob";

export const App = () => {
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [inputValue, setInputValue] = React.useState(randomRuneValue);

  const parsedInputValue = React.useMemo(() => {
    const parsedValue = Number(inputValue);

    return isRuneValueValid(parsedValue) ? parsedValue : null;
  }, [inputValue]);

  const runeValue = React.useMemo(() => {
    return parsedInputValue || 0;
  }, [parsedInputValue]);

  const shuffle = () => {
    let count = 0;

    const iid = setInterval(() => {
      count++;
      setInputValue(randomRuneValue());

      if (count >= 10) {
        clearInterval(iid);
      }
    }, 25);

    return iid;
  };

  const handleDownloadClick = () => {
    const svgElement = svgRef.current?.cloneNode(true) as SVGSVGElement;

    if (svgElement) {
      svgElement.removeAttribute("class");
      svgElement.setAttribute("stroke", "black");

      saveBlob(
        new XMLSerializer().serializeToString(svgElement),
        `${runeValue}.svg`,
        "image/svg+xml"
      );
    }
  };

  const handleRandomClick = () => {
    shuffle();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const iid = shuffle();

    return () => {
      clearInterval(iid);
    };
  }, []);

  return (
    <div className="w-full h-screen p-4 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-sm">
        <Rune ref={svgRef} value={runeValue} className="mb-8" />

        <div className="flex flex-col md:flex-row gap-2 w-full mb-2">
          <Input
            hasError={!parsedInputValue}
            className="w-full"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button title="Generate a random rune" onClick={handleRandomClick}>
            <DicesIcon />
          </Button>
          <Button onClick={handleDownloadClick} title="Save the rune as SVG">
            <HardDriveDownloadIcon />
          </Button>
        </div>

        <span className="text-slate-400 text-xcs font-thin">
          Type a number between {RUNE_NUMBER_MIN} and {RUNE_NUMBER_MAX} to
          generate a rune.
        </span>
      </div>
    </div>
  );
};
