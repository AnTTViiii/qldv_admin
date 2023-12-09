const construction = {
    dinhdoclap: {
        id: 1,
        name: 'Dinh Độc Lập',
        address: 'Số 135 Nam Kỳ Khởi Nghĩa, phường Bến Thành, quận 1, thành phố Hồ Chí Minh'
    },

    floor_level: [
        {
            id_floorlevel: 1,
            name: '1',
            id_dinhdoclap: 1
        },
        {
            id_floorlevel: 2,
            name: '2',
            id_dinhdoclap: 1
        },
        {
            id_floorlevel: 3,
            name: '3',
            id_dinhdoclap: 1
        }
    ],

    simple_structure: [
        {
            id_simple_structure: 1,
            name: 'Nền nhà tầng 1',
            height:	7,
            color: 'smoke',
            id_face: 1,
            id_floorlevel: 1
        },
        {
            id_simple_structure: 2,
            name: 'Khung trần tầng 1',
            height:	2,
            color: 'smoke',
            id_face: 2,
            id_floorlevel: 1
        }
    ],

    complex_structure: [
        {
            id_complex_structure: 1,
            name: 'Cầu thang bên phải',
            id_floorlevel: 1
        },
        {
            id_complex_structure: 2,
            name: 'Rèm hoa đá bên trái',
            id_floorlevel: 2
        },
        {
            id_complex_structure: 3,
            name: 'Cửa sổ bên phải',
            id_floorlevel: 2
        },
        {
            id_complex_structure: 4,
            name: 'Phòng bên trái',
            id_floorlevel: 1
        }
    ],

    simple_body: [
        //cauthang (4 bậc)
        {
            id_simple_body: 1,
            height:	1,
            color: '#f9f5ed',
            id_face: 3,
            id_complex_structure: 1
        },
        {
            id_simple_body: 2,
            height:	1,
            color: '#f9f5ed',
            id_face: 4,
            id_complex_structure: 1
        },
        {
            id_simple_body: 3,
            height:	1,
            color: '#f9f5ed',
            id_face: 5,
            id_complex_structure: 1
        },
        {
            id_simple_body: 4,
            height:	1,
            color: '#f9f5ed',
            id_face: 6,
            id_complex_structure: 1
        },
        //cuaso (2 cửa)
        ///cot trai-phai
        {
            id_simple_body: 9,
            height:	12.1,
            color: '#ffecd4',
            id_face: 25,
            id_complex_structure: 3
        },
        {
            id_simple_body: 10,
            height:	12.1,
            color: '#ffecd4',
            id_face: 26,
            id_complex_structure: 3
        },
        {
            id_simple_body: 11,
            height:	12.1,
            color: '#ffecd4',
            id_face: 27,
            id_complex_structure: 3
        },
        {
            id_simple_body: 12,
            height:	12.1,
            color: '#ffecd4',
            id_face: 28,
            id_complex_structure: 3
        },
        ///bệ
        {
            id_simple_body: 13,
            height:	1.21,
            color: '#ffecd4',
            id_face: 29,
            id_complex_structure: 3
        },
        {
            id_simple_body: 14,
            height:	2.42,
            color: '#ffecd4',
            id_face: 30,
            id_complex_structure: 3
        },
        {
            id_simple_body: 15,
            height:	1.21,
            color: '#ffecd4',
            id_face: 31,
            id_complex_structure: 3
        },
        {
            id_simple_body: 16,
            height:	2.42,
            color: '#ffecd4',
            id_face: 32,
            id_complex_structure: 3
        },
        ///ban công
        {
            id_simple_body: 13,
            height:	1.613,
            color: 'white',
            id_face: 33,
            id_complex_structure: 3
        },
        {
            id_simple_body: 14,
            height:	1.613,
            color: 'white',
            id_face: 34,
            id_complex_structure: 3
        },
        {
            id_simple_body: 15,
            height:	1.613,
            color: 'white',
            id_face: 35,
            id_complex_structure: 3
        },
        {
            id_simple_body: 16,
            height:	1.613,
            color: 'white',
            id_face: 36,
            id_complex_structure: 3
        }
    ],

    complex_body: [
        //tayvincauthang (2 bên)
        {
            id_complex_body: 1,
            height:	10,
            color: '#d7cfbd',
            id_complex_structure: 1
        },
        //remhoada (2 cột 6 hàng)
        {
            id_complex_body: 2,
            height:	0.001,
            color: '#d9c3a3',
            id_complex_structure: 2
        }
    ],

    complex_body_face: [
        //tayvincauthang
        {
            id: 1,
            id_face: 11,
        },
        {
            id: 1,
            id_face: 12,
        },
        //remhoada
        {
            id: 2,
            id_face: 13,
        },
        {
            id: 2,
            id_face: 14,
        },
        {
            id: 2,
            id_face: 15,
        },
        {
            id: 2,
            id_face: 16,
        },
        {
            id: 2,
            id_face: 17,
        },
        {
            id: 2,
            id_face: 18,
        },

        {
            id: 2,
            id_face: 19,
        },
        {
            id: 2,
            id_face: 20,
        },
        {
            id: 2,
            id_face: 21,
        },
        {
            id: 2,
            id_face: 22,
        },
        {
            id: 2,
            id_face: 23,
        },
        {
            id: 2,
            id_face: 24,
        }
    ],

    face: [
        {
            id_face: 1,
            name: 'Nền nhà tầng 1'
        },
        {
            id_face: 2,
            name: 'Khung trần tầng 1'
        },
        {
            id_face: 3,
            name: 'Cầu thang bên phải tầng 1 bậc 1'
        },
        {
            id_face: 4,
            name: 'Cầu thang bên phải tầng 1 bậc 2'
        },
        {
            id_face: 5,
            name: 'Cầu thang bên phải tầng 1 bậc 3'
        },
        {
            id_face: 6,
            name: 'Cầu thang bên phải tầng 1 bậc 4'
        },
        {
            id_face: 11,
            name: 'Tay vịn phải cầu thang bên phải tầng 1'
        },
        {
            id_face: 12,
            name: 'Tay vịn trái cầu thang bên phải tầng 1'
        },
        {
            id_face: 13,
            name: 'RHĐ trái hàng 1 cột 1'
        },
        {
            id_face: 14,
            name: 'RHĐ trái hàng 2 cột 1'
        },
        {
            id_face: 15,
            name: 'RHĐ trái hàng 3 cột 1'
        },
        {
            id_face: 16,
            name: 'RHĐ trái hàng 4 cột 1'
        },
        {
            id_face: 17,
            name: 'RHĐ trái hàng 5 cột 1'
        },
        {
            id_face: 18,
            name: 'RHĐ trái hàng 6 cột 1'
        },
        {
            id_face: 19,
            name: 'RHĐ trái hàng 1 cột 2'
        },
        {
            id_face: 20,
            name: 'RHĐ trái hàng 2 cột 2'
        },
        {
            id_face: 21,
            name: 'RHĐ trái hàng 3 cột 2'
        },
        {
            id_face: 22,
            name: 'RHĐ trái hàng 4 cột 2'
        },
        {
            id_face: 23,
            name: 'RHĐ trái hàng 5 cột 2'
        },
        {
            id_face: 24,
            name: 'RHĐ trái hàng 6 cột 2'
        },
        {
            id_face: 25,
            name: 'Khung trái cửa sổ 1 bên phải tầng 2'
        },
        {
            id_face: 26,
            name: 'Khung phải cửa sổ 1 bên phải tầng 2'
        },
        {
            id_face: 27,
            name: 'Khung trái cửa sổ 2 bên phải tầng 2'
        },
        {
            id_face: 28,
            name: 'Khung phải cửa sổ 2 bên phải tầng 2'
        },
        {
            id_face: 29,
            name: 'Bệ dưới cửa sổ 1 bên phải tầng 2'
        },
        {
            id_face: 30,
            name: 'Bệ trên cửa sổ 1 bên phải tầng 2'
        },
        {
            id_face: 31,
            name: 'Bệ dưới cửa sổ 2 bên phải tầng 2'
        },
        {
            id_face: 32,
            name: 'Bệ trên cửa sổ 2 bên phải tầng 2'
        },
        {
            id_face: 33,
            name: 'Ban công dưới cửa sổ 1 bên phải tầng 2'
        },
        {
            id_face: 34,
            name: 'Ban công trên cửa sổ 1 bên phải tầng 2'
        },
        {
            id_face: 35,
            name: 'Ban công dưới cửa sổ 2 bên phải tầng 2'
        },
        {
            id_face: 36,
            name: 'Ban công trên cửa sổ 2 bên phải tầng 2'
        }
    ],

    face_node: [
        //bg
        {
            id_face: 1,
            id_node: 1
        },
        {
            id_face: 1,
            id_node: 2
        },
        {
            id_face: 1,
            id_node: 3
        },
        {
            id_face: 1,
            id_node: 4
        },
        //frame
        {
            id_face: 2,
            id_node: 5
        },
        {
            id_face: 2,
            id_node: 6
        },
        {
            id_face: 2,
            id_node: 7
        },
        {
            id_face: 2,
            id_node: 8
        },
        //stair
        ///1
        {
            id_face: 3,
            id_node: 9
        },
        {
            id_face: 3,
            id_node: 10
        },
        {
            id_face: 3,
            id_node: 11
        },
        {
            id_face: 3,
            id_node: 12
        },
        ///2
        {
            id_face: 4,
            id_node: 13
        },
        {
            id_face: 4,
            id_node: 14
        },
        {
            id_face: 4,
            id_node: 15
        },
        {
            id_face: 4,
            id_node: 16
        },
        ///3
        {
            id_face: 5,
            id_node: 17
        },
        {
            id_face: 5,
            id_node: 18
        },
        {
            id_face: 5,
            id_node: 19
        },
        {
            id_face: 5,
            id_node: 20
        },
        ///4
        {
            id_face: 6,
            id_node: 21
        },
        {
            id_face: 6,
            id_node: 22
        },
        {
            id_face: 6,
            id_node: 23
        },
        {
            id_face: 6,
            id_node: 24
        },
        ///handle-left
        {
            id_face: 11,
            id_node: 25
        },
        {
            id_face: 11,
            id_node: 26
        },
        {
            id_face: 11,
            id_node: 27
        },
        {
            id_face: 11,
            id_node: 28
        },
        {
            id_face: 11,
            id_node: 29
        },
        {
            id_face: 11,
            id_node: 30
        },
        {
            id_face: 11,
            id_node: 31
        },
        {
            id_face: 11,
            id_node: 32
        },
        {
            id_face: 11,
            id_node: 33
        },
        {
            id_face: 11,
            id_node: 34
        },
        ///handle-right
        {
            id_face: 12,
            id_node: 35
        },
        {
            id_face: 12,
            id_node: 36
        },
        {
            id_face: 12,
            id_node: 37
        },
        {
            id_face: 12,
            id_node: 38
        },
        {
            id_face: 12,
            id_node: 39
        },
        {
            id_face: 12,
            id_node: 40
        },
        {
            id_face: 12,
            id_node: 41
        },
        {
            id_face: 12,
            id_node: 42
        },
        {
            id_face: 12,
            id_node: 43
        },
        {
            id_face: 12,
            id_node: 44
        },
        ///RemHoaDa
        {
            id_face: 13,
            id_node: 45,//rem1 r1c1
        },
        {
            id_face: 13,
            id_node: 46,//rem1 r1c1
        },
        {
            id_face: 13,
            id_node: 47,//rem1 r1c1
        },
        {
            id_face: 13,
            id_node: 48,//rem1 r1c1
        },
        {
            id_face: 14,
            id_node: 49,//rem1 r1c2
        },
        {
            id_face: 14,
            id_node: 50,//rem1 r1c2
        },
        {
            id_face: 14,
            id_node: 51,//rem1 r1c2
        },
        {
            id_face: 14,
            id_node: 52,//rem1 r1c2
        },
        {
            id_face: 15,
            id_node: 53,//rem1 r2c1
        },
        {
            id_face: 15,
            id_node: 54,//rem1 r2c1
        },
        {
            id_face: 15,
            id_node: 55,//rem1 r2c1
        },
        {
            id_face: 15,
            id_node: 56,//rem1 r2c1
        },
        {
            id_face: 16,
            id_node: 57,//rem1 r2c2
        },
        {
            id_face: 16,
            id_node: 58,//rem1 r2c2
        },
        {
            id_face: 16,
            id_node: 59,//rem1 r2c2
        },
        {
            id_face: 16,
            id_node: 60,//rem1 r2c2
        },
        {
            id_face: 17,
            id_node: 61,//rem1 r3c1
        },
        {
            id_face: 17,
            id_node: 62,//rem1 r3c1
        },
        {
            id_face: 17,
            id_node: 63,//rem1 r3c1
        },
        {
            id_face: 17,
            id_node: 64,//rem1 r3c1
        },
        {
            id_face: 18,
            id_node: 65,//rem1 r3c2
        },
        {
            id_face: 18,
            id_node: 66,//rem1 r3c2
        },
        {
            id_face: 18,
            id_node: 67,//rem1 r3c2
        },
        {
            id_face: 18,
            id_node: 68,//rem1 r3c2
        },
        {
            id_face: 19,
            id_node: 69,//rem1 r4c1
        },
        {
            id_face: 19,
            id_node: 70,//rem1 r4c1
        },
        {
            id_face: 19,
            id_node: 71,//rem1 r4c1
        },
        {
            id_face: 19,
            id_node: 72,//rem1 r4c1
        },
        {
            id_face: 20,
            id_node: 73,//rem1 r4c2
        },
        {
            id_face: 20,
            id_node: 20,//rem1 r4c2
        },
        {
            id_face: 20,
            id_node: 75,//rem1 r4c2
        },
        {
            id_face: 20,
            id_node: 76,//rem1 r4c2
        },
        {
            id_face: 21,
            id_node: 77,//rem1 r5c1
        },
        {
            id_face: 21,
            id_node: 78,//rem1 r5c1
        },
        {
            id_face: 21,
            id_node: 79,//rem1 r5c1
        },
        {
            id_face: 21,
            id_node: 80,//rem1 r5c1
        },
        {
            id_face: 22,
            id_node: 81,//rem1 r5c2
        },
        {
            id_face: 22,
            id_node: 82,//rem1 r5c2
        },
        {
            id_face: 22,
            id_node: 83,//rem1 r5c2
        },
        {
            id_face: 22,
            id_node: 84,//rem1 r5c2
        },
        {
            id_face: 23,
            id_node: 85,//rem1 r6c1
        },
        {
            id_face: 23,
            id_node: 86,//rem1 r6c1
        },
        {
            id_face: 23,
            id_node: 87,//rem1 r6c1
        },
        {
            id_face: 23,
            id_node: 88,//rem1 r6c1
        },
        {
            id_face: 24,
            id_node: 89,//rem1 r6c2
        },
        {
            id_face: 24,
            id_node: 90,//rem1 r6c2
        },
        {
            id_face: 24,
            id_node: 91,//rem1 r6c2
        },
        {
            id_face: 24,
            id_node: 92,//rem1 r6c2
        },
        ///cuaso
        {
            id_face: 25,
            id_node: 92
        },
        {
            id_face: 25,
            id_node: 93
        },
        {
            id_face: 25,
            id_node: 94
        },
        {
            id_face: 25,
            id_node: 95
        },

        {
            id_face: 26,
            id_node: 96
        },
        {
            id_face: 26,
            id_node: 97
        },
        {
            id_face: 26,
            id_node: 98
        },
        {
            id_face: 26,
            id_node: 99
        },

        {
            id_face: 27,
            id_node: 100
        },
        {
            id_face: 27,
            id_node: 101
        },
        {
            id_face: 27,
            id_node: 102
        },
        {
            id_face: 27,
            id_node: 103
        },

        {
            id_face: 28,
            id_node: 104
        },
        {
            id_face: 28,
            id_node: 105
        },
        {
            id_face: 28,
            id_node: 106
        },
        {
            id_face: 28,
            id_node: 107
        },

        {
            id_face: 29,
            id_node: 108
        },
        {
            id_face: 29,
            id_node: 109
        },
        {
            id_face: 29,
            id_node: 110
        },
        {
            id_face: 29,
            id_node: 111
        },

        {
            id_face: 30,
            id_node: 112
        },
        {
            id_face: 30,
            id_node: 113
        },
        {
            id_face: 30,
            id_node: 114
        },
        {
            id_face: 30,
            id_node: 115
        },

        {
            id_face: 31,
            id_node: 116
        },
        {
            id_face: 31,
            id_node: 117
        },
        {
            id_face: 31,
            id_node: 118
        },
        {
            id_face: 31,
            id_node: 119
        },

        {
            id_face: 32,
            id_node: 120
        },
        {
            id_face: 32,
            id_node: 121
        },
        {
            id_face: 32,
            id_node: 122
        },
        {
            id_face: 32,
            id_node: 123
        },

        {
            id_face: 33,
            id_node: 124
        },
        {
            id_face: 33,
            id_node: 125
        },
        {
            id_face: 33,
            id_node: 126
        },
        {
            id_face: 33,
            id_node: 127
        },

        {
            id_face: 34,
            id_node: 128
        },
        {
            id_face: 34,
            id_node: 129
        },
        {
            id_face: 34,
            id_node: 130
        },
        {
            id_face: 34,
            id_node: 131
        },

        {
            id_face: 35,
            id_node: 132
        },
        {
            id_face: 35,
            id_node: 133
        },
        {
            id_face: 35,
            id_node: 134
        },
        {
            id_face: 35,
            id_node: 135
        },

        {
            id_face: 36,
            id_node: 136
        },
        {
            id_face: 36,
            id_node: 137
        },
        {
            id_face: 36,
            id_node: 138
        },
        {
            id_face: 36,
            id_node: 139
        }
    ],

    node: [
        //bg
        {
            id: 1,
            x: 106.69524967178664, y: 10.777439626728102, z: 0
        },
        {
            id: 2,
            x:106.69508007958643, y: 10.777251005928425, z: 0
        },
        {
            id: 3,
            x: 106.6956514325143, y: 10.776709820890483, z: 0
        },
        {
            id: 4,
            x: 106.69582977250299, y: 10.776910660884225, z: 0
        },
        //frame
        {
            id: 5,
            x: 106.69524967178664, y: 10.777439626728102, z: 27.4
        },
        {
            id: 6,
            x:106.69508007958643, y: 10.777251005928425, z: 27.4
        },
        {
            id: 7,
            x: 106.6956514325143, y: 10.776709820890483, z: 27.4
        },
        {
            id: 8,
            x: 106.69582977250299, y: 10.776910660884225, z: 27.4
        },
        //stair
        ///1
        {
            id: 9,
            x: 106.695707857692, y: 10.776772772711142, z: 14.4
        },
        {
            id: 10,
            x: 106.69577141169034, y: 10.776844470447196, z: 14.4
        },
        {
            id: 11,
            x: 106.69586302322166, y: 10.776766797971096, z: 14.4
        },
        {
            id: 12,
            x: 106.69579856867611, y: 10.776695037460536, z: 14.4
        },
        ///2
        {
            id: 13,
            x: 106.695707857692, y: 10.776772772711142, z: 15.4
        },
        {
            id: 14,
            x: 106.69577141169034, y: 10.776844470447196, z: 15.4
        },
        {
            id: 15,
            x: 106.69585091586468, y: 10.77677705273751, z: 15.4
        },
        {
            id: 16,
            x: 106.69578684109423, y: 10.776705087474989, z: 15.4
        },
        ///3
        {
            id: 17,
            x: 106.695707857692, y: 10.776772772711142, z: 16.4
        },
        {
            id: 18,
            x: 106.69577141169034, y: 10.776844470447196, z: 16.4
        },
        {
            id: 19,
            x: 106.69584259430775, y: 10.776784109226911, z: 16.4
        },
        {
            id: 20,
            x: 106.69577949266308, y: 10.776711390931391, z: 16.4
        },
        ///4
        {
            id: 21,
            x: 106.695707857692, y: 10.776772772711142, z: 17.4
        },
        {
            id: 22,
            x: 106.69577141169034, y: 10.776844470447196, z: 17.4
        },
        {
            id: 23,
            x: 106.69583452962173, y: 10.776790947895224, z: 17.4
        },
        {
            id: 24,
            x: 106.69577215490168, y: 10.77671767843118, z: 17.4
        },
        ///handle-left
        {
            id: 25,
            x: 106.69586402322166, y: 10.776766797971096, z: 0
        },
        {
            id: 26,
            x: 106.69583552962173, y: 10.776790947895224, z: 0
        },
        {
            id: 27,
            x: 106.69581795668249, y: 10.776805834635375, z: 0
        },
        {
            id: 28,
            x: 106.69579137610868, y: 10.776828533796555, z: 0
        },
        {
            id: 29,
            x: 106.69577241169034, y: 10.776844470447196, z: 0
        },
        {
            id: 30,
            x: 106.69577251169034, y: 10.776844470447196, z: 13.5
        },
        {
            id: 31,
            x: 106.69579147610868, y: 10.776828533796555, z: 13.5
        },
        {
            id: 32,
            x: 106.69581805668249, y: 10.776805834635375, z: 10
        },
        {
            id: 33,
            x: 106.69583562962173, y: 10.776790947895224, z: 10
        },
        {
            id: 34,
            x: 106.69586412322166, y: 10.776766797971096, z: 6.5
        },
        ///handle-right
        {
            id: 35,
            x: 106.69579756867611, y: 10.776695037460536, z: 0
        },
        {
            id: 36,
            x: 106.69577215490168, y: 10.77671767843118, z: 0
        },
        {
            id: 37,
            x: 106.69575392375914, y: 10.776732443263075, z: 0
        },
        {
            id: 38,
            x: 106.69573431295615, y: 10.776749247151233, z: 0
        },
        {
            id: 39,
            x: 106.695706857692, y: 10.776772772711142, z: 0
        },
        {
            id: 40,
            x: 106.695707857692, y: 10.776772772711942, z: 13.5
        },
        {
            id: 41,
            x: 106.69573531295615, y: 10.776749247152033, z: 13.5
        },
        {
            id: 42,
            x: 106.69575392375914, y: 10.776732443263875, z: 10
        },
        {
            id: 43,
            x: 106.69577215490168, y: 10.77671767843918, z: 10
        },
        {
            id: 44,
            x: 106.69579756867611, y: 10.776695037468536, z: 6.5
        },
        ///RemHoaDa
        {
            id: 45,//rem1 r1c1
            x: 106.69573779464685, y: 10.776994300772474, z: 32.5
        },
        {
            id: 46,//rem1 r1c1
            x: 106.69573341380458, y: 10.776998365703031, z: 32.5
        },
        {
            id: 47,//rem1 r1c1
            x: 106.69573382294054, y: 10.77699743668526, z: 34.25
        },
        {
            id: 48,//rem1 r1c1
            x: 106.69573690599348, y: 10.776994533299659, z: 34.25
        },
        {
            id: 49,//rem1 r1c2
            x: 106.69573245266037, y: 10.77699912103585, z: 32.5
        },
        {
            id: 50,//rem1 r1c2
            x: 106.6957280718181, y: 10.777003185966407, z: 32.5
        },
        {
            id: 51,//rem1 r1c2
            x: 106.69572848095406, y: 10.777002256948636, z: 34.25
        },
        {
            id: 52,//rem1 r1c2
            x: 106.695731564007, y: 10.776999353563035, z: 34.25
        },

        {
            id: 53,//rem1 r2c1
            x: 106.69573779464685, y: 10.776994300772474, z: 36
        },
        {
            id: 54,//rem1 r2c1
            x: 106.69573341380458, y: 10.776998365703031, z: 36
        },
        {
            id: 55,//rem1 r2c1
            x: 106.69573382294054, y: 10.77699743668526, z: 34.25
        },
        {
            id: 56,//rem1 r2c1
            x: 106.69573690599348, y: 10.776994533299659, z: 34.25
        },
        {
            id: 57,//rem1 r2c2
            x: 106.69573245266037, y: 10.77699912103585, z: 36
        },
        {
            id: 58,//rem1 r2c2
            x: 106.6957280718181, y: 10.777003185966407, z: 36
        },
        {
            id: 59,//rem1 r2c2
            x: 106.69572848095406, y: 10.777002256948636, z: 34.25
        },
        {
            id: 60,//rem1 r2c2
            x: 106.695731564007, y: 10.776999353563035, z: 34.25
        },

        {
            id: 61,//rem1 r3c1
            x: 106.69573779464685, y: 10.776994300772474, z: 39.55
        },
        {
            id: 62,//rem1 r3c1
            x: 106.69573341380458, y: 10.776998365703031, z: 39.55
        },
        {
            id: 63,//rem1 r3c1
            x: 106.69573382294054, y: 10.77699743668526, z: 37.8
        },
        {
            id: 64,//rem1 r3c1
            x: 106.69573690599348, y: 10.776994533299659, z: 37.8
        },
        {
            id: 65,//rem1 r3c2
            x: 106.69573245266037, y: 10.77699912103585, z: 39.55
        },
        {
            id: 66,//rem1 r3c2
            x: 106.6957280718181, y: 10.777003185966407, z: 39.55
        },
        {
            id: 67,//rem1 r3c2
            x: 106.69572848095406, y: 10.777002256948636, z: 37.8
        },
        {
            id: 68,//rem1 r3c2
            x: 106.695731564007, y: 10.776999353563035, z: 37.8
        },

        {
            id: 69,//rem1 r4c1
            x: 106.69573779464685, y: 10.776994300772474, z: 39.55
        },
        {
            id: 70,//rem1 r4c1
            x: 106.69573341380458, y: 10.776998365703031, z: 39.55
        },
        {
            id: 71,//rem1 r4c1
            x: 106.69573382294054, y: 10.77699743668526, z: 37.8
        },
        {
            id: 72,//rem1 r4c1
            x: 106.69573690599348, y: 10.776994533299659, z: 37.8
        },
        {
            id: 73,//rem1 r4c2
            x: 106.69573245266037, y: 10.77699912103585, z: 39.55
        },
        {
            id: 74,//rem1 r4c2
            x: 106.6957280718181, y: 10.777003185966407, z: 39.55
        },
        {
            id: 75,//rem1 r4c2
            x: 106.69572848095406, y: 10.777002256948636, z: 37.8
        },
        {
            id: 76,//rem1 r4c2
            x: 106.695731564007, y: 10.776999353563035, z: 37.8
        },

        {
            id: 77,//rem1 r5c1
            x: 106.69573779464685, y: 10.776994300772474, z: 39.6
        },
        {
            id: 78,//rem1 r5c1
            x: 106.69573341380458, y: 10.776998365703031, z: 39.6
        },
        {
            id: 79,//rem1 r5c1
            x: 106.69573382294054, y: 10.77699743668526, z: 41.35
        },
        {
            id: 80,//rem1 r5c1
            x: 106.69573690599348, y: 10.776994533299659, z: 41.35
        },
        {
            id: 81,//rem1 r5c2
            x: 106.69573245266037, y: 10.77699912103585, z: 39.6
        },
        {
            id: 82,//rem1 r5c2
            x: 106.6957280718181, y: 10.777003185966407, z: 39.6
        },
        {
            id: 83,//rem1 r5c2
            x: 106.69572848095406, y: 10.777002256948636, z: 41.35
        },
        {
            id: 84,//rem1 r5c2
            x: 106.695731564007, y: 10.776999353563035, z: 41.35
        },

        {
            id: 85,//rem1 r6c1
            x: 106.69573779464685, y: 10.776994300772474, z: 43.1
        },
        {
            id: 86,//rem1 r6c1
            x: 106.69573341380458, y: 10.776998365703031, z: 43.1
        },
        {
            id: 87,//rem1 r6c1
            x: 106.69573382294054, y: 10.77699743668526, z: 41.35
        },
        {
            id: 88,//rem1 r6c1
            x: 106.69573690599348, y: 10.776994533299659, z: 41.35
        },
        {
            id: 89,//rem1 r6c2
            x: 106.69573245266037, y: 10.77699912103585, z: 43.1
        },
        {
            id: 90,//rem1 r6c2
            x: 106.6957280718181, y: 10.777003185966407, z: 43.1
        },
        {
            id: 91,//rem1 r6c2
            x: 106.69572848095406, y: 10.777002256948636, z: 41.35
        },
        {
            id: 92,//rem1 r6c2
            x: 106.695731564007, y: 10.776999353563035, z: 41.35
        },
        ///cuaso
        ////cot trai
        {
            id: 92,
            x: 106.69532983509700, y: 10.77736617796800, z: 31.4
        },
        {
            id: 93,
            x: 106.69532584459287, y: 10.777369892905256, z: 31.4
        },
        {
            id: 94,
            x: 106.69531827288124, y: 10.777362038128093, z: 31.4
        },
        {
            id: 95,
            x: 106.69532226338536, y: 10.777358323190837, z: 31.4
        },

        {
            id: 96,
            x: 106.69531306938212, y: 10.777382589294344, z: 31.4
        },
        {
            id: 97,
            x: 106.69530907887800, y: 10.777386304231600, z: 31.4
        },
        {
            id: 98,
            x: 106.69530150716636, y: 10.777378449454437, z: 31.4
        },
        {
            id: 99,
            x: 106.69530549767049, y: 10.777374734517181, z: 31.4
        },

        {
            id: 100,
            x: 106.69530312110100, y: 10.77739065438350, z: 31.4
        },
        {
            id: 101,
            x: 106.69529913059688, y: 10.777394369320756, z: 31.4
        },
        {
            id: 102,
            x: 106.69529155888524, y: 10.777386514543593, z: 31.4
        },
        {
            id: 103,
            x: 106.69529554938937, y: 10.777382799606338, z: 31.4
        },

        {
            id: 104,
            x: 106.69528635538613, y: 10.777407065709845, z: 31.4
        },
        {
            id: 105,
            x: 106.695282364882, y: 10.7774107806471, z: 31.4
        },
        {
            id: 106,
            x: 106.69527479317037, y: 10.777402925869938, z: 31.4
        },
        {
            id: 107,
            x: 106.6952787836745, y: 10.777399210932682, z: 31.4
        },

        {
            id: 108,
            x: 106.69532584459287, y: 10.777369892905256, z: 31.4
        },
        {
            id: 109,
            x: 106.69531306938212, y: 10.777382589294344, z: 31.4
        },
        {
            id: 110,
            x: 106.69530549767049, y: 10.777374734517181, z: 31.4
        },
        {
            id: 111,
            x: 106.69531827288124, y: 10.777362038128093, z: 31.4
        },

        {
            id: 112,
            x: 106.69532584459287, y: 10.777369892905256, z: 41.08
        },
        {
            id: 113,
            x: 106.69531306938212, y: 10.777382589294344, z: 41.08
        },
        {
            id: 114,
            x: 106.69530549767049, y: 10.777374734517181, z: 41.08
        },
        {
            id: 115,
            x: 106.69531827288124, y: 10.777362038128093, z: 41.08
        },

        {
            id: 116,
            x: 106.69508868894437, y: 10.777242619096688, z: 31.4
        },
        {
            id: 117,
            x: 106.69510410760188, y: 10.777226416575356, z: 31.4
        },
        {
            id: 118,
            x: 106.69511167931351, y: 10.777234271352519, z: 31.4
        },
        {
            id: 119,
            x: 106.695096260656, y: 10.77725047387385, z: 31.4
        },

        {
            id: 120,
            x: 106.69508868894437, y: 10.777242619096688, z: 41.08
        },
        {
            id: 121,
            x: 106.69510410760188, y: 10.777226416575356, z: 41.08
        },
        {
            id: 122,
            x: 106.69511167931351, y: 10.777234271352519, z: 41.08
        },
        {
            id: 123,
            x: 106.695096260656, y: 10.77725047387385, z: 41.08
        },

        {
            id: 124,
            x: 106.69532584459287, y: 10.777369892905256, z: 32.61
        },
        {
            id: 125,
            x: 106.69531306938212, y: 10.777382589294344, z: 32.61
        },
        {
            id: 126,
            x: 106.69530735867248, y: 10.777382134395223, z: 32.61
        },
        {
            id: 127,
            x: 106.695323320689, y: 10.7773672746462, z: 32.61
        },

        {
            id: 128,
            x: 106.69532584459287, y: 10.777369892905256, z: 37.35
        },
        {
            id: 129,
            x: 106.69531306938212, y: 10.777382589294344, z: 37.35
        },
        {
            id: 130,
            x: 106.69530735867248, y: 10.777382134395223, z: 37.35
        },
        {
            id: 131,
            x: 106.695323320689, y: 10.7773672746462, z: 37.35
        },

        {
            id: 132,
            x: 106.69508868894437, y: 10.777242619096688, z: 32.61
        },
        {
            id: 133,
            x: 106.69510410760188, y: 10.777226416575356, z: 32.61
        },
        {
            id: 34,
            x: 106.69510663150575, y: 10.777229034834411, z: 32.61
        },
        {
            id: 135,
            x: 106.69509121284824, y: 10.777245237355743, z: 32.61
        },

        {
            id: 136,
            x: 106.69508868894437, y: 10.777242619096688, z: 37.35
        },
        {
            id: 137,
            x: 106.69510410760188, y: 10.777226416575356, z: 37.35
        },
        {
            id: 138,
            x: 106.69510663150575, y: 10.777229034834411, z: 37.35
        },
        {
            id: 139,
            x: 106.69509121284824, y: 10.777245237355743, z: 37.35
        }
    ]
}

export default construction