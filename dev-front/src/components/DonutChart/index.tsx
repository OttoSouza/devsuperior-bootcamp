import Chart from "react-apexcharts";

const Donoutchart = () => {
  const options = {
    legend: {
      show: true,
    },
  };

  const mockData = {
    series: [477138, 499928, 444867],
    labels: ["Batman", "Iron man", "thor"],
  };

  return (
    <Chart
      options={{ ...options, labels: mockData.labels }}
      series={mockData.series}
      type="donut"
      height="240"
    />
  );
};

export default Donoutchart;