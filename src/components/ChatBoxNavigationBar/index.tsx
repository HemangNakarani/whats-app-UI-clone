import React, { ReactElement } from "react";
import style from "./style.module.css";

export default function index(): ReactElement {
  return (
    <div className={style.nav}>
      <div className={style.dp}>
        <img
          alt="DP"
          src="https://avatars.githubusercontent.com/u/45796208?v=4"
        ></img>
      </div>
      <div className={style["chat-title-box"]}>
        <h1 className={style["add-ellipsis"]}>Hemang Nakarani</h1>
        <h2 className={style["add-ellipsis"]}>
          Student at DAIICT and Product Engineering Intern at Sprinklr
        </h2>
      </div>
      <div className={style.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            fill="currentColor"
            d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
          ></path>
        </svg>
      </div>
      <div className={style.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            fill="currentColor"
            d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
