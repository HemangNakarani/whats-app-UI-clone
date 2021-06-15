import React, { ReactElement } from "react";
import style from "./style.module.css";

export default function index(): ReactElement {
  return <div className={style["chat-area"]}></div>;
}
