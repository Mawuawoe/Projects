import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import TrustedBy from "./component/TrustedBy";
import Services from "./component/Services";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
    </div>
  );
};

export default App;
