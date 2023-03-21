import React from 'react'
import clsx from 'clsx'
import styles from './button.module.scss'
import { ButtonType } from './types'

const Button = (primary:any, {label}:ButtonType) => {

    const classes = clsx(styles.button, {
        [styles.primary]:primary,
    })

  return (
    <button className={classes} >
         {/* {label && <label htmlFor="input-field">{label}</label>} */}
         Login
    </button>
  )
}

export default Button