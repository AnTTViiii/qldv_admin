import { Error } from '@mui/icons-material';
import { Alert, Button, TextField } from '@mui/material';
import React, { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateTicket = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  let id = parseInt(path[2]);

  const data = location.state;
  const typeRef = useRef();
  const priceRef = useRef();

  const [notify, setNotify] = useState(null);
  const [showAlertError, setShowAlertError] = useState(false);
  const setAlertError = (error) => {
    setNotify(error);
    setShowAlertError(true);
  };

  const handleUpdate = () => {
    const type = typeRef.current.value;
    const price = priceRef.current.value;

    const regex = /^[0-9\b]+$/;

    if (!type || !price || !regex.test(price)) return setAlertError("Vui lòng nhập đầy đủ thông tin và đúng định dạng!");

    else {
      const ticketDetail = {
          type: type,
          price: price
      };
      
      axios.put(`http://localhost:9090/api/tickets/${id}`, ticketDetail)
        .then(res => {
          console.log(res.data);
          setNotify(null);
          setShowAlertError(false);
          navigate("/tickets");
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className='update-ticket'>
      <div className='title'>
        <h1>CẬP NHẬT THÔNG TIN VÉ</h1>
      </div>
      <TextField inputRef={typeRef} focused fullWidth label="Loại vé" defaultValue={data.type} variant="outlined" />
      <TextField inputRef={priceRef} focused fullWidth label="Giá vé" defaultValue={data.price} variant="outlined" />

      <Button variant="contained" size='large' className='submit-btn' onClick={handleUpdate}>                             
          Cập nhật
      </Button>

      {notify != null && showAlertError &&
        <Alert icon={<Error fontSize="inherit" />}
            severity="warning" sx={{ margin: "20px 0" }}
        >
          {notify}
        </Alert>
      }
    </div>
  )
}

export default UpdateTicket
