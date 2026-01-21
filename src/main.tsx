import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./react-router/layout";
import Home from "./react-router/components/Home/home";
import About from "./react-router/components/About/about";
import Contact from "./react-router/components/ContactUs/contact";
import User from "./react-router/components/User/user.tsx";

import App from "./App.tsx";
import { Route } from "react-router";
import { createRoutesFromElements } from "react-router";
import Github, {
  githubInfoLoader,
} from "./react-router/components/Github/github.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      //userid varible is created in the url to fetch data through unique ids
      <Route path="user/:userid" element={<User />} />
      //loader have reference of the function that fetch data from api
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
);
