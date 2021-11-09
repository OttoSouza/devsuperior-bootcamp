import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSum } from "service/sales";
import { BASE_URL } from "utils/request";

type DonoutChartProps = {
  labels: string[];
  series: number[];
};

const Donoutchart = () => {
  const [data, setData] = useState<DonoutChartProps>({} as DonoutChartProps);

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/amount-by-seller`).then((response) => {
      const data = response.data as SaleSum[];
      const myLabels = data.map((item) => item.sellerName);
      const mySeries = data.map((item) => item.sum);

      setData({ labels: myLabels, series: mySeries });
      console.log(data);
    });
  }, []);

  const options = {
    legend: {
      show: true,
    },
  };



  return (
    <Chart
      options={{ ...options, labels: data.labels }}
      series={data.series}
      type="donut"
      height="240"
    />
  );
};

export default Donoutchart;
