import React from 'react'

import Button from './Button';

export default function ButtonSet({ buttons, power, rhythm, handlePlay }) {
    const musicListHeater = [
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    ];

    const musicListHeaterId = [
        "Heater-1",
        "Heater-2",
        "Heater-3",
        "Heater-4",
        "Clap",
        "Open-HH",
        "Kick-n-Hat",
        "Kick",
        "Closed-HH"
    ];

    const musicListPiano = [
        "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    ];

    const musicListPianoId = [
        "Chord-1",
        "Chord-2",
        "Chord-3",
        "Shaker",
        "Open-HH",
        "Closed-HH",
        "Punchy-Kick",
        "Side-Stick",
        "Snare"
    ]

    return (
        <div className='pad-bank'>
            {
                buttons.map((item, index) => {
                    return (
                        <Button
                            key={item}
                            buttonId={rhythm === "Heater Kit" ? musicListHeaterId[index] : musicListPianoId[index]}
                            audioId={item.toUpperCase()}
                            audio={rhythm === "Heater Kit" ? musicListHeater[index] : musicListPiano[index]}
                            text={item}
                            power={power}
                            handlePlay={handlePlay} />
                    )
                })
            }
        </div>
    )
}
