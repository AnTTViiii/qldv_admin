const construction = {
    dinhdoclap: {
        id: 1,
        name: 'Dinh Độc Lập',
        address: 'Số 135 Nam Kỳ Khởi Nghĩa, phường Bến Thành, quận 1, thành phố Hồ Chí Minh'
    },
    block: [
        {
            id_block: 1,
            name: 'A',
            id_dinhdoclap: 1
        },
        {
            id_block: 2,
            name: 'B',
            id_dinhdoclap: 1
        },
        {
            id_block: 3,
            name: 'C',
            id_dinhdoclap: 1
        },
        {
            id_block: 4,
            name: 'D',
            id_dinhdoclap: 1
        }
    ],
    floor_level: [
        {
            id_floorlevel: 1,
            name: '1',
            id_block: 1
        },
        {
            id_floorlevel: 2,
            name: '2',
            id_block: 1
        },
        {
            id_floorlevel: 3,
            name: '3',
            id_block: 1
        },
        {
            id_floorlevel: 4,
            name: '1',
            id_block: 2
        },
        {
            id_floorlevel: 5,
            name: '2',
            id_block: 2
        },
        {
            id_floorlevel: 6,
            name: '3',
            id_block: 2
        },
        {
            id_floorlevel: 7,
            name: '1',
            id_block: 3
        },
        {
            id_floorlevel: 8,
            name: '2',
            id_block: 3
        },
        {
            id_floorlevel: 9,
            name: '3',
            id_block: 3
        },
        {
            id_floorlevel: 10,
            name: '1',
            id_block: 4
        },
        {
            id_floorlevel: 11,
            name: '2',
            id_block: 4
        },
        {
            id_floorlevel: 12,
            name: '3',
            id_block: 4
        },
    ],
    simple_structure: [
        {
            id_simple_structure: 1,
            name: 'Nền nhà',
            height:	15,
            color: 'smoke',
            id_face: 1,
            id_floorlevel: 1
        },
        {
            id_simple_structure: 1,
            height:	1,
            color: 'smoke',
            id_face: 1,
            id_floorlevel: 1
        }
    ]
}

export default construction