import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Programmes } from "./screens/Programmes/Programmes";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Programmes />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
