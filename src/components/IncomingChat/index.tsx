import React, { ReactElement } from "react";
import style from "./incoming-chat.module.css";

interface Props {
  message: String;
  previousIsSame: Boolean;
}

function SideFlag(): ReactElement {
  return (
    <span
      data-testid="tail-in"
      data-icon="tail-in"
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
          fill="#0000000"
          d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
        ></path>
        <path
          fill="currentColor"
          d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
        ></path>
      </svg>
    </span>
  );
}

export default function RightChat({
  message,
  previousIsSame,
}: Props): ReactElement {
  return (
    <div className={style["incoming-chat-wrapper"]}>
      {!previousIsSame ? <SideFlag /> : null}
      <div className={style["incoming-chat"]}>
        <h1>Hemang Nakarani</h1>
        <h2>{message}</h2>
        <h2 className={style["time-stamp"]}>5:41 PM</h2>
      </div>
    </div>
  );
}
