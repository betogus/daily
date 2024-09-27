import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home-page";
import PostPage from "./pages/post-page";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import SquadsCreatePage from "./pages/squads-create-page";
import OnboardingPage from "./pages/onboarding-page";

function App() {
  const location = useLocation();

  const noLayoutRoutes = ["/onboarding"];
  const shouldShowLayout = !noLayoutRoutes.includes(location.pathname);

  return (
    <>
      <div className="bg-[#0E1217] text-white">
        {shouldShowLayout && <Header />}
        <div className="flex">
          {shouldShowLayout && <SideBar />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
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
