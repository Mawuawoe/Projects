import React, { useState } from "react";
import { RefreshCcw } from "lucide-react";
import ColorCard from "./component/ColorCard";
import getListOfColors from "./utils/generate_random_number";

const App = () => {
  const [randomColor, setRandomColor] = useState(getListOfColors);

  function handleClick() {
    setRandomColor(getListOfColors);
  }

  return (
    <div className="bg-white w-full rounded-lg p-8 max-w-[800px] shadow-xl">
      <h1 className="text-center mb-6 text-textheading font-bold text-4xl relative after:content-[''] after:absolute after:-bottom-2 after:w-[40%] after:h-1 after:rounded-full after:bg-[#667eea] after:left-[50%] after:-translate-x-[50%]">
        Color Palette Generator
      </h1>
      <button
        onClick={handleClick}
        className="flex gap-1.5  items-center py-3 px-6 text-white bg-[linear-gradient(45deg,#667eea,#764ba2)] rounded-full font-semibold text-lg mb-8 hover:-translate-y-[2px] hover:shadow-[0_6px_10px_rgba(102,126,234,0.3)] active:translate-y-[0px] active:border-none cursor-pointer"
      >
        <RefreshCcw className="w-5 h-5 text-white" strokeWidth={3} />
        Generate Palette
      </button>
      <div
        id="palette-container"
        className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(100px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(130px,1fr))]"
      >
        {randomColor.map((color, index) => (
          <ColorCard key={index} hexColor={color} />
        ))}
      </div>
    </div>
  );
};

export default App;
