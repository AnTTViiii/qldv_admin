import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Transition, bookingStatus, dot3digits, getBookingStatusNotify } from '../configs/functions';
import { Dialog, DialogContent, MenuItem, Select } from '@mui/material';
import './booking-list.css'

const BookingList = () => {
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:9090/api/bookings`)
            .then(response => {
                setBooking(response.data.reverse());
            })
            .catch((err) => {console.log(err)});
    }, []);
    
    async function updateStatus(e, id) {
        e.preventDefault();
        console.log(e.target.value);
        try {
            const status = { status: e.target.value }
            await axios.put(`http://localhost:9090/api/bookings/${id}/update-status`, status)
                .then((res) => {
                    alert('Đơn hàng #' + id + ' ' + getBookingStatusNotify(e.target.value) + '.')
                })
                .catch((err) => { console.log(err) });
            
        } catch (error) {
            alert(error);
        }
    }

    const [userInfoPopup, setUserInfoPopup] = useState(false);
    const [userInfo, setUserInfo] = useState([]);
    const openUserInfoPopup = () => setUserInfoPopup(true);
    const closeUserInfoPopup = () => setUserInfoPopup(false);

    const [bookingDetailPopup, setBookingDetailPopup] = useState(false);
    const [bookingDetail, setBookingDetail] = useState([]);
    const openBookingDetailPopup = () => setBookingDetailPopup(true);
    const closeBookingDetailPopup = () => setBookingDetailPopup(false);

    return (
        <div className='booking-list'>
            <table className='table-1 booking-list-table'>
                <tr>
                    <th>ID</th>
                    <th>Người dùng</th>
                    <th>Ngày đặt vé</th>
                    <th>Ngày tham quan</th>
                    <th>Số vé</th>
                    <th>Thành tiền</th>
                    <th>Chi tiết</th>
                    <th>Trạng thái</th>
                </tr>
                {booking && booking.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td><p onClick={() => {openUserInfoPopup(); setUserInfo(item.user)}}>ID {item.user.id}</p></td>
                        <td>{new Date(item.bookingDate).toLocaleString()}</td>
                        <td>{new Date(item.touringDate).toLocaleString().split(" ")[1]}</td>
                        <td>{item.quantity}</td>
                        <td>{dot3digits(item.totalPrice)} đ</td>
                        <td><p onClick={() => {openBookingDetailPopup(); setBookingDetail(item.bookingDetails)}}>Xem</p></td>
                        <td>
                            <Select className='select-box' defaultValue={item.status} size='small' onChange={(e) => updateStatus(e, item.id)}>
                                {bookingStatus.map((status, index) =>  (
                                    <MenuItem disabled={index < item.status || (item.status === 1 && index === 2)} value={index}>{status}</MenuItem>
                                ))}
                            </Select>
                        </td>
                    </tr>
                ))}
            </table>

            <Dialog open={userInfoPopup} TransitionComponent={Transition}
                    keepMounted onClose={closeUserInfoPopup}
                    className='popup-info'
            >
                <div className='popup-title'>
                    <p>Thông tin người dùng</p>
                    <div className='close-btn' onClick={closeUserInfoPopup}>❌</div>
                </div>
                <DialogContent>
                    <UserInfo info={userInfo} />
                </DialogContent>
            </Dialog>

            <Dialog open={bookingDetailPopup} TransitionComponent={Transition}
                    keepMounted onClose={closeBookingDetailPopup}
                    className='popup-details'
            >
                <div className='popup-title'>
                    <p>Chi tiết đặt vé</p>
                    <div className='close-btn' onClick={closeBookingDetailPopup}>❌</div>
                </div>
                <DialogContent>
                    <BookingDetails details={bookingDetail} />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default BookingList

export const BookingDetails = ({details}) => {
    return (
        <table className='table-2 booking-detail'>
            <tr>
                <th>STT</th>
                <th>Loại vé</th>
                <th>Số lượng</th>
                <th>Tổng tiền</th>
            </tr>
            {details.map((d, index) => (
                <tr>
                    <td>{index+1}</td>
                    <td>{d.ticket.type}</td>
                    <td>{d.quantity}</td>
                    <td>{dot3digits(d.totalPrice)} đ</td>
                </tr>
            ))}
        </table>
    )
}

export const UserInfo = ({info}) => {
    return (
        <div className='popup-user-info'>
            <p><b>Họ tên:</b> <span>{info.name}</span></p>
            <p><b>Email:</b> <span>{info.email}</span></p>
            <p><b>SĐT:</b> <span>{info.phone}</span></p>
        </div>
    )
}