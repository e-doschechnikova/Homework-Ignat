import React from "react";
import styles from "./Message.module.css";

type messageType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: messageType) {
  return (
    <div className={styles.content}>
      <div>
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className={styles.messageContent}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.message}>{props.message}</div>
        <div className={styles.time}>{props.time}</div>
      </div>
    </div>
  );
}

export default Message;
