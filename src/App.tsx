import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [yesSize, setYesSize] = useState(1);
  const [noPos, setNoPos] = useState({ top: "0%", left: "55%" });
  const [typedText, setTypedText] = useState("");
  const fullMessage = "Will you be my Valentine? 💌";
  const [noClicks, setNoClicks] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullMessage.slice(0, i));
      i++;
      if (i > fullMessage.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  const moveNoButton = () => {
    const newTop = Math.random() * 120 + "%";
    const newLeft = Math.random() * 120 + "%";
    setNoPos({ top: newTop, left: newLeft });
    setYesSize(prev => prev + 0.1);
  };

  if (yesClicked) {
    return (
      <div className="celebration">
        <h1 className="yay">YAY!!! 💖</h1>
        <p className="msg">You made my heart do a little dance 💘</p>
        <video
          className="cute-img"
          src="./video1.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ borderRadius: "20px" }}
        />
      </div>
    );
  }

  return (
    <div className="container">
    <h1 className="title typewriter">
      {typedText}
      {noClicks === 1 && " ...please?"}
      {noClicks === 2 && " ...pwease?? 🥺"}
      {noClicks === 3 && " ...pretty pwease?? 😭💗"}
    </h1>
      <img
        className="cute-img"
        src="./image1.jpg"
        width="100%"
      />

    {noClicks >= 4 ? (
    <div className="buttons">
      <button
        className="yes-btn"
        style={{ transform: `scale(${yesSize})` }}
        onClick={() => setYesClicked(true)}
      >
        Yes 💗
      </button>

      <button
        className="yes-btn"
        style={{ transform: `scale(${yesSize})`, marginLeft: "20px" }}
        onClick={() => setYesClicked(true)}
      >
        Yes 💗
      </button>
  </div>
    ) : (
      <div className="buttons">
        <button
          className="yes-btn"
          style={{ transform: `scale(${yesSize})` }}
          onClick={() => setYesClicked(true)}
        >
          Yes 💗
        </button>

        <button
          className="no-btn"
          style={{
            position: "absolute",
            top: noPos.top,
            left: noPos.left,
          }}
          onMouseEnter={moveNoButton}
          onClick={() => setNoClicks(prev => prev + 1)}
        >
          No 💔
        </button>
      </div>
    )}
    </div>
  )};