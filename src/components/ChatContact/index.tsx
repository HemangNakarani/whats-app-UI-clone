import React, { ReactElement, useState } from "react";
import style from "./style.module.css";

function Mute(): ReactElement {
  return (
    <span data-testid="muted" data-icon="muted">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 18"
        width="16"
        height="18"
      >
        <path
          fill="currentColor"
          d="M11.52 9.206c0-1.4-.778-2.567-1.944-3.111v1.711L11.52 9.75v-.544zm1.945 0c0 .7-.156 1.4-.389 2.022l1.167 1.167c.544-.933.778-2.1.778-3.267 0-3.344-2.333-6.144-5.444-6.844v1.633c2.255.778 3.888 2.8 3.888 5.289zm-11.433-7L1.02 3.217l3.656 3.656H1.02v4.667h3.111l3.889 3.889v-5.211l3.344 3.344c-.544.389-1.089.7-1.789.933v1.633a6.64 6.64 0 0 0 2.878-1.4l1.556 1.556 1.011-1.011-7-7-5.988-6.067zm5.988.778L6.387 4.617 8.02 6.25V2.984z"
        ></path>
      </svg>
    </span>
  );
}

function Pin(): ReactElement {
  return (
    <span data-testid="pinned" data-icon="pinned">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19 19"
        width="19"
        height="19"
      >
        <path
          fill="currentColor"
          d="M9.5 18.419C4.574 18.419.581 14.426.581 9.5S4.574.581 9.5.581s8.919 3.993 8.919 8.919-3.993 8.919-8.919 8.919zm2.121-5.708l-.082-2.99 1.647-1.963a1.583 1.583 0 0 0-.188-2.232l-.32-.269a1.58 1.58 0 0 0-2.231.203L8.803 7.42l-2.964.439a.282.282 0 0 0-.14.496l5.458 4.58c.186.157.47.019.464-.224zM5.62 13.994a.504.504 0 0 0 .688-.038l2.204-2.307-1.085-.91-1.889 2.571a.504.504 0 0 0 .082.684z"
        ></path>
      </svg>
    </span>
  );
}

function MenuArrow(): ReactElement {
  return (
    <span data-testid="down" data-icon="down">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19 20"
        width="19"
        height="20"
      >
        <path
          fill="currentColor"
          d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"
        ></path>
      </svg>
    </span>
  );
}

interface PropsOfNumberOfMessages {
  number: Number;
}
function NumberOfMessages({ number }: PropsOfNumberOfMessages): ReactElement {
  return (
    <div className={style["number-of-messages"]}>
      <h3>{number}</h3>
    </div>
  );
}

interface Props {
  isMute: Boolean;
  messages: Number;
  isPinned: Boolean;
}
export default function Index({
  isMute,
  messages,
  isPinned,
}: Props): ReactElement {
  const [arrowVisible, setArrowVisible] = useState<boolean>(false);

  return (
    <div>
      <div
        className={style["chat-contact-menu-item"]}
        onMouseEnter={() => {
          setArrowVisible(true);
        }}
        onMouseLeave={() => {
          setArrowVisible(false);
        }}
      >
        <div className={style["img-box"]}>
          <img
            alt="Me"
            src="https://avatars.githubusercontent.com/u/45796208?v=4"
          />
        </div>
        <div className={style["item-content"]}>
          <div className={style["row"]}>
            <h1 className={style["add-ellipsis"]}>G-211 (Vaccinated)</h1>
            <h3 className={style["add-ellipsis"]}>5:41 PM</h3>
          </div>
          <div className={style["row"]}>
            <h2 className={style["add-ellipsis"]}>
              Registration on first come first serve(d) basis.
            </h2>
            {isMute ? <Mute /> : null}
            {isPinned ? <Pin /> : null}
            {messages !== 0 ? <NumberOfMessages number={messages} /> : null}
            {arrowVisible ? <MenuArrow /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
