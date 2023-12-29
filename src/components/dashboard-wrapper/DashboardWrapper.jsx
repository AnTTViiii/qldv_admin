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
import { colors } from "../configs/functions";

ChartJS.register(
  CategoryScale, LinearScale, PointElement,
  BarElement, Title, Tooltip, Legend
);

const DashboardWrapper = () => {
    const [summary, setSummary] = useState([
        {
            title: "Loại vé bán chạy nhất",
            subtitle: "",
            value: 0,
            percent: 0,
            unit: "vé",
        },
        {
            title: "Tháng có doanh thu cao nhất",
            subtitle: "",
            value: 0,
            percent: 0,
            unit: "đ",
        },
    ]);

    useEffect(() => {
        const endpoints = [
            `http://localhost:9090/api/statistic/fastest-tickets`,
            `http://localhost:9090/api/statistic/revenue-months`
        ];

        Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then((responses) => 
        {
            const revenues = responses[1].data.revenues;

            setSummary([
                {
                    ...summary[0],
                    subtitle: responses[0].data.type,
                    value: responses[0].data.quantity,
                    percent: responses[0].data.percents
                },
                {
                    ...summary[1],
                    subtitle: responses[1].data.months[revenues.indexOf(Math.max(...revenues))],
                    value: Math.max(...revenues),
                    percent: (Math.max(...revenues) / revenues.reduce((a, b) => a + b, 0)) * 100,
                }
            ]);
        })
        .catch((err) => console.log(err[0], err[1]));
    }, [summary]);
    return (
        <div className='dashboard-wrapper'>
            <OverallList />
            <div className="mb summary-box-wrapper">
                {summary.map((item) => (
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
    const [revenueByMonths, setRevenueByMonths] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:9090/api/statistic/revenue-months`)
        .then((response) => {
            setRevenueByMonths(response.data);
        })
        .catch((err) => {console.log(err)});
    }, [revenueByMonths]);
  
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
        labels: revenueByMonths.months,
        datasets: [
            {
                label: "Doanh thu",
                data: revenueByMonths.revenues,
            },
        ],
    };
    return (
        <div className="box mb">
            <div className="title mbc">Doanh thu trong 12 tháng gần nhất</div>
            <div>
                <Bar options={chartOptions} data={chartData} height={`270px`} />
            </div>
        </div>
    );
};