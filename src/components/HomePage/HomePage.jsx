import React from 'react'
import './styles.css'

export default function HomePage({ children }) {
    return (
        <div className='home-page'>
            {children}
        </div>
    )
}
