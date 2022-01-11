import { useState } from "react";
import "./about.css";

const About = () => {
  const videoData = [
    "images/about-vid-1.mp4",
    "images/about-vid-2.mp4",
    "images/about-vid-3.mp4",
  ];

  const [src, setSrc] = useState("images/about-vid-1.mp4");

  return (
    <section className="about" id="about">
      <div className="video-container">
        <video src={src} muted autoPlay loop></video>
        <div className="controls">
          {videoData.map((src, index) => (
            <span
              onClick={() => setSrc(src)}
              key={index}
              className="control-btn"
            ></span>
          ))}
        </div>
      </div>
      <div className="about-content">
        <span>Why Choose us?</span>
        <h3>Nature's Majesty Awaits You</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          reprehenderit quos esse maiores aliquid provident eos, mollitia
          molestiae consequatur! Nam, eos! Odio sint consectetur in deleniti
          voluptatem magni repellendus iusto.
          <a href="#book-form" className="book-btn">
            Read More
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
