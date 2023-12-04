import React, { useState } from 'react'
import { reviews } from '../configs/tData'
import { IconButton, Pagination, Rating } from '@mui/material'
import { DeleteRounded } from '@mui/icons-material'
import "./review-list.css"
import usePagination from './Pagination'

const ReviewList = () => {
  const handleDeleteReview = () => {}

  const [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(reviews.length / PER_PAGE);
  const _reviews = usePagination(reviews, PER_PAGE);

  const handleChangePage = (e, p) => {
    setPage(p);
    _reviews.jump(p);
  };
  return (
    <div className='review-list'>
      <div className="review-total">{reviews.length} đánh giá</div>
      <div className="reviews">
        {_reviews.currentData().map((review) => (
          <div className="review">
            <div className='review-left'>
              <div className="review-info">
                <div><span>{review.user.email}</span> đã bình luận vào <span>{new Date(review.dateReview).toLocaleString()}</span></div>
                <Rating value={review.rate} className='rating-star' readOnly />
              </div>
              <div className="review-content">{review.content}</div>
            </div>
            <IconButton onClick={() => handleDeleteReview()}><DeleteRounded className='del-btn' /></IconButton>
          </div>
        ))}
      </div>
      <Pagination count={count} size="large" page={page} className='pagination'
        variant="outlined" shape="rounded" onChange={handleChangePage}/>
    </div>
  )
}

export default ReviewList
