import clsx from "clsx";
import React, { forwardRef, useCallback, useImperativeHandle, useMemo, useState } from "react";
import { TextFieldProps } from "./types";
import styles from "./input.module.scss";
import Validate from "../utils/validate";

const classes = clsx(styles.input);

const MyInput = forwardRef(
  ({ label, type, name, maxLength }: TextFieldProps, ref?: any) => {

    useImperativeHandle(ref, () => ({
      getValue,
      setErrorMsg
    }));

    const [valueTextInput, setValueTextInput] = useState("");
    const [errMsg, setErrMsg] = useState<string>('');

    const handleChange = (e: any) => {
      const { value } = e.target;
      setValueTextInput(value);
    };

    const getValue = useCallback(() => {
      return valueTextInput;
    }, [valueTextInput]);

    const setErrorMsg = useCallback((msg: string) => {
      if (Validate.isStringEmpty(msg)) {
        return setErrMsg('');
      }
      setErrMsg(msg);
    }, []);

    const errorMessage = useMemo(() => {
      if (!Validate.isStringEmpty(errMsg)) {
        return <span style={{ color: "red", fontSize: "14px", display: "flex", justifyContent: "flex-end" }}>{errMsg}</span>;
      }
      return null;
    }, [errMsg]);

    return (
      <>
        <div style={{ display: "flex" }}>
          {label && <label htmlFor="input-field" style={{ width: "100px" }}>{label}</label>}
          <input
            type={type}
            name={name}
            // value={value}
            className={classes}
            onChange={handleChange}
            maxLength={maxLength}
          />
        </div>
        {errorMessage}
      </>
    );
  }
);

export default MyInput;
