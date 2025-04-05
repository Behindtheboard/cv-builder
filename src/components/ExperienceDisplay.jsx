export default function ExperienceDisplay(data) {
  return (
    <>
      <h2>Experience</h2>
      {data.data.map((section) => (
        <div key={section.id}>
          {section.sectInfo.map((info) => (
            <div key={info.id}>{info.value}</div>
          ))}
        </div>
      ))}
    </>
  );
}
