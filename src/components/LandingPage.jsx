import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h2>Learning Hooks</h2>
      <Link to="./hooks/usestate">UseState</Link>
      <Link to="./hooks/useref">UseRef</Link>
      <Link to="./hooks/usecontext">UseContext</Link>
      <Link to="./hooks/usememo">UseMemo</Link>
      <Link to="./hooks/useeffect">UseEffect</Link>
    </div>
  );
}

export default LandingPage;
