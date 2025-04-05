import { useState } from "react";
import "./App.css";
import Section from "./components/Section.jsx";
import SectionInfo from "./components/SectionInfo.jsx";
import EducationDisplay from "./components/EducationDisplay.jsx";
import ExperienceDisplay from "./components/ExperienceDisplay.jsx";
import GeneralSection from "./components/GeneralSection.jsx";
import GeneralDisplay from "./components/GeneralDisplay.jsx";
import {
  generalInfo,
  educationSection,
  experienceSection,
} from "./components/InitInfo.js";

function App() {
  const [generalData, setGeneralData] = useState(generalInfo);
  const [educationData, setEducationData] = useState(educationSection);
  const [experienceData, setExperienceData] = useState(experienceSection);

  function handleGenChange(sectionData) {
    setGeneralData(sectionData);
  }
  function handleEduChange(sectionData) {
    setEducationData(sectionData);
  }
  function handleExpChange(sectionData) {
    setExperienceData(sectionData);
  }

  return (
    <>
      <div id="builder">
        <div id="header">
          <h1>CV Builder</h1>
        </div>
        <div id="generalInfo">
          <h2>General Information</h2>
          <GeneralSection onChange={handleGenChange} />
        </div>
        <div id="experience">
          <h2>Work Experience</h2>
          <Section initSection={experienceData} onChange={handleExpChange} />
        </div>
        <div id="education">
          <h2>Education</h2>
          <Section initSection={educationData} onChange={handleEduChange} />
        </div>
      </div>
      <div id="cv">
        <GeneralDisplay data={generalData} />
        <ExperienceDisplay data={experienceData} />
        <EducationDisplay data={educationData} />
      </div>
    </>
  );
}

export default App;
