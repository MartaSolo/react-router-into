import React from "react";
import { Link, Outlet } from "react-router-dom";

const style = {
  borderBottom: "solid 1px",
  paddingBottom: "1rem",
  paddingRight: "1rem",
  display: "inline-block",
  width: "100px",
};

export const Home = (props) => {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav style={style}>
        <Link to="/invoices">Invoices</Link>{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
};
