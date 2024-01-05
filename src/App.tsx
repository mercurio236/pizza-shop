import { RouterProvider } from "react-router-dom";
import "./global.css";
import { router } from "./pages/routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza Shop" />
      <Toaster richColors/>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
