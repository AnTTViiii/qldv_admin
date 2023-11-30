import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Transition } from "../configs/functions";
import { useSelector } from "react-redux";
import { User } from "../configs/tData"

function AdminList() {
  const [data, setData] = useState([]);
  const [viewPopup, setViewPopup] = useState(false);
  const openViewPopup = () => setViewPopup(true);
  const closeViewPopup = () => setViewPopup(false);
  const [email, setEmail] = useState("");
  const admin = useSelector((state) => state.auth.admin);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:9090/api/accounts/admin")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [data]);
  const handleDeleteAdminRole = () => {
    // axios
    //   .put("http://localhost:9090/api/accounts/" + email + "/isAdmin/false")
    //   .then((response) => {
        closeViewPopup();
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
  };
  return (
    <div className="customer-list">
      <table className="table-1 customer-list-table">
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Số điện thoại</th>
          <th>Vai trò</th>
          <th>Thao tác</th>
        </tr>
        {User.map((item) => item.role.id !== 3 && (
          <tr>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.role.type}</td>
            <td>
              <Button
                className={item.email === admin.email ? "del-btn disabled" : "del-btn"}
                onClick={() => {
                  openViewPopup();
                  setEmail(item.email);
                }}
                disabled={item.email === admin.email ? true : false}
              >
                Xóa
              </Button>
            </td>
          </tr>
        ))}
      </table>
      <Dialog
        open={viewPopup}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeViewPopup}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Thông báo</DialogTitle>
        <DialogContent>
          Bạn có chắc muốn xóa quyền đồng quản lý của tài khoản này?
        </DialogContent>
        <DialogActions>
          <Button onClick={closeViewPopup}>Không</Button>
          <Button onClick={handleDeleteAdminRole}>Có</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AdminList;
