import { useState } from "react";
import "../styles/SectionInfo.css";

export default function SectionInfo({ initInfo, onChange }) {
  const [infos, setInfos] = useState(initInfo);
  const [edit, setEdit] = useState(true);

  function toggleEdit(e) {
    e.preventDefault();
    setEdit((prev) => !prev);
  }

  function handleInputChange(infoId, e) {
    setInfos(
      infos.map((info) =>
        info.id === infoId ? { ...info, value: e.target.value } : info
      )
    );
    onChange(infoId, e);
  }

  return (
    <>
      <form className="genSection">
        {infos.map((info) => (
          <label key={info.id} className="genInput">
            {info.label}

            {!edit && <div key={info.id}>{info.value}</div>}

            {edit && (
              <input
                type={info.type}
                value={info.value}
                onChange={(e) => handleInputChange(info.id, e)}
              />
            )}
          </label>
        ))}
      </form>
      <button onClick={toggleEdit}>{edit ? "Save" : "Edit"}</button>
    </>
  );
}
