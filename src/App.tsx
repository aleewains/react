// import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
// import Index from "./context-api";
// import Todo from "./contextApi-localStorage/Todo";
import TodoRedux from "./redux-store/main";
import { store } from "./redux-store/redux/store";

// import router from "./react-router/router.tsx";
// import { RouterProvider } from "react-router-dom";
// import Converter from "./converter/currrencyConverter";
// import BgChanger from "./bgChanger";
// import PassGenerator from "./passGenerator";

function App() {
  return (
    <>
      {/* <BgChanger /> */}
      {/* <PassGenerator /> */}
      {/* <Converter /> */}
      {/* <Me /> */}
      {/* <RouterProvider router={router} /> */}
      {/* <Index /> */}
      {/* <Todo /> */}

      <Provider store={store}>
        <TodoRedux />
      </Provider>
    </>
  );
}

export default App;
