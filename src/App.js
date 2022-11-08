import React from "react";
import { CreateContainer, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      <main className="mt-24 p-8 w-full">
        <Routes>
          <Route path="/*" element={<MainContainer />}></Route>
          <Route path="/creatItem" element={<CreateContainer />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
