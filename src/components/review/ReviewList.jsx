import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Pagination, Rating } from '@mui/material'
import { DeleteRounded } from '@mui/icons-material'
import "./review-list.css"
import usePagination from '../configs/Pagination'
import { Transition } from '../configs/functions'
import axios from 'axios'

const ReviewList = () => {
  const [delPopup, setDelPopup] = useState(false);
  const openDelPopup = () => setDelPopup(true);
  const closeDelPopup = () => setDelPopup(false);

  const handleDeleteReview = () => {
    closeDelPopup()
  }

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9090/api/reviews')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }, [data])

  const [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = data.length > 0 ? Math.ceil(data.length / PER_PAGE) : 1;
  const _reviews = usePagination(data.length > 0 ? data : [], PER_PAGE);

  const handleChangePage = (e, p) => {
    setPage(p);
    _reviews.jump(p);
  };
  return (
    <div className='review-list'>
      <div className="review-total">{data.length} đánh giá</div>
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
            <IconButton onClick={openDelPopup}><DeleteRounded className='del-btn' /></IconButton>
          </div>
        ))}
      </div>
      <Pagination count={count} size="large" page={page} className='pagination'
        variant="outlined" shape="rounded" onChange={handleChangePage}/>
      <Dialog open={delPopup}
        TransitionComponent={Transition}
        keepMounted onClose={closeDelPopup}
      >
        <DialogTitle>Thông báo</DialogTitle>
        <DialogContent>
          Bạn chắc chắn muốn xóa đánh giá vì chứa nội dung không phù hợp?
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDelPopup}>Không</Button>
          <Button onClick={handleDeleteReview}>Xóa</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ReviewList
