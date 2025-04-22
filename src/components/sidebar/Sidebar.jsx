// Header.jsx
import "./Sidebar.scss";

function Sidebar() {
  return (
    <header className="main-header">
      <div className="logo">SITEBAR</div>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Settings</a>
      </nav>
    </header>
  );
}

export default Sidebar;
