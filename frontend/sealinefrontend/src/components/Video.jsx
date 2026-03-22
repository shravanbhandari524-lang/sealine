import { useContext, useRef, useEffect } from "react";
import { Popupcontext } from "../context/Popupcontext";
import vid from "../sound/dr.mp4";

export default function Video() {
  const videoRef = useRef(null);
  const { play, setplay } = useContext(Popupcontext);

  useEffect(() => {
    if (play && videoRef.current) {
      videoRef.current.play();
    }
  }, [play]);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setplay(false);
  };

  if (!play) return null;

  return (
    <div
      onClick={handleClose} // clicking background closes
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <video
        ref={videoRef}
        src={vid}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking video
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "contain",
        }}
      />

      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent triggering background click
          handleClose();
        }}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 15px",
          cursor: "pointer",
          zIndex: 10000,
        }}
      >
        ❌ Close
      </button>
    </div>
  );
}
