import React, { useEffect, useState } from 'react'
import './overall-list.css'
import { PaidRounded, Person2Rounded, BookOnlineRounded } from '@mui/icons-material'
import axios from 'axios'
import { dot3digits } from '../configs/functions'
import data from '../configs/data'

const icons = [
  <Person2Rounded />,
  <BookOnlineRounded />,
  <PaidRounded />
]
const OverallList = () => {
  const [overall, setOverall] = useState([
    { value: '', title: 'Người dùng' },
    { value: '', title: 'Lượt đặt vé' },
    { value: '', title: 'Doanh thu' },
  ]);

  useEffect(() => {
    // const endpoints = [
    //   `http://localhost:9090/api/users/count`,
    //   `http://localhost:9090/api/bookings/count`,
    //   `http://localhost:9090/api/bookings/revenue`
    // ];
  
    // Promise.all(endpoints.map(endpoint => axios.get(endpoint)))
    //   .then(responses => {
    //     setOverall([
    //       { ...overall[0], value: responses[0].data },
    //       { ...overall[1], value: responses[1].data },
    //       { ...overall[2], value: responses[2].data },
    //     ]);
    //   });
  }, [overall]);

  return (
    <div className='overall-list mb'>
      {
        data.overall.map((item, index) => (
          <div className="overall-list__item box" key={`overall-${index}`}>
            <div className="overall-list__item__icon">
              {icons[index]}
            </div>
            <div className="overall-list__item__info">
              <div className="title">
                  {dot3digits(item.value)} {index === 3 ? ' đ' : ''}
              </div>
              <span>{item.title}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default OverallList
