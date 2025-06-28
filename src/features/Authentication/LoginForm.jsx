import { useState } from "react";
import useLogin from "./useLogin";
import BackButton from "../../ui/BackButton";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending } = useLogin();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onError: () => {
          setEmail(""), setPassword("");
        },
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  }
  return (
    <>
      <BackButton to="/" />
      <div className="flex items-center h-screen w-90 justify-center mx-auto flex-col ">
        <form
          onSubmit={handleSubmit}
          className="rounded-md  bg-gray-100
        flex flex-col p-10 pt-6 gap-5 w-96 h-auto "
        >
          {" "}
          <h2 className="text-center text-2xl mb-3 text-gray-800 border-b border-b-gray-400 pb-4">
            ورود
          </h2>
          <div className="flex flex-col gap-2">
            <label className="w-30 pl-20" htmlFor="email ">
              ایمیل:{" "}
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              disabled={isPending}
              className="light border border-gray-400 p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="" htmlFor="password ">
              {" "}
              رمز:{" "}
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              disabled={isPending}
              className="light border border-gray-400 p-1 rounded-md "
            />
          </div>
          <button
            disabled={isPending}
            type="submit"
            className="bg-gray-700 text-white p-2 rounded-md
         cursor-pointer hover:bg-gray-800 text-lg mt-2"
          >
            {isPending ? "درحال ورود..." : "ورود"}
          </button>
          <button
            className="cursor-pointer text-base text-blue-500"
            onClick={(e) => {
              e.preventDefault();
              navigate("/signup");
            }}
          >
            اگر حساب کاربری ندارید کلیک کنید
          </button>
        </form>
        <p className="text-lg py-5">
          جهت تست از ایمیل و رمز زیر استفاده کنید (از فیلترشکن استفاده کنید)
        </p>
        <p className="text-lg ">malirezag@gmail.com</p>
        <p className="text-lg ">123123123</p>
      </div>
    </>
  );
}

export default LoginForm;
