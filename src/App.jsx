import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ChatPage from "./pages/ChatPage";
import AppLayout from "./ui/AppLayout";
import Form from "./features/Authentication/LoginForm";
import PageNotFound from "./ui/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import LoginForm from "./features/Authentication/LoginForm";
import ProtectLayout from "./ui/ProtectLayout";
import SignUpForm from "./features/Authentication/SignUpForm";
import UpdateAccount from "./features/Authentication/UpdateAccount";
import Lawyers from "./pages/Lawyers";
const queryClient = new QueryClient();
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 200,
      easing: "ease-in-out",
    });
  });
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginForm />} />
          <Route path="lawyers" element={<Lawyers />} />
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/" />} />
            <Route path="home" element={<Home />} />
            <Route path="updateaccount" element={<UpdateAccount />} />
            <Route path="signup" element={<SignUpForm />} />
            <Route
              path="blog"
              element={
                <ProtectLayout>
                  <Blog />
                </ProtectLayout>
              }
            />
            <Route
              path="chat"
              element={
                <ProtectLayout>
                  <ChatPage />
                </ProtectLayout>
              }
            />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
