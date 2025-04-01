import { useState } from "react";
import "../styles/SectionInfo.css";

export default function SectionInfo({ initInfo }) {
  const [infos, setInfos] = useState(initInfo);
  const [edit, setEdit] = useState(true);

  function toggleEdit(e) {
    e.preventDefault();
    setEdit((prev) => !prev);
  }

  function handleInputChange(id, e) {
    setInfos(
      infos.map((info) =>
        info.id === id ? { ...info, value: e.target.value } : info
      )
    );
  }

  if (!edit) {
    return (
      <>
        <div className="genSection">
          {infos.map((info) => (
            <div key={info.id} className="genInfo">
              {info.label} {info.value}
            </div>
          ))}
        </div>
        <button onClick={toggleEdit}>Edit</button>
      </>
    );
  }

  return (
    <>
      <form className="genSection">
        {infos.map((info) => (
          <label key={info.id} className="genInput">
            {info.label}
            <input
              type={info.type}
              value={info.value}
              onChange={(e) => handleInputChange(info.id, e)}
            />
          </label>
        ))}
      </form>
      <button onClick={toggleEdit}>Save</button>
    </>
  );
}
