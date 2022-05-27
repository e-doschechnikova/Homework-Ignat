import React from "react";
import styles from "./AlternativeMessageFriend.module.css";

type messageTypeFriend = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function AlternativeMessageFriend(props: messageTypeFriend) {
  return (
    <div className={styles.contentSecond}>
      <div>
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className={styles.messageFriend}>
        <div className={styles.nameFriens}>{props.name}</div>
        <div className={styles.messageFriend}>{props.message}</div>
        <div className={styles.timeFriend}>{props.time}</div>
      </div>
    </div>
  );
}

export default AlternativeMessageFriend;
