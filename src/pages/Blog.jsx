import { SlMagnifier } from "react-icons/sl";
import Header from "../ui/Header";

function Blog() {
  return (
    <div className="bg-grey-3 h-screen">
      <Header>
        <div
          className="border border-gray-100 flex flex-row items-center py-1 px-4 
        rounded-full mt-2 w-fit "
        >
          <input type="text" className=" focus:outline-0 py-1" />
          <span>
            <SlMagnifier />
          </span>
        </div>
      </Header>
      <p className="flex justify-center h-screen items-center text-xl text-grey-1">
        اطلاعاتی برای نمایش وجود ندارد...
      </p>
    </div>
  );
}

export default Blog;
