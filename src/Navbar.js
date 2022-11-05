import Home from "./Home";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Expense</a>
      </div>
    </nav>
  );
};

export default Navbar;
