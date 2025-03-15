import { useForm } from "react-hook-form";
import usePostComment from "../hooks/usePostComment";
import { MdOutlineModeComment } from "react-icons/md";

function CommentForm() {
  const { register, handleSubmit, reset } = useForm();
  const { mutate } = usePostComment();
  function onSubmit(data) {
    mutate(data, {
      onSuccess: reset(),
    });
  }

  return (
    <div className="flex text-grey-3 p-2 bg-gray-200 justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-sm md:text-lg p-6 gap-4 w-80   "
      >
        <div className="flex flex-row justify-between border-b pb-2 border-gray-400 items">
          <p className=" text-lg ">نظر خود را بنویسید</p>
          <MdOutlineModeComment />
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="fullname">نام و نام خانوادگی: </label>
          <input
            {...register("fullname", { required: true })}
            className="light bg-gray-50 text-grey-4  outline-0 p-1 rounded-md"
            type="text"
            name="fullname"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="email"> ایمیل: </label>
          <input
            {...register("email", { required: true })}
            className="light bg-gray-50 text-grey-4   outline-0 p-1 rounded-md"
            type="email"
            name="email"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="exp">متن: </label>
          <textarea
            {...register("exp", { required: true })}
            className="light bg-gray-50 text-grey-4  outline-0 p-1 rounded-md"
            name="exp"
            id=""
          ></textarea>
        </div>

        <button className="bg-grey-3 font-semibold text-gray-50 py-2 rounded-md">
          ارسال
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
