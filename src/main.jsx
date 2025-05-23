import { StrictMode, use} from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/router";
import AuthProvider from "./context/AuthProvider";
import { AuthContext } from "./context/AuthContext";


const AppWrapper = () => {
  const { theme } = use(AuthContext);

  return (
    <div className={theme}>
      <RouterProvider router={router} />
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AppWrapper/>
    </AuthProvider>
  </StrictMode>
);
