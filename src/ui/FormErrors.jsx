import { PiWarningCircle } from "react-icons/pi";

function FormErrors({ errors, style }) {
  return (
    <p
      className={`${style} flex flex-row bg-red-300 border border-red-400 text-grey-3 px-2 py-2 
        rounded-md ${errors ? "" : "hidden"}`}
    >
      <span className="text-red-400 text-2xl px-2">
        <PiWarningCircle />{" "}
      </span>
      {errors}{" "}
    </p>
  );
}

export default FormErrors;
