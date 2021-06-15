import React, { ReactElement } from "react";
import style from "./style.module.css";
import IncomingChat from "../IncomingChat";
import OutGoingChat from "../OutgoingChat";
import dummyChat from "../dummyChat";

interface chatType {
  message: String;
  incoming: Boolean;
  previousIsSame: Boolean;
}

export default function index(): ReactElement {
  return (
    <div className={style["chat-area"]}>
      <div>
        {dummyChat.map((chat: chatType) => {
          if (chat.incoming) {
            return (
              <IncomingChat
                message={chat.message}
                previousIsSame={chat.previousIsSame}
              />
            );
          } else {
            return (
              <OutGoingChat
                message={chat.message}
                previousIsSame={chat.previousIsSame}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
