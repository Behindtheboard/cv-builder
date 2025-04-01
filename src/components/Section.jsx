import { useState } from "react";
import SectionInfo from "./SectionInfo.jsx";

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
        <>
          <SectionInfo initInfo={section.sectInfo} key={section.id} />
          <button onClick={() => handleDelete(section.id)}>Delete</button>
        </>
      ))}
      <button onClick={handleAdd}>Additional</button>
    </>
  );
}
