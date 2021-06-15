import React, { ReactElement } from "react";
import style from "./style.module.css";

import ChatContact from "../ChatContact";

export default function index(): ReactElement {
  return (
    <div className={style["contacts-menu-list"]}>
      <div>
        <ChatContact isMute={true} messages={0} isPinned={true} />
        <ChatContact isMute={false} messages={0} isPinned={false} />
        <ChatContact isMute={true} messages={0} isPinned={false} />
        <ChatContact isMute={false} messages={1} isPinned={false} />
        <ChatContact isMute={false} messages={0} isPinned={true} />
        <ChatContact isMute={false} messages={0} isPinned={false} />
        <ChatContact isMute={true} messages={0} isPinned={false} />
        <ChatContact isMute={false} messages={1} isPinned={false} />
        <ChatContact isMute={false} messages={0} isPinned={true} />
        <ChatContact isMute={false} messages={0} isPinned={false} />
        <ChatContact isMute={true} messages={0} isPinned={false} />
        <ChatContact isMute={false} messages={1} isPinned={false} />
        <ChatContact isMute={false} messages={0} isPinned={true} />
        <ChatContact isMute={false} messages={0} isPinned={false} />
        <ChatContact isMute={true} messages={0} isPinned={false} />
        <ChatContact isMute={false} messages={1} isPinned={false} />
        <ChatContact isMute={false} messages={0} isPinned={true} />
        <ChatContact isMute={false} messages={0} isPinned={false} />
        <ChatContact isMute={true} messages={0} isPinned={false} />
        <ChatContact isMute={false} messages={1} isPinned={false} />
      </div>
    </div>
  );
}
