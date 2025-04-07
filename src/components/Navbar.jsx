import { useState, useEffect } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menu = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed left-0 top-0 md:top-2 w-full z-30 transition duration-200 ease-in-out"
      style={{ height: "var(--navbar-height)" }}
    >
      <nav className="container bg-white/10 backdrop-blur-md md:rounded-lg md:my-4 px-4 mx-auto transition duration-200 ease-in-out flex items-center justify-between py-3">
        <img src="/ade-logo.svg" alt="logo" />
        <div className="hidden md:flex gap-4">
          {menu.map((item) => {
            const itemId = item.link.slice(1);
            return (
              <a
                key={item.name}
                href={item.link}
                className={`text-sm font-medium tracking-widest transition duration-200 ease-in-out hover:text-white ${
                  activeSection === itemId ? "text-white" : "text-white/80"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
        <div
          className={`md:hidden absolute w-[90%] mx-auto rounded-2xl bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] z-50 backdrop-blur-3xl p-4 flex justify-between items-center transition-transform duration-500 ease-linear ${
            isOpen ? "translate-y-0 top-20" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col gap-4">
            {menu.map((item) => {
              const itemId = item.link.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.link}
                  className={`text-sm font-medium tracking-widest hover:text-white ${
                    activeSection === itemId ? "text-white" : "text-white/80"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5 text-2xl text-gray-600">
              <a href="https://github.com/AryaN1k">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="items-center gap-5 text-2xl hidden md:flex">
          <a href="https://github.com/AryaN1k">
            <FaGithub />
          </a>
        </div>

        <button className="md:hidden text-white text-3xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
