

const Section = () => {
    const toggleMenu = () => {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }

  return (
    <div>
      <nav className='hamburger-nav'>
      <div className="logo">Atharv Gaur</div>
        <div className="hamburger-menu">
            <div className="hamburger-icon" onClick={() => toggleMenu()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="menu-links">
            <li><a href="/about">About</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/project">Project</a></li>
            <li><a href="/contact">Contact</a></li>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Section
