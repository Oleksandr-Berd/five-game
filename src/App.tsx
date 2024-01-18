import { Route, Routes } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import MainMenu from "./components/MainMenu/MainMenu";
import Board from "./components/Board/Board";

function App() {

  return (
    <>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<MainMenu />}></Route>
          <Route path="board/:mode" element={<Board/>}/>
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
