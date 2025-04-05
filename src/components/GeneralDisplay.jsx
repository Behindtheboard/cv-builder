export default function GeneralDisplay(data) {
  return (
    <div id="generalDisplay">
      <h1>{data.data[0].value}</h1>
      {data.data[1].value} | {data.data[2].value}
    </div>
  );
}
