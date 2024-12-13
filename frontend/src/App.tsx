import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home-page";
import PostPage from "./pages/post-page";

import SquadsCreatePage from "./pages/squads-create-page";
import Login from "./pages/login-page";
import RouterLayout  from "./pages/router-layout";
import SignUp from "./pages/signup-page";

function App() {

  return (
    <>
      <div className="bg-[#0E1217] text-white">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/" element={<RouterLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/posts/:postId" element={<PostPage />} />
              <Route path="/squads/create" element={<SquadsCreatePage />} />
              <Route path="*" element={<p>This page does not exist</p>} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
