import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home-page";
import PostPage from "./pages/post-page";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import SquadsCreatePage from "./pages/squads-create-page";

function App() {
  return (
    <>
      <div className="bg-[#0E1217] text-white">
        <Header />
        <div className="flex">
          <SideBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts/:postId" element={<PostPage />} />
            <Route path="/squads/create" element={<SquadsCreatePage />} />
            <Route path="*" element={<p>This page does not exist</p>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
