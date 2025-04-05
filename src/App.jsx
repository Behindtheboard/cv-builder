import { useState } from "react";
import "./App.css";
import Section from "./components/Section.jsx";
import SectionInfo from "./components/SectionInfo.jsx";
import EducationDisplay from "./components/EducationDisplay.jsx";
import {
  generalInfo,
  educationSection,
  experienceSection,
} from "./components/InitInfo.js";

function App() {
  const [generalData, setGeneralData] = useState(generalInfo);
  const [educationData, setEducationData] = useState(educationSection);
  // const [experienceData, setExperienceData] = useState(experienceInfo);

  function handleGenChange(id, e) {
    setGeneralData(
      generalData.map((data) =>
        data.id === id ? { ...data, value: e.target.value } : data
      )
    );
  }

  function handleEduChange(sectionData) {
    setEducationData(sectionData);
  }

  return (
    <>
      <div id="builder">
        <div id="header">
          <h1>CV Builder</h1>
        </div>
        <div id="generalInfo">
          <h2>General Information</h2>
          {/* <SectionInfo initInfo={generalData} onChange={handleGenChange} /> */}
        </div>
        <div id="education">
          <h2>Education</h2>
          <Section initSection={educationData} onChange={handleEduChange} />
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
        <EducationDisplay data={educationData} />
        <div id="experienceDisplay"></div>
      </div>
    </>
  );
}

export default App;
