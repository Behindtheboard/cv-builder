export default function ExperienceDisplay(data) {
  return (
    <>
      <h2>Experience</h2>
      {data.data.map((section) => (
        <div key={section.id}>
          <div id='company-length'>
            {section.sectInfo.map((info) =>
              info.label === "Company: " || info.type === "date" ? (
                <div key={info.id}>{info.value}</div>
              ) : null
            )}
          </div>
          {section.sectInfo.map((info) =>
            info.label === "Company: " || info.type === "date" ? (
              null
            ) : <div key={info.id}>{info.value}</div>
          )}
        </div>
      ))}
    </>
  );
}
