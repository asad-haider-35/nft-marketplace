import React, { useState } from 'react'
import Button from './Button'
import { useEffect } from 'react'

const ButtonTab = ({ buttons, styles }) => {
    
    const [active, setActive] = useState(buttons.filter(x => x.IsActive === true)[0].Text);

    return (
        <div className={`${styles}`}>
            <ul className='list-none justify-around items-center flex-1 flex'>
                {buttons.map((button, index) => (
                    <li key={index}>
                        {button.Text === active ? 
                            <Button text={button.Text} styles={'gradient text-white'} onClick={() => setActive(button.Text)} /> : 
                            <Button text={button.Text} styles={'bg-transparent text-dimWhite'} onClick={() => setActive(button.Text)} />}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ButtonTab
