import { useState } from "react";
import SectionInfo from "./SectionInfo.jsx";
import "../styles/section.css"

let newID = 0;

export default function Section({ initSection }) {
  const [sections, setSections] = useState(initSection);

  console.log(initSection);

  function handleAdd() {
    setSections([
      ...sections,
      { sectInfo: initSection[0].sectInfo, id: ++newID },
    ]);
  }

  function handleDelete(sectionId) {
    setSections(sections.filter((section) => section.id !== sectionId));
  }

  return (
    <>
      {sections.map((section) => (
        <div>
          <SectionInfo initInfo={section.sectInfo} key={section.id} />
          <button className="deleteButton" onClick={() => handleDelete(section.id)}>Delete</button>
        </div>
      ))}
      <button className="addButton" onClick={handleAdd}>Additional</button>
    </>
  );
}
