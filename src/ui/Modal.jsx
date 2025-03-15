import { cloneElement, createContext, useContext, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState(null);
  const close = () => setOpenName(null);
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opens) });
}
//regular window
function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useClickOutside(close);
  if (name !== openName) return null;

  return createPortal(
    <div
      className="  fixed  top-0 left-0 flex items-center justify-center
     backdrop-blur-sm h-screen w-full"
    >
      <div
        ref={ref}
        className="overflow-y-auto overflow-x-hidden sm:max-h-[35rem] max-h-[33rem] my-6
         h-[-webkit-fill-available] fixed w-[-webkit-fill-available] mx-3 sm:mx-10 text-center
         bg-grey-2 rounded-md p-3 sm:px-8 sm:pt-6
         flex justify-center max-w-[45rem] "
      >
        <button
          className="flex text-2xl text-gray-50 cursor-pointer"
          onClick={close}
        >
          <IoMdClose />
        </button>
        <span className="w-[-webkit-fill-available] sm:p-2 md:p-5">
          {cloneElement(children, { onCloseModal: close })}
        </span>
      </div>
    </div>,
    document.body
  );
}
//confirm window
function WindowConfirm({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useClickOutside(close);
  if (name !== openName) return null;

  return createPortal(
    <div
      className=" fixed  top-0 left-0 flex items-center justify-center
     backdrop-blur-sm h-screen w-full flex-row"
    >
      <div
        ref={ref}
        className="overflow-y-auto bg-gray-200 rounded-md h-58 flex items-center "
      >
        <span className="w-[-webkit-fill-available] sm:p-2 md:p-5">
          {cloneElement(children, { onCloseModal: close })}
        </span>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
Modal.WindowConfirm = WindowConfirm;

export default Modal;
