export default function EducationDisplay(data) {
  return (
    <>
      <h2>Education</h2>
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
