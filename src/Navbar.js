import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/MLDashboard" className="site-title">
        TEMG4940C ML Dashboard
      </Link>
      <ul className="navlist">
        <CustomLink to="/Explore">Exploratory Data Analysis</CustomLink>
        <CustomLink to="/Evaluate">Evaluation</CustomLink>
        <CustomLink to="/Interpret">Interpretation</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
