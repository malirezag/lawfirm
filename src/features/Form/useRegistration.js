import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRegister } from "../../services/apiRegisterForm";
import toast from "react-hot-toast";

function useRegistration() {
  const queryClient = useQueryClient();
  const { mutate: makeRegisteration, isPending: isMakingRegister } =
    useMutation({
      mutationFn: makeRegister,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["register-form"] });
      },

      onError: (err) =>
        toast.error(err.message, {
          duration: 4000,
          style: { backgroundColor: "#e1e1e1", fontSize: "1.3rem" },
        }),
    });
  return { makeRegisteration, isMakingRegister };
}

export default useRegistration;
