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

  return (
    <>
      {sections.map((section) => (
        <SectionInfo initInfo={section.sectInfo} key={section.id} />
      ))}
      <button onClick={handleAdd}>Additional</button>
    </>
  );
}
