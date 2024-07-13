import "./App.css";
import Blob from "./components/Blob/Blob";
import EndSection from "./components/EndSection/EndSection.tsx";
import HomePage from "./components/HomePage/HomePage";
import Journey from "./components/Journey/Journey";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies.tsx";
import TitleSection from "./components/TitleSection/TitleSection";

function App() {
  return (
    <div className="body-layer">
      <div className="background-layer">
      <Blob />
      </div>
      <HomePage>
        <TitleSection />
        <ProfileSection />
        <Projects />
        <Journey />
        <Technologies />
        <EndSection />
      </HomePage>
    </div>
  );
}

export default App;
