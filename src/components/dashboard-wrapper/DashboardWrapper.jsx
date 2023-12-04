import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, PointElement,
  BarElement, Title, Tooltip, Legend,
} from "chart.js";
import axios from "axios";
import OverallList from "../overall-list/OverallList";
import SummaryBox from "../summary-box/SummaryBox";
import ReviewStatistics from '../review-overall/ReviewStatistics';
import data from "../configs/data"
import { colors } from "../configs/functions";

ChartJS.register(
  CategoryScale, LinearScale, PointElement,
  BarElement, Title, Tooltip, Legend
);

const DashboardWrapper = () => {
    // const [summary, setSummary] = useState([
  //   {
  //     title: "Sản phẩm bán chạy nhất",
  //     subtitle: "",
  //     value: 0,
  //     percent: 0,
  //     unit: "sản phẩm",
  //   },
  //   {
  //     title: "Loại xe bán chạy nhất",
  //     subtitle: "",
  //     value: 0,
  //     percent: 0,
  //     unit: "đ",
  //   },
  //   {
  //     title: "Hãng xe bán chạy nhất",
  //     subtitle: "",
  //     value: 0,
  //     percent: 0,
  //     unit: "đ",
  //   },
  // ]);

  // useEffect(() => {
  //   const endpoints = [
  //     `http://localhost:9090/api/invoices/bestsell/product`,
  //     `http://localhost:9090/api/invoices/bestsell/type`,
  //     `http://localhost:9090/api/invoices/bestsell/brand`,
  //     `http://localhost:9090/api/invoices/revenue`,
  //   ];

  //   Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
  //     (responses) => {
  //       setSummary([
  //         {
  //           ...summary[0],
  //           subtitle: responses[0].data.product.name,
  //           value: responses[0].data.quantity,
  //           percent:
  //             ((responses[0].data.product.price * responses[0].data.quantity) /
  //               responses[3].data) *
  //             100,
  //         },
  //         {
  //           ...summary[1],
  //           subtitle: responses[1].data[1],
  //           value: responses[1].data[2],
  //           percent: (responses[1].data[2] / responses[3].data) * 100,
  //         },
  //         {
  //           ...summary[2],
  //           subtitle: responses[2].data[1],
  //           value: responses[2].data[3],
  //           percent: (responses[2].data[3] / responses[3].data) * 100,
  //         },
  //       ]);
  //     }
  //   );
  // }, [summary]);
    return (
        <div className='dashboard-wrapper'>
            <OverallList />
            <div className="mb summary-box-wrapper">
                {data.summary.map((item) => (
                    <SummaryBox item={item} />
                ))}
            </div>
            <RevenueByMonthsChart />
            <ReviewStatistics />
        </div>
    )
}

export default DashboardWrapper

const RevenueByMonthsChart = () => {
    // const [revenueByMonths, setRevenueByMonths] = useState([]);
    // useEffect(() => {
    //   axios
    //     .get(`http://localhost:9090/api/invoices/revenuebymonth`)
    //     .then((response) => {
    //       setRevenueByMonths(response.data);
    //     });
    // }, [revenueByMonths]);
  
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
            },
            yAxes: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        elements: {
            bar: {
                backgroundColor: colors.blue,
                borderRadius: 20,
                borderSkipped: "bottom",
            },
        },
    };
    const chartData = {
        labels: data.revenueByMonths.labels,
        datasets: [
            {
            label: "Doanh thu",
            data: data.revenueByMonths.data,
            },
        ],
    };
    return (
        <div className="box mb">
            <div className="title mbc">Doanh thu trong 12 tháng gần nhất</div>
            <div>
                <Bar options={chartOptions} data={chartData} height={`300px`} />
            </div>
        </div>
    );
};