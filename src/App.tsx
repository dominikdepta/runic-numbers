import { DicesIcon, HardDriveDownloadIcon } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Rune } from "./components/Rune";
import { randomRange } from "./utils/randomRange";
import { saveBlob } from "./utils/saveBlob";

export const App = () => {
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [inputValue, setInputValue] = React.useState(`${randomRange(0, 9999)}`);
  const [hasError, setHasError] = React.useState(false);

  const value = React.useMemo(() => {
    const parsedValue = parseInt(inputValue, 10);

    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 9999) {
      return parsedValue;
    }

    return 0;
  }, [inputValue]);

  const shuffle = () => {
    let count = 0;

    const iid = setInterval(() => {
      count++;
      setInputValue(`${randomRange(0, 9999)}`);

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
        `${value}.svg`,
        "image/svg+xml"
      );
    }
  };

  const handleRandomClick = () => {
    shuffle();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const parsedValue = parseInt(inputValue, 10);

    setInputValue(inputValue);

    if (hasError) {
      setHasError(false);
    }

    if (isNaN(parsedValue) || parsedValue < 0 || parsedValue > 9999) {
      setHasError(true);
    }
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
        <Rune ref={svgRef} value={value} className="mb-8" />

        <div className="flex flex-col md:flex-row gap-2 w-full mb-2">
          <Input
            hasError={hasError}
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
          Type a number between 0 and 9999 to generate a rune.
        </span>
      </div>
    </div>
  );
};
