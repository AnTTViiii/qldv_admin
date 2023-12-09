import React, { useEffect, useState } from 'react'
import GetGeoJSONCode from '../components/construction/GetGeoJSONCode'
import { Link, useLocation } from 'react-router-dom';
import AddStructure from '../components/construction/AddStructure';

const Construction = () => {
    const pages = [
        {
            name: 'XEM THÀNH PHẦN',
            url: '/construction',
            section: '',
            page: GetGeoJSONCode
        },
        {
            name: 'THÊM THÀNH PHẦN',
            url: '/construction/insert',
            section: 'insert',
            page: AddStructure
        }
    ];

    const location = useLocation();

    const [page, setPage] = useState(0);

    useEffect(() => {
        const path = window.location.pathname.split('/');

        if (path[1] === 'construction') {
            const activePage = pages.findIndex(item => item.section === path[2]);
            setPage(path[2] === undefined ? 0 : activePage);
        }
    }, [location]);

    const Page = pages[page].page;
    return (
        <div className="construction-wrapper">
            <div className="construction-navigation">
                {pages.map((item, index) => (
                    <Link to={item.url}>
                        <div className={page === index ? 'active' : ''}>{item.name}</div>
                    </Link>
                ))}
            </div>
            <div className="construction-page">
                <Page />
            </div>
        </div>
    )
}

export default Construction
