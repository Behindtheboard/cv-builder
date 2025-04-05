import { useState } from "react";
import SectionInfo from "./SectionInfo";
import { generalInfo } from "./InitInfo";

export default function GeneralSection({ onChange }) {
  const [infos, setInfos] = useState(generalInfo);

  function handleChange(infoId, e) {
    setInfos(
      infos.map((info) =>
        info.id === infoId ? { ...info, value: e.target.value } : info
      )
    );
  }
  
  onChange(infos);

  return (
    <>
      <SectionInfo initInfo={generalInfo} onChange={handleChange} />
    </>
  );
}
