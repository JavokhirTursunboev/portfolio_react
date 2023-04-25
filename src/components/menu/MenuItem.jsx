import React from "react";
import "./menu.scss";
export default function MenuItem({ setM, text }) {
  const handlerClick = () => {
    setM(false);
  };
  return (
    <li onClick={handlerClick}>
      <a href={`#${text.toLowerCase()}`}>{text}</a>
    </li>
  );
}
