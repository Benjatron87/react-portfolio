import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="container d-flex wrapper justify-content-center">{props.children}</div>;
}

export default Wrapper;