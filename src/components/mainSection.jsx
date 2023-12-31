const MainSection = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>PUNJABI CULTURE AT ITS BEST</h1>
          <p>
            THAPAR’S VERY OWN PUNJABI CULTURAL SOCIETY BRINGS YOU THE BEST EVENTS SO YOU REMAIN CONNECTED TO THE ROOTS ON PUNJABI VIRSA
          </p>
  
          <div className="hero-btn">
            <a href="https://ssavirsa.com/" target="_blank" >
            <button>Reach us</button>
              </a>
          </div>
  
          <div className="shopping">
            <p>Do check out</p>
  
            <div className="brand-icons">
                
              <a href="https://www.instagram.com/virsa.thapar/" target="_blank"><img src="./images/insta.png" alt="insta" /></a>
              <img src="./images/fb.png" alt="facebook" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="./images/bhangra2.png" alt="bhangra-image" />
        </div>
      </main>
    );
  };
  
  export default MainSection;