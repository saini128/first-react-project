const MainSection = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>PUNJABI CULTURE AT ITS BEST</h1>
          <p>
            THAPAR’S VERY OWN PUNJABI CULTURAL SOCIETY BRINGS YOU THE BEST EVENTS SO YOU REMAIN CONNECTED TO THE ROOTS ON PUNJABI VIRSA
          </p>
  
          <div className="hero-btn">
            <button>Reach us </button>
            {/* <button className="secondary-btn">Category</button> */}
          </div>
  
          <div className="shopping">
            <p>Do check out</p>
  
            <div className="brand-icons">
                
              <a href="https://www.instagram.com/virsa.thapar/" target="_blank"><img src="/images/insta.png" alt="amazon-logo" /></a>
              <img src="/images/fb.png" alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/bhangra2.png" alt="hero-image" />
        </div>
      </main>
    );
  };
  
  export default MainSection;