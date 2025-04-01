import "./App.css";
import Section from "./components/Section.jsx";
import SectionInfo from "./components/SectionInfo.jsx";
import {
  generalInfo,
  educationSection,
  experienceSection,
} from "./components/InitInfo.js";

function App() {
  return (
    <>
      <div id="builder">
        <div id="header">
          <h1>CV Builder</h1>
        </div>
        <div id="generalInfo">
          <h2>General Information</h2>
          <SectionInfo initInfo={generalInfo} />
        </div>
        <div id="education">
          <h2>Education</h2>
          <Section initSection={educationSection} />
        </div>
        <div id="experience">
          <h2>Work Experience</h2>
          <Section initSection={experienceSection} />
        </div>
      </div>
      <div id="cv"></div>
    </>
  );
}

export default App;
