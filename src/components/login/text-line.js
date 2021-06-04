import React from 'react'
import '../../styles/main.scss'

export const TextLine = ({ txt }) => {
    return (
        <div className="txt_container">
            <h2><span>{txt}</span></h2>
        </div>
    )
}
