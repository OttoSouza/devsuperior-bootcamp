import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "service/sales";
import { round } from "utils/format";
import { BASE_URL } from "utils/request";

type SeriesProps = {
  name: string;
  data: number[];
};

interface BarchartProps {
  labels: {
    categories: string[];
  };
  series: SeriesProps[];
}

const Barchart = () => {
  const [data, setChartData] = useState<BarchartProps>({
    labels: {
      categories: [],
    },
    series: [
      {
        name: "",
        data: [],
      },
    ],
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/success-by-seller`).then((response) => {
      const data = response.data as SaleSuccess[];
      const myLabels = data.map((item) => item.sellerName);
      const mySeries = data.map((item) =>
        round((100.0 * item.deals) / item.visited, 1)
      );

      setChartData({
        labels: {
          categories: myLabels,
        },
        series: [
          {
            name: "% success",
            data: mySeries,
          },
        ],
      });
    });
  }, []);

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
      options={{ ...options, xaxis: data.labels }}
      series={data.series}
      type="bar"
      height="240"
    />
  );
};

export default Barchart;
