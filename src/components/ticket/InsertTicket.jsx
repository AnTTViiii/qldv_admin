import { Error } from '@mui/icons-material';
import { Alert, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const InsertTicket = () => {
  const navigate = useNavigate();
  const typeRef = useRef();
  const priceRef = useRef();

  const [notify, setNotify] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const setAlertError = (error) => {
    setNotify(error);
    setShowAlert(true);
  };

  const handleCreate = () => {
    const type = typeRef.current.value;
    const price = priceRef.current.value;

    const regex = /^[0-9\b]+$/;

    if (!type || !price || !regex.test(price)) return setAlertError("Vui lòng nhập đầy đủ thông tin và đúng định dạng!");

    else {
      const ticketDetail = {
        type: type,
        price: price
      };
      
      axios.post("http://localhost:9090/api/tickets", ticketDetail)
        .then(res => {
          console.log(res.data);
          setNotify(null);
          setShowAlert(false);
          navigate("/tickets");
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className='create-ticket'>
      <div className='title'>
        <h1>THÊM VÉ MỚI</h1>
      </div>
      <TextField inputRef={typeRef} fullWidth label="Loại vé" variant="outlined" />
      <TextField inputRef={priceRef} fullWidth label="Giá vé" variant="outlined" />

      <Button variant="contained" size='large' className='submit-btn' onClick={handleCreate}>                             
          Thêm mới
      </Button>

      {notify != null && showAlert &&
        <Alert icon={<Error fontSize="inherit" />}
            severity="warning" sx={{ margin: "20px 0" }}
        >
          {notify}
        </Alert>
      }
    </div>
  )
}

export default InsertTicket
