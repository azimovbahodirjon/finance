import ReactApexChart from "react-apexcharts";
import { useCollectionsData } from "../../hooks/useCollectionsData";

const ApexChart = () => {
  const { data } = useCollectionsData();

  if (!data || !Array.isArray(data.budgets)) {
    return null;
  }

  const labels = data.budgets.map((b) => b.category);
  const series = data.budgets.map((b) => b.maximum);
  const colors = data.budgets.map((b) => b.theme);
  const total = series.reduce((sum, val) => sum + val, 0);
  const spent = 338; // Bu qiymatni dinamik qilish mumkin, hozircha rasmga moslab qo‘ydim

  const options = {
    chart: {
      type: "donut",
    },
    colors: colors,
    labels: labels,
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: true,
              fontSize: "24px",
              fontWeight: 600,
              formatter: () => `$${spent}`,
              color: "#333",
            },
            total: {
              show: true,
              label: `of $${total} limit`,
              fontSize: "14px",
              color: "#666",
              formatter: () => "",
            },
          },
        },
      },
    },
    stroke: {
      show: false,
    },
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
      <div style={{ width: "250px" }}>
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width="100%"
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {data.budgets.map((b, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "14px",
              color: "#333",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "40px",
                backgroundColor: b.theme,
                borderRadius: "2px",
              }}
            ></div>
            <div>
              <div>{b.category}</div>
              <div style={{ fontWeight: "bold" }}>${b.maximum.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApexChart;
