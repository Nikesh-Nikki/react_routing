import ReactDOM from "react-dom";
import React from "react";
import App from "./App.jsx";
import Profile from "./Profile.jsx";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
    [{
        path : "/",
        element : <App />
    },
    {
        path : "/profile",
        element : <Profile />
    }]
);

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);