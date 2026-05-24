function Header() {
  return (
    <header className="main-header">
      <div className="logo-section">
        <span className="logo-circle">TF</span>
        <div className="brand-text">
          <h1>TaskFlow (Section A)</h1>
          <p>Demo Project | CS4717</p>
        </div>
      </div>
      <button className="btn-logout">Logout</button>
    </header>
  );
}

export default Header;
