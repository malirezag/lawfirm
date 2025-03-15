import Form from "./Form";
import Modal from "./Modal";
import NavButton from "./NavButton";

function HomeBanner() {
  return (
    <div
      className="rounded-b-xl bg-[url(/banner.jpg)]
       md:h-[80%] lg:h-screen bg-left bg-cover flex
     items-center pr-3 sm:pr-5 md:pr-7 lg:pr-12 xl:pr-20  "
    >
      <div
        className="flex
      flex-col"
      >
        <h1
          className=" lg:flex-row lg:gap-2 flex flex-col text-center gap-3 sm:gap-7 sm:mt-20 mt-10
         text-gray-200 text-2xl sm:text-4xl md:text-5xl justify-end "
        >
          موسسه حقوقی <span className=" font-bold ">اندیشمندان</span>
        </h1>
        <div className="flex flex-row  justify-center lg:text-2xl md:text-xl mt-10 sm:mt-20 mb-20  gap-2.5 ">
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
    </div>
  );
}

export default HomeBanner;
