import React from "react";
import styles from "./Error.module.css";

function Error404() {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <h2>OOPS! PAGE NOT FOUND!</h2>
    </div>
  );
}

export default Error404;
