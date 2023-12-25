const data = {
    summary: [
        {
            title: 'Loại vé bán chạy nhất',
            subtitle: 'Người lớn',
            value: '200 vé',
            percent: 66
        },
        {
            title: 'Tháng có doanh thu cao nhất',
            subtitle: 'Tháng 5',
            value: '15.065.000 đ',
            percent: 15.1
        }
    ],
    overall: [
        {
            value: '100',
            title: 'Người dùng'
        },
        {
            value: '1000',
            title: 'Lượt đặt vé'
        },
        {
            value: '100.000.000 đ',
            title: 'Doanh thu'
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [4600000, 5000000, 8000000, 3900000, 12000000, 15065000, 5100000, 11023000, 6340000, 4700000, 5000000, 7000000]
    },
    reviewStatistics: [
        {
            id: 1,
            type: "Giá vé",
            numberOfReviews: 120,
            rate: 3,
            tag: "Chưa hợp lý"
        },
        {
            id: 2,
            type: "Chăm sóc khách hàng",
            numberOfReviews: 80,
            rate: 4,
            tag: "Khá tốt"
        },
        {
            id: 3,
            type: "Website",
            numberOfReviews: 57,
            rate: 1.5,
            tag: "Khó sử dụng"
        }
    ]
}

export default data