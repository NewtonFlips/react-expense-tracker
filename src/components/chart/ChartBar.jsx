import classes from "./ChartBar.module.css";

const ChartBar = (props) => {
  const amounts = props.data.map((i) => {
    return i.value;
  });

  const maxValue = Math.max(...amounts) || 1;

  const fillHeight = amounts.map((i) => {
    return `${Math.round((i / maxValue) * 100)}%`;
  });

  // const fillHeight = `${}%`

  //   console.log(maxValue);
  return (
    <div className={classes.chartBarContainer}>
      {props.data.map((item, i) => (
        <div key={props.data[i].month}>
          <div className={classes.chartBar}>
            <div
              className={classes.chartBarFill}
              style={{ height: fillHeight[i] }}
            ></div>
          </div>
          <div className={classes.month}>{item.month}</div>
        </div>
      ))}
    </div>
  );
};

export default ChartBar;
