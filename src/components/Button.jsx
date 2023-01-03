import React, { useState } from 'react'

export default function Button({ buttonId, audioId, audio, text, handlePlay }) {
  const [style, setStyle] = useState({
    background: "grey",
    boxShadow: "black 3px 3px 5px"
  });

  return (
    <div className="drum-pad" id={buttonId} style={style} onClick={(e) => {
      handlePlay(e.target.id);
      setStyle(
        {
          background: "orange",
          boxShadow: "none"
        }
      );
      setTimeout(() => {
        setStyle(
          {
            background: "grey",
            boxShadow: "black 3px 3px 5px"
          }
        );
      }, 300);
    }}>
      <audio className="clip" id={audioId} src={audio}></audio>{text}
    </div >
  )
}
