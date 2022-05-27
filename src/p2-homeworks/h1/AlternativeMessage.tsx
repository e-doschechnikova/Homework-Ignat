import React from "react";
import styles from "./AlternativeMessage.module.css";

type messageTypeSecondPerson = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function AlternativeMessage(props: messageTypeSecondPerson) {
  return (
    <div className={styles.contentSecond}>
      <div>
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className={styles.messageContentSecond}>
        <div className={styles.nameSecond}>{props.name}</div>
        <div className={styles.messageSecond}>{props.message}</div>
        <div className={styles.timeSecond}>{props.time}</div>
      </div>
    </div>
  );
}

export default AlternativeMessage;
