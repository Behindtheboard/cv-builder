import { useState } from "react";
import "./App.css";
import Section from "./components/Section.jsx";
import SectionInfo from "./components/SectionInfo.jsx";
import {
  generalInfo,
  educationInfo,
  experienceInfo,
  educationSection,
  experienceSection,
} from "./components/InitInfo.js";

function App() {
  const [generalData, setGeneralData] = useState(generalInfo);
  const [educationData, setEducationData] = useState(educationInfo);
  const [experienceData, setExperienceData] = useState(experienceInfo);

  function handleGenChange(id, e) {
    setGeneralData(
      generalData.map((data) =>
        data.id === id ? { ...data, value: e.target.value } : data
      )
    );
  }

  return (
    <>
      <div id="builder">
        <div id="header">
          <h1>CV Builder</h1>
        </div>
        <div id="generalInfo">
          <h2>General Information</h2>
          <SectionInfo initInfo={generalData} onChange={handleGenChange} />
        </div>
        <div id="education">
          <h2>Education</h2>
          {/* <Section initSection={educationData} /> */}
        </div>
        <div id="experience">
          <h2>Work Experience</h2>
          {/* <Section initSection={experienceData} /> */}
        </div>
      </div>
      <div id="cv">
        <div id="generalDisplay">
          <h1>{generalData[0].value}</h1>
          {generalData[1].value} | {generalData[2].value}
        </div>
        <div id="educationDisplay"></div>
        <div id="experienceDisplay"></div>
      </div>
    </>
  );
}

export default App;
