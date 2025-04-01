import "./App.css";
import SectionInfo from "./components/SectionInfo.jsx";
import { generalInfo, educationInfo, experienceInfo } from "./infoBuilder.js";

function App() {
  return (
    <>
      <div id="header">
        <h1>CV Builder</h1>
      </div>
      <div id="cv">
        <div id="generalInfo">
          <h2>General Information</h2>
          <SectionInfo initInfo={generalInfo} />
        </div>
        <div id="education">
          <h2>Education</h2>
          <SectionInfo initInfo={educationInfo} />
        </div>
        <div id="experience"></div>
        <h2>Work Experience</h2>
        <SectionInfo initInfo={experienceInfo} />
      </div>
      <div id="footer"></div>
    </>
  );
}

export default App;
