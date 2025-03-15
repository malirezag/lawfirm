import { useMutation } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useUpdateUser() {
  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      toast.success("اطلاعات با موفقیت ذخیره شد");
    },
    onError: () => {
      toast.error("خطایی رخ داد");
    },
  });

  return { updateUser, isPending };
}

export default useUpdateUser;
