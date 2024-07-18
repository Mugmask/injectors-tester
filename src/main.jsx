import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Test from "./components/Test.jsx";
import History from "./components/History/History.jsx";
import HistoryView from "./components/History/HistoryView.jsx";
import Injectors from "./components/Injectors/Injectors.jsx";
import InjectorsAdd from "./components/Injectors/InjectorsAdd.jsx";
import InjectorsView from "./components/Injectors/InjectorsView.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/newTest",
        element: <Test />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/history/:id",
        element: <HistoryView />,
      },
      {
        path: "/injectors",
        element: <Injectors />,
      },
      {
        path: "/injectors/add",
        element: <InjectorsAdd />,
      },
      {
        path: "/injectors/:id",
        element: <InjectorsView />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

