import { IoPersonAddOutline } from "react-icons/io5";
import AddLawyerForm from "../ui/AddLawyerForm";
import Header from "../ui/Header";
import Lawyer from "../ui/Lawyer";
import Modal from "../ui/Modal";
import Spinner from "../ui/Spinner";
import Pagination from "../ui/Pagination";
import useGetLawyers from "../features/lawyers/useGetLawyers";
import { useNavigate, useSearchParams } from "react-router-dom";
import Sort from "../ui/Sort";
import Footer from "../ui/Footer";

function Lawyers() {
  const { lawyers, isLoading, count } = useGetLawyers();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page");
  if (lawyers?.length === 0) navigate(`/lawyers?page=${currentPage - 1}`);

  return (
    <div className=" bg-grey-4">
      <Modal>
        <Modal.Open opens="add">
          <div className="flex justify-center items-center gap-3 pt-10 md:hidden">
            <p className=" sm:text-2xl font-semibold text-gray-300 text-center md:hidden ">
              موسسه حقوقی اندیشمندان
            </p>
            <button
              className=" text-gray-50 text-sm border border-grey-1 bg-grey-4 py-2 items-center
                px-2 rounded-md cursor-pointer flex flex-row gap-3 "
            >
              افزودن وکیل
              <span>
                <IoPersonAddOutline />
              </span>
            </button>
          </div>
        </Modal.Open>

        <Header>
          <Modal.Open opens="add">
            <div className="">
              <button
                className=" text-gray-50 text-lg border border-grey-1 bg-grey-4 py-2
                px-3 rounded-md cursor-pointer flex flex-row items-center gap-3 ml-3 "
              >
                افزودن وکیل
                <span>
                  <IoPersonAddOutline />
                </span>
              </button>
            </div>
          </Modal.Open>
        </Header>
        <div className="md:pt-30 pt-15 text-center">
          <Sort />
        </div>

        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div
              className="md:pt-10 pt-20 gap-6 flex flex-col flex-wrap sm:flex-row justify-center 
        sm:gap-5 md:gap-13 lg:gap-18 px-4  "
            >
              {lawyers?.map((lawyer) => (
                <Lawyer key={lawyer.name} lawyer={lawyer} />
              ))}
            </div>

            <Pagination count={count} />
          </>
        )}

        <Modal.Window name="add">
          <AddLawyerForm />
        </Modal.Window>
      </Modal>
      <Footer />
    </div>
  );
}

export default Lawyers;
