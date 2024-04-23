/* import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "../assets/LOGO.png";
import backgroundImage from "../assets/BackgroundImg.jpeg";

import { navLinksdata } from "../Constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="w-full h-24 sticky top-0 z-50 backdrop-blur-2xl transition-colors mx-auto flex justify-between items-center border-b-[1px] px-20">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "160px", height: "auto", borderRadius: "15px" }}
        />
        <div>
          <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-white tracking-wide hover:text-stone-300 text-sm font-bold transition cursor-pointer"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-3xl mdl:hidden w-10 h-10 inline-flex items-center justify-center text-white rounded-full cursor-pointer"
          >
            <CiMenuBurger />
          </span>
          {showMenu && (
            <div className="w-[80%] h-screen mdl:hidden overflow-scroll absolute top-0 left-0 bg-red-800/95 p-4 scrollbar-hide">
              <div className="flex flex-col gap-8 py-2 relative">
                <div>
                  <img className="w-36 rounded-md" src={Logo} alt="logo" />
                  <p className="text-sm text-white mt-2">
                    ¿Preparad@ para descubrir tus super talentos? Explora tus
                    capacidades ocultos con nuestros juegos interactivos.
                  </p>
                </div>
                <ul className="flex flex-col gap-4">
                  {navLinksdata.map((item) => (
                    <li
                      key={item._id}
                      className="text-blue-600 tracking-wide cursor-pointer hover:text-blue-800 duration-300"
                    >
                      <Link
                        onClick={() => setShowMenu(false)}
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute top-4 right-4 text-white duration-300 text-2xl cursor-pointer"
                >
                  <FaTimes />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className="w-full h-24 -top-10 z-40  mx-auto border-b-[1px] px-20 absolute"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      />
    </>
  );
};

export default Navbar;
 */
