import React from 'react'
import "./Button.scss"
const Button = ({children, btnstyle, onClick}) => {
    const STYLES = ['btn--primary', 'btn--outlined']
    const checkBtnStyles = STYLES.includes(btnstyle) ? btnstyle : STYLES[0]
    return (
        <button className={`btn ${checkBtnStyles}`} onClick={onClick ? () => onClick() : null}>
            {children}
        </button>
    )
}


export default Button
