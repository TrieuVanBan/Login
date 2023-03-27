import clsx from "clsx";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { TextFieldProps } from "./types";
import styles from "./input.module.scss";

const classes = clsx(styles.input);

const MyInput = forwardRef(
  ({ value, label, type, onChange, name }: TextFieldProps, ref?: any) => {
    const [valueTextInput, setValueTextInput] = useState("");

    const handleChange = (e: any) => {
      const { value } = e.target;
      // onChange({ value });
      setValueTextInput(value);
    };

    useImperativeHandle(ref, () => ({
      getValue,
    }));

    const getValue = () => {
      return valueTextInput;
    };

    return (
      <div>
        {label && <label htmlFor="input-field">{label}</label>}
        <input
          type={type}
          name={name}
          // value={value}
          className={classes}
          onChange={handleChange}
        />
      </div>
    );
  }
);

export default MyInput;
