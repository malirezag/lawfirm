import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddLawyer as AddLawyerApi } from "./lawyersApi";
import toast from "react-hot-toast";

function useAddLawyer() {
  const queryclient = useQueryClient();
  const { mutate: AddLawyer, isPending } = useMutation({
    mutationFn: AddLawyerApi,
    onSuccess: () => {
      toast.success("وکیل با موفقیت اضافه شد");
      queryclient.invalidateQueries({ active: true });
    },
    onError: (error) => {
      toast.error("عملیات با مشکل مواجه شد");
    },
  });
  return { AddLawyer, isPending };
}

export default useAddLawyer;
