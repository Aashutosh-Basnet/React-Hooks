import React from "react";
import { Routes, Route } from "react-router-dom";
import UseState from "./hooks/UseState";
import UseEffect from "./hooks/UseEffect";
import UseRef from "./hooks/UseRef";
import UseMemo from "./hooks/UseMemo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />{" "}
        <Route path="/usestate" element={<UseState />} />{" "}
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/usememo" element={<UseRef />} />
        <Route path="/useref" element={<UseMemo />} />
        <Route path="/usecontext" element={<UseContext />} />
      </Routes>
    </div>
  );
}

export default App;
