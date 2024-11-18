import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h2>Learning Hooks</h2>
      <Link to="/usestate">UseState</Link>
      <Link to="/useref">UseRef</Link>
      <Link to="usecontext">UseContext</Link>
      <Link to="/usememo">UseMemo</Link>
      <Link to="/useeffect">UseEffect</Link>
    </div>
  );
}

export default LandingPage;
