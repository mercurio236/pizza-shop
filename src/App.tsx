import { RouterProvider } from "react-router-dom";
import { Button } from "./components/ui/button";
import "./global.css";
import { router } from "./pages/routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza Shop"/>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
