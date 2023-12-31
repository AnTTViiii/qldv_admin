import React, { useEffect, useState } from 'react'
import "./review-statistics.css"
import { Rating } from '@mui/material'
import axios from 'axios'
import { capitalize } from '../configs/functions'

const ReviewStatistics = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9090/api/reviews/statistic")
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }, [data])
  
  return (
    <div className='review-statistics-wrapper box'>
      <div className="title mbc">Tổng quan đánh giá</div>
      <table className="review-statistics">
        {data && data.map((item) => (
          <tr className="review-statistics-item">
            <td>{item.tagRate.tag.name}</td>
            <td>
              <p>
                <Rating className='rating-star' value={item.tagRate.rate} precision={0.5} readOnly />
                <span>({item.count} lượt)</span>
              </p>
            </td>
            <td>{capitalize(item.tagRate.content)}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default ReviewStatistics
