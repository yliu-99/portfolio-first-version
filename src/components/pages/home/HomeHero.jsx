import { useEffect, useState } from "react";
import "./HomeHero.scss";

function HomeHero() {
  const [leftNumbers, setLeftNumbers] = useState(Array(20).fill(0).map(() => Math.floor(Math.random() * 10))); // Reduced from 50 to 20
  const [rightNumbers, setRightNumbers] = useState(Array(20).fill(0).map(() => Math.floor(Math.random() * 10))); // Reduced from 50 to 20
  const [currentTime, setCurrentTime] = useState(new Date());
  const [workStatus, setWorkStatus] = useState('STUDYING');
  const [clockExpanded, setClockExpanded] = useState(false);
  const [statusExpanded, setStatusExpanded] = useState(false);
  const [weatherExpanded, setWeatherExpanded] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [obsessionExpanded, setObsessionExpanded] = useState(true); // Open by default
  const [weather, setWeather] = useState({ temp: '22°C', condition: 'Partly Cloudy', location: 'Vancouver' });
  const [currentObsession, setCurrentObsession] = useState({
    title: 'LATEST OBSESSION',
    item: 'HELLY KITTY ISLAND ADVENTURE',
    category: 'VIDEO GAME',
    description: 'Exploring bold, raw typographic compositions inspired by brutalist architecture',
    image: 'https://www.gameshub.com/wp-content/uploads/sites/5/2023/09/hello-kitty-island-adventure-new-update.jpg', // Small accent image
    updated: 'Updated 2 days ago'
  });

  useEffect(() => {
    // Slower, more deliberate number changes
    const interval = setInterval(() => {
      // Change fewer numbers at once, less frequently
      const shouldUpdate = Math.random() > 0.7; // Only update 30% of the time
      
      if (shouldUpdate) {
        setLeftNumbers(prev => {
          const newNumbers = [...prev];
          // Change only 1-2 numbers at a time
          const numChanges = Math.random() > 0.5 ? 1 : 2;
          for (let i = 0; i < numChanges; i++) {
            const randomIndex = Math.floor(Math.random() * newNumbers.length);
            newNumbers[randomIndex] = Math.floor(Math.random() * 10);
          }
          return newNumbers;
        });
        
        setRightNumbers(prev => {
          const newNumbers = [...prev];
          const numChanges = Math.random() > 0.5 ? 1 : 2;
          for (let i = 0; i < numChanges; i++) {
            const randomIndex = Math.floor(Math.random() * newNumbers.length);
            newNumbers[randomIndex] = Math.floor(Math.random() * 10);
          }
          return newNumbers;
        });
      }
    }, 800); // Much slower - every 800ms instead of 50ms

    // Clock update interval
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <div className="hero">
      {/* Mobile-first: Corner elements moved to top on small screens */}
      <div className="mobile-header">
        {/* Left corner obsession element */}
        <div className="obsession-corner">
          <div className={`latest-obsession ${obsessionExpanded ? 'expanded' : 'collapsed'}`}>
            <div className="obsession-toggle" onClick={() => setObsessionExpanded(!obsessionExpanded)}>
              <div className="toggle-label">MY OBSESSIONS</div>
              <span className={`triangle ${obsessionExpanded ? 'expanded' : 'collapsed'}`}>▶</span>
            </div>
            
            {obsessionExpanded && (
              <div className="obsession-content">
                <div className="obsession-label">{currentObsession.title}</div>
                <div className="obsession-main">
                  <div className="obsession-item">{currentObsession.item}</div>
                  <div className="obsession-category">{currentObsession.category}</div>
                </div>
                <div className="obsession-image">
                  <img src={currentObsession.image} alt="" />
                </div>
                <div className="obsession-updated">
                  {currentObsession.updated}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right sidebar control elements */}
        <div className={`corner-elements ${sidebarCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}>
          <div className="sidebar-header">
            <div className="sidebar-title">CONTROLS</div>
            <div className="sidebar-toggle" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
              <span className={`triangle ${sidebarCollapsed ? 'collapsed' : 'expanded'}`}>▶</span>
            </div>
          </div>
          
          {!sidebarCollapsed && (
            <div className="sidebar-content">
              <div className={`live-clock ${clockExpanded ? 'expanded' : 'collapsed'}`}>
                <div className="clock-toggle" onClick={() => setClockExpanded(!clockExpanded)}>
                  <div className="toggle-icon">{clockExpanded ? '−' : '+'}</div>
                  <div className="toggle-label">TIME</div>
                </div>
                
                {clockExpanded && (
                  <div className="clock-content">
                    <div className="clock-label">LOCAL TIME</div>
                    <div className="clock-display">
                      <span className="time">{currentTime.toLocaleTimeString('en-US', { 
                        hour12: false, 
                        hour: '2-digit', 
                        minute: '2-digit'
                      })}</span>
                      <span className="seconds">{currentTime.toLocaleTimeString('en-US', { 
                        hour12: false, 
                        second: '2-digit'
                      }).slice(-2)}</span>
                    </div>
                    <div className="clock-date">
                      {currentTime.toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: '2-digit' 
                      }).toUpperCase()}
                    </div>
                  </div>
                )}
              </div>
              
              <div className={`weather-info ${weatherExpanded ? 'expanded' : 'collapsed'}`}>
                <div className="weather-toggle" onClick={() => setWeatherExpanded(!weatherExpanded)}>
                  <div className="toggle-icon">{weatherExpanded ? '−' : '+'}</div>
                  <div className="toggle-label">WEATHER</div>
                </div>
                
                {weatherExpanded && (
                  <div className="weather-content">
                    <div className="weather-label">LOCAL WEATHER</div>
                    <div className="weather-display">
                      <span className="temperature">{weather.temp}</span>
                    </div>
                    <div className="weather-condition">{weather.condition}</div>
                    <div className="weather-location">{weather.location}</div>
                  </div>
                )}
              </div>
              
              <div className={`work-status ${statusExpanded ? 'expanded' : 'collapsed'}`}>
                <div className="status-toggle" onClick={() => setStatusExpanded(!statusExpanded)}>
                  <div className="toggle-icon">{statusExpanded ? '−' : '+'}</div>
                  <div className="toggle-label">STATUS</div>
                </div>
                
                {statusExpanded && (
                  <div className="status-content">
                    <div className="status-label">CURRENT STATUS</div>
                    <div className="status-display">
                      <div className="status-text">{workStatus}</div>
                      <div className="status-indicator">
                        <div className="indicator-dot"></div>
                      </div>
                    </div>
                    <div className="status-details">
                      <div className="detail-line">FOCUS: NEW MEDIA DESIGN AND WEB DEVELOPMENT</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

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
        
        <div className="side-labels">
          <div className="left-label">
            <span>PORTFOLIO</span>
            <span className="year">2025</span>
          </div>
          <div className="right-label">
            <span>SCROLL</span>
            <span>TO EXPLORE</span>
          </div>
        </div>
        
        <div className="center-tagline">
          <p>Creating meaningful digital experiences through thoughtful design</p>
        </div>
        
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
