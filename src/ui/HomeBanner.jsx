import Form from "./Form";
import Modal from "./Modal";
import NavButton from "./NavButton";

function HomeBanner() {
  return (
    <div
      className="rounded-b-xl bg-neutral-800 
        h-screen md:justify-around flex
     items-center pr-3 sm:pr-5 md:pr-7 lg:pr-12 xl:pr-20 flex-col-reverse sm:flex-row sm:justify-around "
    >
      <div className="flex flex-col gap-10 md:gap-25">
        <h1
          className=" lg:flex-row lg:gap-2 flex flex-col text-center gap-3 sm:gap-7 sm:mt-20 mt-10
         text-gray-200 text-4xl sm:text-4xl xl:text-5xl justify-end "
        >
          موسسه حقوقی <span className=" font-bold ">اندیشمندان</span>
        </h1>
        <img
          src="/logo.png"
          className="xl:h-150 xl:w-150 w-70 h-70 sm:hidden"
        />
        <div className="flex flex-row justify-center lg:text-2xl ms:text-xl  mb-20 gap-2 sm:gap-2 ">
          <Modal>
            <Modal.Open opens="1">
              <button>
                <NavButton type="large">دریافت مشاوره</NavButton>
              </button>
            </Modal.Open>

            <Modal.Open opens="1">
              <button>
                <NavButton type="large">رزرو نوبت حضوری</NavButton>
              </button>
            </Modal.Open>

            <Modal.Window name="1">
              <Form />
            </Modal.Window>

            <Modal.Window name="2">
              <div>2</div>
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <img
        src="/logo.png"
        className="xl:h-150 xl:w-150 sm:h-80 sm:w-80 md:w-100 md:h-100 lg:w-120 lg:h-120 w-70 h-70 hidden sm:block"
      />
    </div>
  );
}

export default HomeBanner;
