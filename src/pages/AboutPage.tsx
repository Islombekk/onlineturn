import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
        <h1>Infor</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos magnam aspernatur accusamus unde! Nesciunt, molestias nobis atque eveniet blanditiis beatae.</p>
        <button className="btn" onClick={() => history.push('/')}>Return</button>
        </>
    )
}