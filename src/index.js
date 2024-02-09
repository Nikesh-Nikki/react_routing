import ReactDOM from "react-dom";
import React from "react";
import App from "./App.jsx";
import Profile from "./Profile.jsx";
import { createRoot } from 'react-dom/client';
import Nikki from "./Nikki.jsx";
import Bucky from "./Bucky.jsx";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import DefaultProfile from "./DefaultProfile.jsx";

const router = createBrowserRouter(
    [{
        path : "/",
        element : <App />
    },
    {
        path : "profile",
        element : <Profile />,
        children : [
            // {path : "",element : <DefaultProfile/>},
            {index : true,element : <DefaultProfile/>},
            {path : "nikki",element : <Nikki/>},
            {path : "bucky",element : <Bucky/>}
        ]
    }]
);

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);