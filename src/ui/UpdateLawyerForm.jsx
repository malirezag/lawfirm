import { useForm } from "react-hook-form";
import useUpdateLawyer from "../features/lawyers/useUpdateLawyer";
import FormErrors from "./FormErrors";

function EditLawyerForm({ lawyer, onCloseModal }) {
  const { id } = lawyer;
  const { register, reset, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { updateLawyer, isPending } = useUpdateLawyer();
  const onsubmit = ({ phone, name, exp, image }) => {
    const Updatedimage = image[0];
    updateLawyer(
      { id, phone, name, exp, image: Updatedimage },
      { onSuccess: () => onCloseModal() }
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
       sm:flex-row sm:items-center  "
      >
        <label className="w-30 pl-20 " htmlFor="name ">
          نام و نام خانوادگی
        </label>
        <input
          {...register("name", { required: "نام و نام خانوادگی را وارد کنید" })}
          defaultValue={lawyer.name}
          type="text"
          name="name"
          className=" sm:w-screen border border-gray-200 sm:p-2 
          rounded-md p-1 focus:outline-1
           focus:outline-gray-300  "
        />
      </div>
      <FormErrors errors={errors?.name?.message} style="mr-35" />
      <div
        className="flex gap-2 sm:gap-5 flex-col
       sm:flex-row sm:items-center "
      >
        <label className="w-30 pl-20" htmlFor="phone ">
          شماره تلفن
        </label>
        <input
          {...register("phone", {
            required: "یک شماره تلفن وارد کنید",
            pattern: {
              value: /^(?:\+98|0)?9\d{9}$/,
              message: "شماره تلفن صحیح نیست",
            },
          })}
          defaultValue={lawyer.phone}
          type="text"
          name="phone"
          className=" sm:w-screen border border-gray-300 sm:p-2 
          rounded-md p-1 focus:outline-1
           focus:outline-gray-300  "
        />
      </div>
      <FormErrors errors={errors?.phone?.message} style="mr-35" />
      <div
        className="flex gap-2 sm:gap-5 flex-col
       sm:flex-row sm:items-center "
      >
        <label className="w-30 pl-20" htmlFor="text ">
          متن توضیحات{" "}
        </label>
        <textarea
          {...register("exp")}
          defaultValue={lawyer.exp}
          type="text"
          name="exp"
          className=" sm:w-screen border border-gray-300 sm:p-2 
          rounded-md p-1 h-28 focus:outline-1
           focus:outline-gray-300  "
        />
      </div>

      <div
        className="flex gap-2 sm:gap-5 flex-col sm:flex-row
       sm:items-center"
      >
        <label htmlFor="image">عکس جدید</label>
        <input
          {...register("image")}
          type="file"
          accept="image/*"
          className="sm:w-screen border border-gray-300 
           rounded-md file:py-2 file:px-4 file:rounded-md file:ml-5 
           file:cursor-pointer cursor-pointer focus:outline-1 md:mr-13
           focus:outline-gray-300 file:bg-grey-4  "
        />
      </div>

      <div className="flex justify-center gap-2">
        <button
          disabled={isPending}
          type="submit"
          className="bg-grey-4 border-3 rounded-md border-gray-300 px-5 py-2 cursor-pointer
           hover:bg-grey-3"
        >
          {isPending ? "درحال تایید..." : " تایید"}
        </button>{" "}
      </div>
    </form>
  );
}

export default EditLawyerForm;
