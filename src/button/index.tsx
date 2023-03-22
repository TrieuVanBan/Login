import React from "react";
import clsx from "clsx";
import styles from "./button.module.scss";
import { ButtonType } from "./types";

const Button = ({ primary, label }:any) => {
  const classes = clsx(styles.button, {
    [styles.primary]: primary,
  });

  return (
    <button className={classes}>
      {/* {label && <label htmlFor="input-field">{label}</label>} */}
      {label}
    </button>
  );
};

export default Button;
