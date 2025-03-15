import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { replace, useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      navigate("/home", { replace: true });
    },
    onError: () => {
      toast.error("رمز یا نام کابری اشتباه است.");
    },
  });

  return { login, isPending };
}

export default useLogin;
