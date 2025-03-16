import NavButton from "./NavButton";
import Logout from "../features/Authentication/Logout";
import { NavLink } from "react-router-dom";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { createPortal } from "react-dom";
import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";

function Header({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return createPortal(
    <div>
      <AiOutlineMenuFold
        className="absolute top-0 text-3xl m-3 cursor-pointer md:hidden text-grey-1"
        onClick={() => setIsOpen((open) => !open)}
      />
      <header
        className={` bg-grey-3 md:bg-transparent md:flex-row absolute top-0 text-nowrap
       text-gray-300 xl:text-xl lg:text-lg w-[70%] sm:w-[60%] flex justify-between md:h-fit flex-col
     md:items-center md:justify-between md:w-full px-3 md:px-8 xl:pt-3 md:pt-2 h-screen md:flex
    gap-4 ${isOpen ? "" : "hidden"}`}
      >
        <div className="flex flex-col md:flex-row md:items-center space-x-2 gap-1 xl:gap-2 ">
          <AiOutlineMenuUnfold
            className="text-3xl mt-3 cursor-pointer md:hidden"
            onClick={() => setIsOpen((open) => !open)}
          />

          <NavLink to="/home">
            <IoHomeOutline className="text-2xl md:block hidden" />
          </NavLink>

          <NavButton type="small" to="/home">
            صفحه اصلی{" "}
          </NavButton>
          <NavButton type="small" to="/lawyers">
            لیست وکلا{" "}
          </NavButton>
          {/* <NavButton type="small" to="/chat">
            مشاوره انلاین
          </NavButton> */}
          <NavButton type="small" to="/blog">
            بلاگ
          </NavButton>

          <button className="flex py-5">ارتباط با ما</button>

          {children}
        </div>

        <Logout />
      </header>
    </div>,
    document.body
  );
}

export default Header;
