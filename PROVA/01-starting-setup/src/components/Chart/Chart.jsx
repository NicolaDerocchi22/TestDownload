import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const valArray = props.dataPoints.map((d) => {
    return d.value;
  });
  const max = Math.max(...valArray);

  return (
    <div className="chart">
      {props.dataPoints.map((d) => {
        return(
        <ChartBar
          value={d.value}
          maxValue={max}
          label={d.label}
          key={d.label}
        />)
      })}
    </div>
  );
};

export default Chart;
