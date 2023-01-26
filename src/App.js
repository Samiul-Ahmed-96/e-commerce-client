import React from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
function App() {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
