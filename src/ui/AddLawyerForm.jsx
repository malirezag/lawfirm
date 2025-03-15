import { useForm } from "react-hook-form";
import useAddLawyer from "../features/lawyers/useAddLawyer";
import isPhoneValidate from "../helpers/isPhoneValidate";
import FormErrors from "./FormErrors";

function AddLawyerForm({ onCloseModal }) {
  const { register, reset, handleSubmit, getValues, formState } = useForm();
  const { errors } = formState;

  const { AddLawyer, isPending } = useAddLawyer();
  const onsubmit = (lawyer) => {
    const image = lawyer.image[0];

    AddLawyer(
      { lawyer, image },
      {
        onSuccess: () => {
          reset();
          onCloseModal();
        },
      }
    );
  };
  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className=" transition-all duration-300 flex text-nowrap flex-col py-6 px-7
     gap-7 sm:gap-9 sm:text-md  text-gray-50"
    >
      <div
        className="flex gap-2 sm:gap-5 flex-col
       sm:flex-row sm:items-center "
      >
        <label className="w-30 pl-20" htmlFor="name">
          نام و نام خانوادگی:{" "}
        </label>
        <input
          disabled={isPending}
          {...register("name", { required: "وارد کردن نام ضروری است" })}
          type="text"
          className=" sm:w-screen border border-gray-300 sm:p-2 
          rounded-md p-1 focus:outline-1
           focus:outline-gray-300  "
        />
      </div>
      <FormErrors style={"mr-35"} errors={errors?.name?.message} />
      <div
        className="flex gap-2 sm:gap-5 flex-col sm:flex-row
       sm:items-center"
      >
        <label className="w-30 pl-20" htmlFor="phone">
          شماره تماس :
        </label>

        <input
          disabled={isPending}
          {...register("phone", {
            required: "لطفا شماره تلفن را وارد کنید",
            pattern: {
              value: /^(?:\+98|0)?9\d{9}$/,
              message: "شماره تلفن صحیح نیست",
            },
          })}
          type="text"
          className="sm:w-screen border border-gray-300 sm:p-2
           rounded-md p-1 focus:outline-1
           focus:outline-gray-300  "
        />
      </div>
      <FormErrors style={"mr-35"} errors={errors?.phone?.message} />
      <div
        className="flex gap-2 sm:gap-5 flex-col
       sm:flex-row sm:items-center"
      >
        {" "}
        <label className="w-30 pl-20" htmlFor="exp">
          توضیحات:{" "}
        </label>
        <textarea
          disabled={isPending}
          {...register("exp", { required: "لطف متن توضیحات را وارد کنید" })}
          className="sm:w-screen border border-gray-300 sm:p-2
           rounded-md p-1 focus:outline-1
           focus:outline-gray-300 h-28 "
        />
      </div>
      <FormErrors style={"mr-35"} errors={errors?.exp?.message} />
      <div
        className="flex gap-2 sm:gap-5 flex-col sm:flex-row
       sm:items-center"
      >
        <input
          disabled={isPending}
          {...register("image", { required: "لطفا یک تصویر وارد کنید " })}
          type="file"
          accept="image/*"
          className="sm:w-screen border border-gray-300 
           rounded-md file:py-2 file:px-4 file:rounded-md file:ml-5 
           file:cursor-pointer cursor-pointer focus:outline-1 md:mr-32
           focus:outline-gray-300 file:bg-grey-4  "
        />
      </div>
      <FormErrors style={"mr-35"} errors={errors?.image?.message} />
      <div className="flex justify-center gap-2">
        <button
          disabled={isPending}
          type="submit"
          className="bg-green-600 border-3 rounded-md border-gray-300 px-5 py-2 cursor-pointer hover:bg-green-500"
        >
          {isPending ? "درحال ارسال..." : " ارسال"}
        </button>
        <button
          disabled={isPending}
          onClick={() => onCloseModal()}
          className="bg-red-600 border-3 rounded-md border-gray-300 px-5 py-2 
        cursor-pointer hover:bg-red-500"
        >
          لغو
        </button>
      </div>
    </form>
  );
}

export default AddLawyerForm;
