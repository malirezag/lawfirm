import {
  HiArrowLeftOnRectangle,
  HiArrowRightOnRectangle,
  HiOutlineUser,
} from "react-icons/hi2";
import useLogout from "./useLogout";
import { useNavigate } from "react-router-dom";
import useUser from "./useUser";

function Logout() {
  const navigate = useNavigate();
  const { logout, ispendeing } = useLogout();
  const { isAuthenticated, user } = useUser();
  const fullname = user?.user_metadata.fullName;

  return (
    <div
      className="flex md:flex-row space-x-3 flex-col-reverse pb-10 md:pb-0 gap-4
    "
    >
      {isAuthenticated ? (
        <button
          disabled={ispendeing}
          onClick={logout}
          className="text-3xl flex md:flex-row items-center gap-2 cursor-pointer 
           text-red-500 md:text-gray-300 justify-end flex-row-reverse "
        >
          <span className="flex text-xl">خروج </span>{" "}
          <HiArrowRightOnRectangle />
        </button>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="text-3xl flex flex-row items-center gap-2 cursor-pointer "
        >
          <span className="flex text-xl">ورود</span>
          <HiArrowLeftOnRectangle />
        </button>
      )}
      {isAuthenticated ? (
        <button
          className="text-3xl cursor-pointer flex gap-3 "
          onClick={() => navigate("/updateaccount")}
        >
          <HiOutlineUser />
          <span className="text-lg cursor-default ">{fullname}</span>
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Logout;
