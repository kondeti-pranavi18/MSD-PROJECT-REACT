import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">

      <div className="logo">
        <h1>Travelling</h1>
      </div>
      
      <div className="search"><input type="text" placeholder="Search destinations..." />
        <button>Search</button>
      </div>

    </div>
  );
}
