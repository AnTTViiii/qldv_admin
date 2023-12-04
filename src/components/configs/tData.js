export const Ticket = [
    {
        id: 1,
        type: 'Người lớn',
        price: 65000
    },
    {
        id: 2,
        type: 'Trẻ em',
        price: 15000
    }
]

export const Bookings = [
    {
        id: 1,
        total: 65000,
        quantity: 1,
        booking_date: '2023-01-01 00:00:00',
        touring_date: '2023-02-14',
        status: 1,
        user: {
            id: 3,
            name: 'An Vi',
            phone: '0987654321',
            email: 'viii@gm.com',
            password: '000',
            role: {
                id: 3,
                type: 'user'
            }
        },
        details: [
            {
                booking_id: 1,
                ticket: {
                    id: 1,
                    type: 'Người lớn'
                },
                quantity: 1,
                total: 65000
            }
        ]
    },
    {
        id: 2,
        total: 130000,
        quantity: 2,
        booking_date: '2023-03-01 00:00:00',
        touring_date: '2023-03-02',
        status: 2,
        user: {
            id: 3,
            name: 'An Vi',
            phone: '0987654321',
            email: 'viii@gm.com',
            password: '000',
            role: {
                id: 3,
                type: 'user'
            }
        },
        details: [
            {
                booking_id: 2,
                ticket: {
                    id: 1,
                    type: 'Người lớn'
                },
                quantity: 2,
                total: 130000
            }
        ]
    },
    {
        id: 3,
        total: 80000,
        quantity: 2,
        booking_date: '2023-03-02 02:00:00',
        touring_date: '2023-03_03',
        status: 1,
        user: {
            id: 3,
            name: 'An Vi',
            phone: '0987654321',
            email: 'viii@gm.com',
            password: '000',
            role: {
                id: 3,
                type: 'user'
            }
        },
        details: [
            {
                booking_id: 2,
                ticket: {
                    id: 1,
                    type: 'Người lớn'
                },
                quantity: 1,
                total: 65000
            },
            {
                booking_id: 2,
                ticket: {
                    id: 2,
                    type: 'Trẻ em'
                },
                quantity: 1,
                total: 15000
            }
        ]
    },
    {
        id: 4,
        total: 95000,
        quantity: 3,
        booking_date: '2023-05-05 00:00:00',
        touring_date: '2023-06-01',
        status: 1,
        user: {
            id: 4,
            name: 'Anh Thu',
            phone: '0987654321',
            email: 'athu@gm.com',
            password: '000',
            role: {
                id: 3,
                type: 'user'
            }
        },
        details: [
            {
                booking_id: 4,
                ticket: {
                    id: 1,
                    type: 'Người lớn'
                },
                quantity: 1,
                total: 65000
            },
            {
                booking_id: 4,
                ticket: {
                    id: 2,
                    type: 'Trẻ em'
                },
                quantity: 2,
                total: 30000
            }
        ]
    },
    {
        id: 5,
        total: 260000,
        quantity: 4,
        booking_date: '2023-05-05 07:00:00',
        touring_date: '2023-05-19',
        status: 0,
        user: {
            id: 3,
            name: 'An Vi',
            phone: '0987654321',
            email: 'viii@gm.com',
            password: '000',
            role: {
                id: 3,
                type: 'user'
            }
        },
        details: [
            {
                booking_id: 2,
                ticket: {
                    id: 1,
                    type: 'Người lớn'
                },
                quantity: 4,
                total: 260000
            }
        ]
    }
]

export const Role = [
    {
        id: 1,
        type: 'Quản trị viên'
    },
    {
        id: 2,
        type: 'Kế toán'
    },
    {
        id: 3,
        type: 'Người dùng'
    }
]

export const User = [
    {
        id: 1,
        name: 'admin1',
        phone: '0987654321',
        email: 'admin@gm.com',
        role: {
            id: 1,
            type: 'Quản trị viên'
        }
    },
    {
        id: 2,
        name: 'accountant1',
        phone: '0987654321',
        email: 'acc@gm.com',
        role: {
            id: 2,
            type: 'Kế toán'
        }
    },
    {
        id: 3,
        name: 'An Vi',
        phone: '0987654321',
        email: 'viii@gm.com',
        role: {
            id: 3,
            type: 'Người dùng'
        }
    },
    {
        id: 4,
        name: 'Anh Thu',
        phone: '0987654321',
        email: 'athu@gm.com',
        role: {
            id: 3,
            type: 'Người dùng'
        }
    }
]

export const reviews = [
    {
        "id": 1,
        "content": "Đặt vé đặt vé hé hé",
        "rate": 2,
        "dateReview": "2023-12-02T04:09:11.000+00:00",
        "user": {
            "id": 1,
            "name": "AT",
            "email": "123@gmail.com",
            "phone": "0123"
        },
        "details": [
            {
                "id": 4,
                "tagRate": {
                    "id": 3,
                    "rate": 3,
                    "content": "chưa tốt",
                    "tag": {
                        "id": 2,
                        "name": "Chăm sóc khách hàng"
                    }
                }
            },
            {
                "id": 5,
                "tagRate": {
                    "id": 6,
                    "rate": 1,
                    "content": "cao",
                    "tag": {
                        "id": 1,
                        "name": "Giá vé"
                    }
                }
            }
        ]
    },
    {
        "id": 3,
        "content": "dfcgv",
        "rate": 3,
        "dateReview": "2023-12-02T17:10:29.000+00:00",
        "user": {
            "id": 1,
            "name": "AT",
            "email": "123@gmail.com",
            "phone": "0123"
        },
        "details": [
            {
                "id": 6,
                "tagRate": {
                    "id": 7,
                    "rate": 2,
                    "content": "cao",
                    "tag": {
                        "id": 1,
                        "name": "Giá vé"
                    }
                }
            },
            {
                "id": 7,
                "tagRate": {
                    "id": 15,
                    "rate": 5,
                    "content": "dễ sử dụng",
                    "tag": {
                        "id": 3,
                        "name": "Website"
                    }
                }
            },
            {
                "id": 8,
                "tagRate": {
                    "id": 4,
                    "rate": 4,
                    "content": "khá tốt",
                    "tag": {
                        "id": 2,
                        "name": "Chăm sóc khách hàng"
                    }
                }
            }
        ]
    },
    {
        "id": 4,
        "content": "dfcgv",
        "rate": 1,
        "dateReview": "2023-12-02T17:20:20.000+00:00",
        "user": {
            "id": 1,
            "name": "AT",
            "email": "123@gmail.com",
            "phone": "0123"
        },
        "details": [
            {
                "id": 9,
                "tagRate": {
                    "id": 8,
                    "rate": 3,
                    "content": "chưa hợp lý",
                    "tag": {
                        "id": 1,
                        "name": "Giá vé"
                    }
                }
            },
            {
                "id": 10,
                "tagRate": {
                    "id": 4,
                    "rate": 4,
                    "content": "khá tốt",
                    "tag": {
                        "id": 2,
                        "name": "Chăm sóc khách hàng"
                    }
                }
            }
        ]
    },
    {
        "id": 5,
        "content": "dfcgv",
        "rate": 1,
        "dateReview": "2023-12-02T17:38:26.000+00:00",
        "user": {
            "id": 1,
            "name": "AT",
            "email": "123@gmail.com",
            "phone": "0123"
        },
        "details": [
            {
                "id": 11,
                "tagRate": {
                    "id": 13,
                    "rate": 3,
                    "content": "tương đối khó sử dụng",
                    "tag": {
                        "id": 3,
                        "name": "Website"
                    }
                }
            }
        ]
    }
]