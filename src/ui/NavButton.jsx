import { NavLink } from "react-router-dom";

function NavButton({ to, children, type }) {
  const style = {
    small:
      "hover:border-gray-500 hover:border-2 py-2 px-3 rounded-md border-transparent border-2 text-gray-200",
    large:
      " hover:bg-gray-500 sm:py-3 sm:px-2 sm:p border-gray-500 text-xs sm:text-2xl  border-3 p-2 sm:p-4 rounded-md  text-gray-200",
  };

  return (
    <NavLink className={style[type]} to={to}>
      {children}
    </NavLink>
  );
}

export default NavButton;
