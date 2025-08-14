import { useEffect, useState } from "react";
import "./HomeHero.scss";

// Energy tracker lines for each hour
const energyLines = {
  0: ["One more episode", "Midnight magic", "Idea factory open"],
  1: ["Night owl prime time", "Creativity at max", "Late night productivity"],
  2: ["Pure zombie mode", "Running on dreams", "Too many tabs open (in my brain)"],
  3: ["Okay maybe I should sleep", "Thoughts… fading…", "Dreamland calling"],
  4: ["Do people exist at this hour?", "Beep Beep Boop..cannot compute.", "I’m basically a bat now"],
  5: ["Is that the sun or my imagination?", "The birds are judging me", "Pre-dawn daze"],
  6: ["Barely awake", "Let’s pretend I’m a morning person", "Half-charged"],
  7: ["We’re doing this!", "Mildly functional", "Caffeine straight into my veins"],
  8: ["Feeling the climb", "Ready to start something", "Focused-ish"],
  9: ["Let’s go!", "Brain fully online", "Peak optimism"],
  10: ["Productivity unlocked", "Running smooth", "In the zone"],
  11: ["Cruising along", "Ideas are flowing", "Is it lunch yet?"],
  12: ["Lunch mode", "What are we having?", "Midday glow"],
  13: ["Sleepy wave incoming", "The post-lunch struggle", "Ate too much..eyes heavy"],
  14: ["Prying eyes open with toothpicks", "Caffeine reserves low", "need reboot"],
  15: ["Slow but steady", "Feeling social", "Go with the flow"],
  16: ["Warming back up", "Feeling inspired", "Let’s gooo"],
  17: ["Evening spark!", "What’s for dinner?", "Almost done for today"],
  18: ["Kitty cuddles", "Refreshed and ready", "Let’s make things happen"],
  19: ["Creative mode engaged", "Chef’s Hat Equipped", "Zoomies"],
  20: ["Feeling groovy", "Focus Time", "Let’s get wild"],
  21: ["Peak night energy", "Making progress", "Motivation to the max"],
  22: ["Slowing down", "Feeling Games", "Relaxation mode"],
  23: ["The night is young", "One more Task", "Running strong"]
};

function HomeHero() {
  const [leftNumbers, setLeftNumbers] = useState(Array(20).fill(0).map(() => Math.floor(Math.random() * 10))); // Reduced from 50 to 20
  const [rightNumbers, setRightNumbers] = useState(Array(20).fill(0).map(() => Math.floor(Math.random() * 10))); // Reduced from 50 to 20
  const [currentTime, setCurrentTime] = useState(new Date());
  const [workStatus, setWorkStatus] = useState('STUDYING');
  const [clockExpanded, setClockExpanded] = useState(false);
  const [statusExpanded, setStatusExpanded] = useState(false);
  const [energyExpanded, setEnergyExpanded] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [obsessionExpanded, setObsessionExpanded] = useState(true); // Open by default
  const [energyLevel, setEnergyLevel] = useState(0);
  const [energyLine, setEnergyLine] = useState("");
  const [currentObsession, setCurrentObsession] = useState({
    title: 'LATEST OBSESSION',
    item: 'HELLY KITTY ISLAND ADVENTURE',
    category: 'VIDEO GAME',
    description: 'Exploring bold, raw typographic compositions inspired by brutalist architecture',
    image: 'https://www.gameshub.com/wp-content/uploads/sites/5/2023/09/hello-kitty-island-adventure-new-update.jpg', // Small accent image
    updated: 'Updated 2 days ago'
  });

  // Set energy level and line based on hour
  useEffect(() => {
    const hour = new Date().getHours();
    // Example energy curve: high in morning, dips after lunch, rises in evening
const curve = [
  80, // 0: One more episode, Midnight magic
  85, // 1: Night owl prime time
  70, // 2: Still pretty alert, but starting to fade
  50, // 3: Sleepiness settling in
  30, // 4: Very low
  20, // 5: Not functional
  35, // 6: Coffee starting to work
  55, // 7: Getting functional
  65, // 8: Climbing
  80, // 9: Let's go!
  90, // 10: In the zone
  95, // 11: Cruising at peak
  85, // 12: Lunch energy
  55, // 13: Post-lunch slump
  40, // 14: Afternoon drag
  60, // 15: Slow recovery
  75, // 16: Feeling inspired
  80, // 17: Evening spark
  85, // 18: Refreshed
  90, // 19: Creative mode
  95, // 20: Feeling groovy
  100, // 21: Peak night energy
  95, // 22: Still strong
  90  // 23: Night still young
];    setEnergyLevel(curve[hour]);
    const lines = energyLines[hour] || ["Energy!"];
    setEnergyLine(lines[Math.floor(Math.random() * lines.length)]);
  }, []);

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
            <div className="sidebar-toggle" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
              <div className="sidebar-title">CONTROLS</div>
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
              
              {/* DEBUG: .energy-info panel, check if this div gets correct styles in browser inspector */}
              <div className={`energy-info ${energyExpanded ? 'expanded' : 'collapsed'}`}
                   data-debug="energy-info-panel">
                <div className="energy-toggle" onClick={() => setEnergyExpanded(!energyExpanded)}>
                  <div className="toggle-icon">{energyExpanded ? '−' : '+'}</div>
                  <div className="toggle-label">ENERGY</div>
                </div>
                {energyExpanded && (
                  <div className="energy-content">
                    <div className="energy-label">ENERGY LEVEL</div>
                    <div className="energy-percent-wrapper">
                      <span
                        className={`energy-percent${energyLevel > 75 ? ' high' : ''}`}
                        style={{
                          color: energyLevel > 75 ? 'var(--blue)' : 'var(--red)'
                        }}
                      >
                        {energyLevel}%
                      </span>
                      <div className="energy-broken-bar">
                        {[0,1,2,3,4].map(i => {
                          const filled = energyLevel >= (i+1)*20;
                          return (
                            <span
                              key={i}
                              className={`broken-bar-section${filled ? ' filled' : ''}`}
                            ></span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="energy-line">Mood: {energyLine}</div>
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
