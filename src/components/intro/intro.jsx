import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./intro.scss";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    if (!textRef.current) {
      return;
    }
    const instance = init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 50,
      strings: ["Developer", "Content Creator", "Programmer"],
    });
    return () => {
      instance.destroy();
    };
  }, []);


  return (
    <div className="intro" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="men" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Javokhir.</h1>
          <h3>
           Freelance <span ref={textRef}></span>
          </h3>
        </div>
      </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down" />
        </a>
    </div>
  );
};

export default Intro;
