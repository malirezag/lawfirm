import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useSearchParams, useNavigate } from "react-router-dom";
import paginationItem from "../helpers/paginationItem";

function Pagination({ count }) {
  const navigate = useNavigate();
  const itemsPerPage = paginationItem();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  if (!searchParams.get("page")) navigate("/lawyers?page=1");

  const pageCount = Math.ceil(count / itemsPerPage);
  function Next() {
    if (currentPage >= pageCount) return;
    searchParams.set("page", currentPage + 1);
    setSearchParams(searchParams);
  }
  function Prev() {
    if (currentPage <= 1) return;
    searchParams.set("page", currentPage - 1);
    setSearchParams(searchParams);
  }

  return (
    <div className=" mt-14 flex justify-center items-center gap-6">
      <button
        onClick={Next}
        className="text-3xl text-gray-200 hover:border
       hover:border-gray-500 hover:rounded-full border 
       border-transparent cursor-pointer"
      >
        <GrFormNext />
      </button>
      <p className="text-gray-300 text-lg">{`صفحه  ${currentPage} از ${pageCount}  `}</p>
      <button
        onClick={Prev}
        className="text-3xl text-gray-200 hover:border
       hover:border-gray-500 hover:rounded-full border 
       border-transparent cursor-pointer"
      >
        <GrFormPrevious />
      </button>
    </div>
  );
}

export default Pagination;
