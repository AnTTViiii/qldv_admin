import { Check, Error } from '@mui/icons-material';
import { Alert, Button, TextField } from '@mui/material';
import React, { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Ticket } from '../configs/tData';

const UpdateTicket = () => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const priceRef = useRef();

  const [notify, setNotify] = useState(null);
  const [showAlertError, setShowAlertError] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const setAlertError = (error) => {
    setNotify(error);
    setShowAlertError(true);
  };
  const setAlertSuccess = (success) => {
    setNotify(success);
    setShowAlertSuccess(true);
  };

  const location = useLocation();
  const path = location.pathname.split("/");
  let id = parseInt(path[2]);
  const data = Ticket[id]

  const handleUpdate = () => {
      const name = nameRef.current.value;
      const price = priceRef.current.value;

      if (!name) return setAlertError("Vui lòng nhập đầy đủ thông tin!");
      const ticketDetail = {
          name: name,
          price: price
      };
      
      // axios.post("http://localhost:9090/api/tickets", ticketDetail)
      //   .then(res => {
      //     console.log(res.data);
      //     navigate("/tickets");
      //     props.closePopup();
      //     setImageUrl("");
      //     setLoadSuccess(false);
      //     setError(null);
      //     setSuccess(null);
      //     setShowAlert(false);
      //     setShowAlertSuccess(false);
      //   });
      navigate("/tickets")
  }

  return (
    <div className='update-ticket'>
      <div className='title'>
        <h1>CẬP NHẬT THÔNG TIN VÉ</h1>
      </div>
      <TextField inputRef={nameRef} fullWidth label="Loại vé" defaultValue={data.type} variant="outlined" />
      <TextField inputRef={priceRef} fullWidth label="Giá vé" defaultValue={data.price} variant="outlined" />

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
      {notify != null && showAlertSuccess && 
        <Alert icon={<Check fontSize="inherit" />}
            severity="success" sx={{ margin: "20px 0" }}
        >
          {notify}
        </Alert>
      }
    </div>
  )
}

export default UpdateTicket
