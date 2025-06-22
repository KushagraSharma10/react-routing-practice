import React from "react";

import Nav from "./components/Nav";
import MainRoutes from "./components/MainRoutes";

const App = () => {
  return (
    <div className="w-full h-screen text-white bg-zinc-800 px-[15vw]">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
