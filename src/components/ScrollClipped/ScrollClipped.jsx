import { useState } from "react";
import "./ScrollClipped.css";



export default function ScrollClipped() {
  const [scrollDistance, setScrollDistance] = useState(0);
  window.addEventListener("wheel", handleScroll);

  function handleScroll(e) {
    if (e.deltaY < 0) {
      setScrollDistance(Math.max(0, scrollDistance + e.deltaY));
    }
    else {
      setScrollDistance(Math.min(600, scrollDistance + e.deltaY));
    }
  }

  const clippedStyle = {
    'clip-path': `polygon(0 0, 100% 0, 100% ${100 - (scrollDistance / 600 * 60)}%, 0 100%)`,
    transform: `scale(${1 + (scrollDistance / 600) * 0.2})`
  }

  return (
    <div>
      <img src="http://s7i21oayk.sabkt.gdipper.com/just_scroll/firstSreen.png" className="img-clipped" style={clippedStyle}></img>
      <h1>After my demise, lay me to rest beneath a sea of flowers.</h1>
      <img src="http://s7i21oayk.sabkt.gdipper.com/just_scroll/2-anime.jpg" className="img-normal"></img>
    </div>
  );
}
