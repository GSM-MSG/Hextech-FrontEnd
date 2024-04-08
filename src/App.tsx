import { Route, Routes } from "react-router-dom";
import { MainPage, SignInPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default App;
