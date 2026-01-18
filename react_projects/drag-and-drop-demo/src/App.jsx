import React, { useState } from "react";
import DropZone from "./compo/DropZone";

const App = () => {
  const [location, setLocation] = useState("left");
  return (
    <div className="flex gap-6">
      <DropZone
        title="Left Zone"
        zone="left"
        location={location}
        setLocation={setLocation}
      />
      <DropZone
        title="Right Zone"
        zone="right"
        location={location}
        setLocation={setLocation}
      />
    </div>
  );
};

export default App;
