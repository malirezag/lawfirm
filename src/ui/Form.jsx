import { useForm } from "react-hook-form";
import useRegistration from "../features/Form/useRegistration";
import toast from "react-hot-toast";
function Form({ onCloseModal }) {
  const { register, handleSubmit, reset } = useForm();
  const { makeRegisteration, isMakingRegister } = useRegistration();

  const onSubmit = (data) => {
    makeRegisteration(data, {
      onSuccess: () => {
        onCloseModal(), reset();
        toast.success("درخواست شما ثبت شد.", {
          duration: 4000,
          style: { backgroundColor: "#e1e1e1", fontSize: "1.3rem" },
        });
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" transition-all duration-300 flex text-nowrap flex-col py-6 px-7
     gap-7 sm:gap-12 sm:text-md  text-gray-50"
    >
      <div
        className="flex gap-2 sm:gap-5 flex-col
       sm:flex-row sm:items-center "
      >
        <label className="w-30 pl-20" htmlFor="fullname ">
          نام و نام خانوادگی:{" "}
        </label>
        <input
          {...register("fullname", { required: true })}
          type="text"
          name="fullname"
          className=" sm:w-screen border border-gray-300 sm:p-2 
          rounded-md p-1 focus:outline-1
           focus:outline-gray-300  "
        />
      </div>

      <div
        className="flex gap-2 sm:gap-5 flex-col sm:flex-row
       sm:items-center"
      >
        <label className="w-30 pl-20" htmlFor="phone">
          شماره تماس :
        </label>
        <input
          {...register("phone", { required: true })}
          type="number"
          name="phone"
          className="sm:w-screen border border-gray-300 sm:p-2
           rounded-md p-1 focus:outline-1
           focus:outline-gray-300  "
        />
      </div>
      <div
        className="flex gap-2 sm:gap-5 flex-col sm:flex-row 
      sm:items-center"
      >
        {" "}
        <label className="w-30 pl-20" htmlFor="subject">
          موضوع:{" "}
        </label>
        <select
          {...register("subject", { required: true })}
          defaultValue="2"
          name="subject"
          id=""
          className="sm:w-screen border border-gray-300
           sm:p-2 rounded-md p-1 focus:outline-1
           focus:outline-gray-300 bg-grey-2  "
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div
        className="flex gap-2 sm:gap-5 flex-col
       sm:flex-row sm:items-center"
      >
        {" "}
        <label className="w-30 pl-20" htmlFor="exp">
          توضیحات:{" "}
        </label>
        <textarea
          {...register("exp")}
          type="text"
          name="exp"
          className="sm:w-screen border border-gray-300 sm:p-2
           rounded-md p-1 focus:outline-1
           focus:outline-gray-300  "
        />
      </div>
      <div className="flex justify-center gap-2">
        <button
          disabled={isMakingRegister}
          type="submit"
          className=" border-3 rounded-md border-gray-300 px-5 py-2 cursor-pointer hover:bg-gray-600"
        >
          ارسال
        </button>
        <button
          disabled={isMakingRegister}
          onClick={() => onCloseModal()}
          className=" border-3 rounded-md border-gray-300 px-5 py-2 cursor-pointer hover:bg-gray-600"
        >
          لغو
        </button>
      </div>
    </form>
  );
}

export default Form;
