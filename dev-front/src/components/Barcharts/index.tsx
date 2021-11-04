import Chart from "react-apexcharts";

const Barchart = () => {
  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  const mockData = {
    labels: {
      categories: ["Batman", "Iron man", "Thor"],
    },
    series: [
      {
        name: "% Sucesso",
        data: [43.3, 67.1, 67.7],
      },
    ],
  };

  return (
    <Chart
      options={{ ...options, xaxis: mockData.labels }}
      series={mockData.series}
      type="bar"
      height="240"
    />
  );
};

export default Barchart;
