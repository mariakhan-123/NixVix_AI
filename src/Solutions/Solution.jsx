import React from 'react'
import Button from '../ReusableComponents/ReusableButton'

function Solution() {
    return (

        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div style={{
                display: "flex"
            }}>
                <Button label="Computer Vision" />
                <Button label="Pose Estimation" />
                <Button label="Voice Tech" />
                <Button label="AI Video Gen" />
                <Button label="Conversational AI" />
                <Button label="UI Understanding" />
                <Button label="Agent Workflows" />
            </div>
        </div>
    )
}

export default Solution
