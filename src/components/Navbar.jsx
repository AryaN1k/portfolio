

import { FaGithub } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="mb-8 flex item-center justify-between p-8 ">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mx-2 text-3xl">AS</h1>
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
      </div>
      <div className="m-8 flex items-center gap-5 text-4xl ">
     
        <a href="https://github.com/AryaN1k"><FaGithub /></a>
        
      </div>
    </nav>
  );
};

export default Navbar;
