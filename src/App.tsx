import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import SharedLayout from "./layouts/SharedLayout/SharedLayout";

const MainMenu = lazy(()=> import("./components/MainMenu/MainMenu"))
const Board = lazy(()=>import("./components/Board/Board"))
const Rules = lazy(()=>import("./components/Rules/Rules"))

function App() {

  return (
    <>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<MainMenu />}></Route>
          <Route path="board/:mode" element={<Board/>}/>
          <Route path="rules" element={<Rules/>}/>
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
