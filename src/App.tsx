import React from "react";
import { Rune } from "./components/Rune";
import { saveBlob } from "./utils/saveBlob";

function App() {
  const svgRef = React.useRef<SVGSVGElement>(null);
  const value = 9938;

  const handleDownloadClick = () => {
    const svgElement = svgRef.current;

    if (svgElement) {
      saveBlob(
        new XMLSerializer().serializeToString(svgElement),
        `${value}.svg`,
        "image/svg+xml"
      );
    }
  };

  return (
    <div>
      <Rune ref={svgRef} value={value} />
      <button onClick={handleDownloadClick}>Download SVG</button>
    </div>
  );
}

export default App;
