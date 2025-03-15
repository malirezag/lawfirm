import { IoPersonCircleOutline } from "react-icons/io5";

function CommentRow({ data }) {
  return (
    <div
      className="flex flex-col w-80 lg:w-[40rem] xl:w-4xl bg-gray-100 m-4 gap-3
      px-4 py-3 text-grey-3 rounded-md shadow-xl "
    >
      <div className="flex items-center gap-2">
        <IoPersonCircleOutline className="text-4xl text-grey-2 xl:text-5xl " />
        <p>{data.fullname} : </p>
      </div>
      <p className="border-b border-gray-200 pb-2">{data.exp}</p>
    </div>
  );
}

export default CommentRow;
