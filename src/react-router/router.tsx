import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Contact from "./components/ContactUs/contact";
import User from "./components/User/user.tsx";

import { Route } from "react-router";
import { createRoutesFromElements } from "react-router";
import Github, { githubInfoLoader } from "./components/Github/github.tsx";

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

export default router;
