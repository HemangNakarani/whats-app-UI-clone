import React, { ReactElement } from "react";
import style from "./outgoing-chat.module.css";

interface Props {
  message: String;
  previousIsSame: Boolean;
}

function SideFlag(): ReactElement {
  return (
    <span
      data-testid="tail-out"
      data-icon="tail-out"
      className={style["side-flag"]}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 8 13"
        width="8"
        height="13"
      >
        <path
          opacity=".13"
          d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"
        ></path>
        <path
          fill="currentColor"
          d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
        ></path>
      </svg>
    </span>
  );
}

export default function OutgoingChat({
  message,
  previousIsSame,
}: Props): ReactElement {
  return (
    <div className={style["outgoing-chat-wrapper"]}>
      <div className={style["outgoing-chat"]}>
        <h2>{message}</h2>
        <h2 className={style["time-stamp"]}>5:42 PM</h2>
      </div>
      {!previousIsSame ? <SideFlag /> : null}
    </div>
  );
}
