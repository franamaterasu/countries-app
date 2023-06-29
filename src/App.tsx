import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { WhistList } from "./pages/whistlist";

export const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whistlist" element={<WhistList />} />
      </Routes>
    </>
  );
};
