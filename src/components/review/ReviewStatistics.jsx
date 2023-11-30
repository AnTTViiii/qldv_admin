import React from 'react'
import "./review-statistics.css"
import data from '../configs/data'
import { Rating, colors } from '@mui/material'

const ReviewStatistics = () => {
  return (
    <div className='review-statistics-wrapper box'>
      <div className="title mbc">Tổng quan đánh giá</div>
      <table className="review-statistics">
        {data.reviewStatistics.map((item) => (
          <tr className="review-statistics-item">
            <td>{item.type}</td>
            <td>
              <p>
                <Rating className='rating-star' value={item.rate} colors= "#4b49ac" precision={0.5} readOnly />
                <span>({item.numberOfReviews} lượt)</span>
              </p>
            </td>
            <td>{item.tag}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default ReviewStatistics
