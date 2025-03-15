import { useForm } from "react-hook-form";
import useUser from "../features/Authentication/useUser";
import useUpdateUser from "../features/Authentication/useUpdateUser";

function UpdateNameForm() {
  const { user } = useUser();
  const userEmail = user?.user_metadata.email;
  const fullname = user?.user_metadata.fullName;
  const { register, handleSubmit } = useForm();
  const { updateUser } = useUpdateUser();

  const onsubmit = ({ fullName, password }) => {
    updateUser({ fullName, password });
  };

  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="rounded-md bg-white text-gray-700
    flex flex-col p-10 pt-6 gap-5 w-80 h-auto sm:w-md"
    >
      <div className="flex flex-col gap-2">
        <p className="text-gray-600 text-center text-xl font-semibold mb-3">
          تغییر نام و نام خانوادگی{" "}
        </p>
        <label className="w-80 pl-20 " htmlFor="email ">
          ایمیل{" "}
        </label>
        <input
          type="email"
          value={userEmail}
          disabled
          className="light border  bg-gray-200 border-gray-300 p-1 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="w-80 pl-20" htmlFor="email ">
          نام و نام خانوادگی
        </label>
        <input
          {...register("fullName")}
          defaultValue={fullname}
          type="text"
          name="fullName"
          className="light border border-gray-300 p-1 rounded-md"
        />
      </div>

      <div className="flex gap-2 flex-col sm:flex-row">
        <button
          type="submit"
          className="bg-grey-3 text-white p-2 rounded-md
     cursor-pointer hover:bg-gray-800 text-lg mt-2"
        >
          تایید اطلاعات جدید
        </button>

        <button
          type="reset"
          className=" text-gray-600 p-2 rounded-md
     cursor-pointer text-bade mt-2 border border-gray-400"
        >
          لغو تغییرات{" "}
        </button>
      </div>
    </form>
  );
}

export default UpdateNameForm;
