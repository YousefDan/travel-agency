const Navbar = ({ toggle }) => {
  return (
    <nav
      style={{
        clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
      className="navbar"
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#destination">Destination</a>
      <a href="#services">Services</a>
      <a href="#gallery">Gallery</a>
      <a href="#blogs">Blogs</a>
    </nav>
  );
};

export default Navbar;
