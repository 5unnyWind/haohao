import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Haohao from "./pages/haohao";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/haohao",
    element: <Haohao />,
  },
]);

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);
