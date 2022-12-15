import React, { useState } from "react";
import { CakeWrapper } from "./styled";

function Cake() {
  const [burn, setBurn] = useState(false);
  return (
    <CakeWrapper burn={burn}>
      <div className="layer f1">
        <div className="spot-group sg1">
          <div className="spot s1"></div>
          <div className="spot s2"></div>
          <div className="spot s3"></div>
        </div>
        <div className="spot-group sg2">
          <div className="spot s1"></div>
          <div className="spot s2"></div>
        </div>
      </div>
      <div className="layer f2">
        <div className="spot-group sg3">
          <div className="spot s1"></div>
          <div className="spot s2"></div>
        </div>
        <div className="spot-group sg4">
          <div className="spot s1"></div>
          <div className="spot s2"></div>
          <div className="spot s3"></div>
        </div>
      </div>
      <div className="layer f3">
        <div className="spot-group sg5">
          <div className="spot s1"></div>
          <div className="spot s2"></div>
          <div className="spot s3"></div>
        </div>
      </div>
      <div className="layer f4">
        <div className="drip-ctn">
          <div className="drip d1"></div>
          <div className="drip d2"></div>
          <div className="drip d3"></div>
          <div className="drip d4"></div>
          <div className="drip d5"></div>
          <div className="drip d6"></div>
          <div className="drip d7"></div>
          <div className="drip d8"></div>
          <div className="drip d9"></div>
        </div>
      </div>
      <div className="candle-ctn">
        <div className="candle c1">
          <div className="c-base"></div>
          <div className="wick"></div>
          <div className="flame"></div>
          <div className="highlight"></div>
        </div>
      </div>
      <div
        style={{
          color: "white",
          left: 0,
          fontSize: "50px",
          position: "fixed",
          top: 10,
          width: "100vw",
          textAlign: "center",
          // background: 'white'
        }}
      >
        Chúc mừng sinh nhật Anh Tùng Anh 
      </div>

      <div
        style={{
          color: "white",
          left: 0,
          fontSize: "50px",
          position: "fixed",
          bottom: 80,
          width: "100vw",
          textAlign: "center",
          // background: 'white'
        }}
      >
        Chúc Anh Tùng Anh sinh nhật vui vẻ
      </div>
      <div
        style={{
          color: "white",
          left: 0,
          fontSize: "50px",
          position: "fixed",
          bottom: 20,
          width: "100vw",
          textAlign: "center",
          // background: 'white'
        }}
      >
        {/* Made by C */}
      </div>
      <img
        style={{
          position: "fixed ",
          top: 10,
          right: 10,
          width: 200,
          height: 250,
          borderRadius: "10px",
        }}
        src={require("./atunganh.png")}
      />
      <div style={{ position: "absolute", marginTop: "200px" }}>
        {/* <ReactMic
          visualSetting="sinewave" // defaults -> "sinewave".  Other option is "frequencyBars"
          onStop={(stop) => {}} // required - called when audio stops recording
          onData={(recordedBlob) => {
            console.log("datanè", recordedBlob);
          }} // optional - called when chunk of audio data is available
          onBlock={() => {}} // optional - called if user selected "block" when prompted to allow microphone access (available in React-Mic-Gold)
          mimeType="audio/webm" // defaults -> "audio/webm".  Set to "audio/wav" for WAV or "audio/mp3" for MP3 audio format (available in React-Mic-Gold)
          bitRate={256000} // defaults -> 128000 (128kbps).  React-Mic-Gold only.
          sampleRate={96000} // defaults -> 44100 (44.1 kHz).  It accepts values only in range: 22050 to 96000 (available in React-Mic-Gold)
          timeSlice={3000} // defaults -> 4000 milliseconds.  The interval at which captured audio is returned to onData callback (available in React-Mic-Gold).
          record={burn}
        /> */}
        <button
          onClick={() => {
            setBurn(true);
          }}
        >
          Đốt
        </button>
        <button
          onClick={() => {
            setBurn(false);
          }}
        >
          Thổi
        </button>
      </div>
    </CakeWrapper>
  );
}

export default Cake;
