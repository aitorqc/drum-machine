import React from 'react'

export default function ControlContainer({ power, textInfo, volume, rhythm, handlePower, handleRhythm, handleVolume }) {
    return (
        <div className="controls-container">
            <div className="control">
                <p>Power</p>
                <div className="select" onClick={handlePower}>
                    <div className="inner" style={{float: power === "on" ? "right" : "left"}}>
                        {power === "on" ? <i className="fa-solid fa-volume-high"></i> : <i className="fa-solid fa-volume-xmark"></i>}
                    </div>
                </div>
            </div>
            <p id="display">{textInfo}</p>
            <div className="volume-slider">
                <input max="1" min="0" step="0.01" type="range" value={volume} onChange={(e) => handleVolume(e)} />
            </div>
            <div className="control">
                <p>Bank</p>
                <div className="select" onClick={handleRhythm}>
                    <div className="inner" style={{float: rhythm === "Heater Kit" ? "left" : "right"}}>
                        {rhythm === "Heater Kit" ? <i className="fa-solid fa-guitar"></i> : <i className="fa-solid fa-keyboard"></i>}
                    </div>
                </div>
            </div>
        </div>
    )
}
