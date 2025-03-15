import { useMutation } from "@tanstack/react-query";
import { signUp } from "./apiAuth";
import toast from "react-hot-toast";

function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success(
        "برای تکمیل ساخت حساب به صندوق دریاف ایمیل خود مراجعه کنید!"
      );
    },
  });
  return { signup, isPending };
}

export default useSignup;
