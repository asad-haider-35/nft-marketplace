import React from 'react'

const ButtonTab = ({ children, styles }) => {
    
    return (
        <div className={`${styles} transform -skew-x-12`}>
            {children}
        </div>
    )
}

export default ButtonTab
