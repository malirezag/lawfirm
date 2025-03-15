import { useState } from "react";
import { GoPencil } from "react-icons/go";
import Modal from "./Modal";
import EditLawyerForm from "./UpdateLawyerForm";
import { RxCross2 } from "react-icons/rx";
import ConfirmDelete from "./ConfirmDelete";
import useDeleteLawyer from "../features/lawyers/useDeleteLawyer";
function Lawyer({ lawyer }) {
  const { id } = lawyer;
  const [active, setActive] = useState(false);
  const { deleteLawyer, isPending } = useDeleteLawyer();
  function handleDelete() {
    deleteLawyer(id);
  }
  return (
    <div
      className={"flex justify-center"}
      onMouseOver={() => {
        setActive(true);
      }}
      onMouseLeave={() => setActive(false)}
    >
      <div className="text-gray-50 flex flex-col w-75 bg-grey-2 rounded-2xl  ">
        {/* delete modal */}
        <div
          className={`absolute backdrop-brightness-50
           rounded-2xl backdrop-blur-sm ${active ? "" : "hidden "}`}
        >
          <Modal>
            <Modal.Open opens="update">
              <button
                className={`pr-2 text-lg cursor-pointer text-neutral-300 ${
                  active ? "" : "hidden"
                }`}
              >
                <GoPencil />
              </button>
            </Modal.Open>
            <Modal.WindowConfirm name="confirmDelete">
              <ConfirmDelete onConfirm={handleDelete} />
            </Modal.WindowConfirm>

            {/* update modal */}
            <Modal.Open opens="confirmDelete">
              <button
                className={` p-2 text-lg cursor-pointer text-neutral-300 ${
                  active ? "" : "hidden "
                }`}
              >
                <RxCross2 />
              </button>
            </Modal.Open>
            <Modal.Window name="update">
              <EditLawyerForm lawyer={lawyer} />
            </Modal.Window>
          </Modal>
          <p
            className=" flex w-75 h-77 justify-center p-5
         "
          >
            {lawyer.exp}
          </p>
        </div>
        <img
          src={lawyer.image}
          alt={lawyer.name}
          className=" h-70 rounded-t-2xl object-center object-cover"
        />
        <div className="flex flex-row justify-between px-3 py-4 text-xl items-center">
          <h3>{lawyer.name}</h3>
          <p className="text-base">{lawyer.phone} </p>
        </div>
      </div>
    </div>
  );
}

export default Lawyer;

//https://cjqaeowkcbpwzsxdwuhd.supabase.co/storage/v1/object/public/lawyers/0.48361828688646935-Derecho%20civil%20derecho%20familiar%20abogado%20derecho%20abogado,%20advocacia,%20%C3%A1ngulo,%20blanco,%20cara%20png.jpeg
