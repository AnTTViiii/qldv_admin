import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Transition } from "../configs/functions";
import { useSelector } from "react-redux";

function AdminList() {
  const admin = useSelector((state) => state.auth.admin);
  const [data, setData] = useState([]);
  const [ID, setID] = useState("");

  const [delPopup, setDelPopup] = useState(false);
  const openDelPopup = () => setDelPopup(true);
  const closeDelPopup = () => setDelPopup(false);

  useEffect(() => {
    axios
      .get("http://localhost:9090/api/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data]);

  const handleDeleteAdminRole = () => {
    axios
      .put("http://localhost:9090/api/users/" + ID + "/role/1")
      .then(() => {
          closeDelPopup();
      })
      .catch((error) => {
        console.log(error);
      });
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
        {data && data.map((item) => item.role.id !== 1 && (
          <tr>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.role.type}</td>
            <td>
              <Button
                className={item.email === admin.email ? "del-btn disabled" : "del-btn"}
                onClick={() => {
                  openDelPopup();
                  setID(item.id);
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
        open={delPopup}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeDelPopup}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Thông báo</DialogTitle>
        <DialogContent>
          Bạn có chắc muốn xóa quyền đồng quản lý của tài khoản này?
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDelPopup}>Không</Button>
          <Button onClick={handleDeleteAdminRole}>Có</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AdminList;
