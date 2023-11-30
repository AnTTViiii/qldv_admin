import { BorderColorRounded } from '@mui/icons-material'
import { Button, Dialog, DialogContent, DialogTitle, DialogActions } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './ticket-list.css'
import { Transition, dot3digits } from '../configs/functions'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Ticket } from '../configs/tData'

const TicketList = () => {
    const [delPopup, setDelPopup] = useState(false);
    const openDelPopup = () => setDelPopup(true);
    const closeDelPopup = () => setDelPopup(false);

    // const [data, setData] = useState([]);
    const [ID, setID] = useState(0);


    useEffect(() => {
        // axios.get("http://localhost:9090/api/tickets")
        //     .then((response) => {
        //       setData(response.data);
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
    }, []);

    const handleDeleteTicket = () => {
        closeDelPopup()
    }

    const navigate = useNavigate();

    return (
        <div className='ticket-list'>
            <Button className="create-btn" onClick={() => navigate("/new-ticket")}> 
                <BorderColorRounded />
                Thêm vé mới
            </Button>

            <table className='table-1 ticket-list-table'>
                <tr>
                    <th>ID</th>
                    <th>Loại vé</th>
                    <th>Đơn giá</th>
                    <th>Thao tác</th>
                </tr>
                {
                    Ticket.map((t) => (
                        <tr>
                            <td>{t.id}</td>
                            <td>{t.type}</td>
                            <td>{dot3digits(t.price)} đ</td>
                            <td>
                                <p className='edit-btn'><Link to={'/edit-ticket/' + t.id}>Sửa</Link></p>
                                <p className='del-btn' onClick={() => {openDelPopup(); setID(t.id)}}>Xóa</p>
                            </td>
                        </tr>
                    ))
                }
            </table>

            <Dialog open={delPopup} keepMounted
                TransitionComponent={Transition}
                onClose={closeDelPopup}
            >
                <DialogTitle>Thông báo</DialogTitle>
                <DialogContent>
                    Bạn có chắc muốn xóa loại vé này?
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDelPopup}>Không</Button>
                    <Button onClick={handleDeleteTicket}>Có</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default TicketList