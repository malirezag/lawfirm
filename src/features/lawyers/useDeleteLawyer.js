import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLawyer as deleteLawyerApi } from "./lawyersApi";
import toast from "react-hot-toast";

function useDeleteLawyer() {
  const queryclient = useQueryClient();
  const { mutate: deleteLawyer, isPending } = useMutation({
    mutationFn: deleteLawyerApi,
    onSuccess: () => {
      toast.success("با موفقیت حذف شد");
      queryclient.invalidateQueries({ active: true });
    },
    onError: (err) => {
      toast.error("عملیات موفقیت آمیز نبود");
    },
  });

  return { deleteLawyer, isPending };
}

export default useDeleteLawyer;
