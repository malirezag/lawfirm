import { BiArrowToLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function BackButton({ to }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className="fixed text-lg flex flex-row items-center text-blue-500 left-0
         p-5 cursor-pointer"
    >
      {" "}
      Back{" "}
      <span className="text-2xl">
        <BiArrowToLeft />
      </span>
    </button>
  );
}

export default BackButton;
