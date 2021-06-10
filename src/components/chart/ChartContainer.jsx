import ChartBar from "./ChartBar";
import classes from "./ChartContainer.module.css";

const ChartContainer = (props) => {
  const chartData = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jun", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];

  const monthlyAmounts = props.data.map((item, i) => {
    return {
      month: item.date.getMonth(),
      amount: item.amount,
    };
  });

  const amounts = monthlyAmounts.map((item) => {
    return (chartData[item.month].value += item.amount);
  });

  //   console.log(chartData);

  return (
    <div className={classes.chartContainer}>
      <ChartBar data={chartData} />
    </div>
  );
};

export default ChartContainer;
