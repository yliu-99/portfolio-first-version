import { useState } from 'react';

function Values() {
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (cardIndex) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardIndex]: !prev[cardIndex]
    }));
  };

  return (
    <div className="values">
      <div className="values-container">
        <div className="container">
          <div className="values-content">
            <h2>MY Values</h2>
            <div className="values-grid">
              <div 
                className={`value-box flip-card ${flippedCards[0] ? 'flipped' : ''}`}
                onClick={() => handleCardClick(0)}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h3>Wonder</h3>
                    <p>My creativity always stems from the sense of wonder I hold for the world. It has always been immensely exciting to me to imagine that the possibilities could be endless, and to explore these opportunities with appreciation. This inspires me to take risks, think further, remain optimistic, and ask more questions in my work.</p>
                  </div>
                  <div className="flip-card-back">
                    <img src="src/assets/about/yuhan-singing-with-guitar.jpg" alt="Yuhan Singing" />
                  </div>
                </div>
              </div>
              <div 
                className={`value-box flip-card ${flippedCards[1] ? 'flipped' : ''}`}
                onClick={() => handleCardClick(1)}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h3>Love</h3>
                    <p>To me, love means committing fully to your relationship with people, yourself, and the world at large. I feel most fulfilled when living and leading with love, so I try to carry that principle into everything. In my work, love motivates me to embrace challenges, show gratitude and kindness, act with intention, and make decisions that center in people.</p>
                  </div>
                  <div className="flip-card-back">
                    <img src="src/assets/about/enqi.jpg" alt="Yuhan's younger brother Enqi" />
                  </div>
                </div>
              </div>
              <div 
                className={`value-box flip-card ${flippedCards[2] ? 'flipped' : ''}`}
                onClick={() => handleCardClick(2)}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h3>Humility</h3>
                    <p>Humility, for me, is a way of honoring the vastness of the world around me. It motivates me to be introspective, reflective, and aware in my work. I strive to stay open to learning, growth, and change, and to approach these opportunities with curiosity and excitement, as a part of my commitment to myself in living authentically.</p>
                  </div>
                  <div className="flip-card-back">
                    <img src="src/assets/about/yuhan-young.JPEG" alt="Child Yuhan" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="values-image">
            <img src="src/assets/about/maple-seeds.png" alt="Maple seeds" />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Values;