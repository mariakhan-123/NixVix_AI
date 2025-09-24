import React from 'react'
import './ReusableButton.css'

function ReusableButton({ label, shadow }) {
    return (
        <div className={`  ${shadow ? 'buttons-grid ' : ''}`} >
            <button
                
                className={`btn  ${shadow ? 'btn-shadow' : 'btn-outline'}`}
            >
                {label}
            </button>
        </div>
    )
}

export default ReusableButton
