import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLawyer as updateLawyerApi } from "./lawyersApi";
import toast from "react-hot-toast";

function useUpdateLawyer() {
  const queryclient = useQueryClient();
  const { mutate: updateLawyer, isPending } = useMutation({
    mutationFn: updateLawyerApi,
    onSuccess: () => {
      toast.success("کاربر با موفقیت آپدیت شد");
      queryclient.invalidateQueries({ active: true });
    },
    onError: (error) => {
      toast.error("عملیات موفقیت آمیز نبود");
    },
  });
  return { updateLawyer, isPending };
}

export default useUpdateLawyer;
