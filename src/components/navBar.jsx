const NavBar = () => {
    return (
      <nav className="container">
        <div className="logo">
          <img src="/images/virsa.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
  
        <button>Login</button>
      </nav>
    );
  };
  
  export default NavBar;