import { useForm } from "react-hook-form";
import useUpdateUser from "../features/Authentication/useUpdateUser";

function UpdatePasswordForm() {
  const { register, getValues, handleSubmit, reset } = useForm();
  const { updateUser } = useUpdateUser();

  const onsubmit = ({ fullName, password }) => {
    updateUser({ fullName, password }, { onSuccess: () => reset() });
  };
  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="rounded-md bg-white
    flex flex-col p-10 pt-6 gap-5 w-80 h-auto sm:w-md"
    >
      <div className="flex flex-col gap-2">
        <p className="text-gray-600 text-center text-xl font-semibold mb-3">
          تغییر رمز{" "}
        </p>
        <label className="w-80 pl-20 text-gray-600" htmlFor="email ">
          رمز جدید
        </label>
        <input
          {...register("password", {
            required: true,
            minLength: { value: 8, message: "رمز حداقل باید 8 رقم باشد" },
          })}
          type="password"
          name="password"
          className="light border   p-1 border-gray-300 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="w-80 pl-20 text-gray-600" htmlFor="email ">
          تکرار رمز جدید
        </label>
        <input
          {...register("confirmPassword", {
            required: true,
            validate: (value) => getValues().password === value,
            minLength: { value: 8, message: "رمز حداقل باید 8 رقم باشد" },
          })}
          type="password"
          name="confirmPassword"
          className="light border   p-1 border-gray-300 rounded-md"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
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
     cursor-pointer text-base mt-2 border border-gray-400"
        >
          لغو تغییرات{" "}
        </button>
      </div>
    </form>
  );
}

export default UpdatePasswordForm;
