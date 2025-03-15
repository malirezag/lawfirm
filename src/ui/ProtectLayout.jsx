import { useEffect } from "react";
import useUser from "../features/Authentication/useUser";
import { useNavigate } from "react-router-dom";

function ProtectLayout({ children }) {
  const navigate = useNavigate();

  // .1
  const { isAuthenticated, isLoading } = useUser();

  // 2.
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // 3.
  if (isLoading)
    return (
      <p className="h-screen flex justify-center items-center">
        شکیبا باشید...
      </p>
    );

  // 4.
  if (isAuthenticated) return children;
}

export default ProtectLayout;
