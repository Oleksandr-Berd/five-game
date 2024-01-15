import { Route, Routes } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import MainMenu from "./components/MainMenu/MainMenu";

function App() {
  return (
    <>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<MainMenu />}></Route>
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
