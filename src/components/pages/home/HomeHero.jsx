import { useEffect, useState } from "react";
import "./HomeHero.scss";

function HomeHero() {
  const [leftNumbers, setLeftNumbers] = useState(Array(50).fill(0).map(() => Math.floor(Math.random() * 10)));
  const [rightNumbers, setRightNumbers] = useState(Array(50).fill(0).map(() => Math.floor(Math.random() * 10)));

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly change one number at a time for smoother animation
      setLeftNumbers(prev => {
        const newNumbers = [...prev];
        const randomIndex = Math.floor(Math.random() * newNumbers.length);
        newNumbers[randomIndex] = Math.floor(Math.random() * 10);
        return newNumbers;
      });
      
      setRightNumbers(prev => {
        const newNumbers = [...prev];
        const randomIndex = Math.floor(Math.random() * newNumbers.length);
        newNumbers[randomIndex] = Math.floor(Math.random() * 10);
        return newNumbers;
      });
    }, 50); // Change every 50ms for extremely fast animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="animated-numbers left">
        {leftNumbers.map((num, index) => (
          <span key={index} className="number">{num}</span>
        ))}
      </div>
      
      <div className="animated-numbers right">
        {rightNumbers.map((num, index) => (
          <span key={index} className="number">{num}</span>
        ))}
      </div>
      
      <div className="container">
        <div className="hero-content"></div>
        <div className="hero-elements">
          <div className="circle">
            <img src="src\assets\hero\bluecircle.png" alt="" />
          </div>
          <div className="moth">
            <img src="src\assets\hero\luna-moth.png" alt="" />
          </div>
          <div className="animated-text">
            <img src="src\assets\hero\circletext.svg" alt="" />
          </div>
          <div className="design-text">
            <h4>DESIGN</h4>
          </div>
        </div>
      </div>
      <div className="grid-bg">
      </div>
    </div>
  );
}

export default HomeHero;
