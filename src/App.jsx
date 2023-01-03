import { useEffect, useState } from "react";
import ButtonSet from "./components/ButtonSet";
import ControlContainer from "./components/ControlContainer";

function App() {
  const [textInfo, setTextInfo] = useState("");
  const [power, setPower] = useState("on");
  const [rhythm, setRhythm] = useState("Heater Kit")
  const [volume, setVolume] = useState(0.3);

  const buttons = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];

  useEffect(()=>{
    setTextInfo("Volume: " + Math.ceil(volume * 100));
  }, [volume])

  const handlePower = () => {
    if (power === "on") {
      setPower("off");
      setTextInfo("Power: off");
    } else {
      setPower("on");
      setTextInfo("Power: on");
    }
  }

  const handleRhythm = () => {
    if (rhythm === "Heater Kit") {
      setRhythm("Smooth Piano Kit");
      setTextInfo("Smooth Piano Kit");
    } else {
      setRhythm("Heater Kit");
      setTextInfo("Heater Kit");
    }
  }

  const handleVolume = (e) => {
    setVolume(e.target.value);
  }

  const handlePlay = (targetId) => {
    if(power === "on"){
      let track = document.querySelector(`#${targetId}`).childNodes[0].id

      document.querySelector(`#${track}`).volume = volume;
      document.querySelector(`#${track}`).play();

      setTextInfo(targetId.replaceAll("-", " "));
    }else{
      
    }
  }

  return (
    <div className="App" id="drum-machine">
      <ButtonSet buttons={buttons} rhythm={rhythm} handlePlay={handlePlay}/>
      <ControlContainer power={power} textInfo={textInfo} volume={volume} rhythm={rhythm} handlePower={handlePower} handleRhythm={handleRhythm} handleVolume={handleVolume}/>
    </div>
  );
}

export default App;
