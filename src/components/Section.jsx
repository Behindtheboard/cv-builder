import { useState } from "react";
import SectionInfo from "./SectionInfo.jsx";
import { educationSection } from "./InitInfo.js";
import "../styles/section.css";

let newID = 0;

export default function Section({ initSection, onChange }) {
  const [sections, setSections] = useState(initSection);

  function handleAdd() {
    setSections([
      ...sections,
      { sectInfo: educationSection[0].sectInfo, id: ++newID },
    ]);
  }

  function handleDelete(sectionId) {
    setSections(sections.filter((section) => section.id !== sectionId));
  }

  function handleChange(infoId, e, sectionId) {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            sectInfo: section.sectInfo.map((info) =>
              info.id === infoId ? { ...info, value: e.target.value } : info
            ),
          };
        } else {
          return section;
        }
      })
    );
  }

  onChange(sections);

  return (
    <>
      {sections.map((section) => (
        <div key={section.id}>
          <SectionInfo
            initInfo={section.sectInfo}
            onChange={(...args) => handleChange(...args, section.id)}
          />
          <button
            className="deleteButton"
            onClick={() => handleDelete(section.id)}
          >
            Delete
          </button>
        </div>
      ))}
      <button className="addButton" onClick={handleAdd}>
        Additional
      </button>
    </>
  );
}
