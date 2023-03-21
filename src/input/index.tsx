import clsx from 'clsx'
import React from 'react'
import { TextFieldProps } from './types'
import styles from './input.module.scss'

const classes = clsx(styles.input)

const MyInput = ({ value, label, type, onChange }:TextFieldProps) => {
    const handleChange = (e:any) => {
        const { value } = e.target;
        onChange(value);
      };
  return (
    <div>
        {label && <label htmlFor="input-field">{label}</label>}
        <input
            type={type}
            value={value}
            className={classes}
            onChange={handleChange}
        />
    </div>
  )
}

export default MyInput