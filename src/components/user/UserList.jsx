import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select } from "@mui/material";
import { Transition } from "../configs/functions";
import axios from "axios";
import { Role, User } from "../configs/tData"
import { useSelector } from "react-redux";

function UserList() {
  const [viewPopup, setViewPopup] = useState(false);
  const openViewPopup = () => setViewPopup(true);
  const closeViewPopup = () => setViewPopup(false);
  const [email, setEmail] = useState([]);
  const [data, setData] = useState([]);

  const admin = useSelector((state) => state.auth.admin);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:9090/api/accounts")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [data]);


  async function updateRole(e, id) {
    e.preventDefault();
    console.log(e.target.value);
    try {
        await axios.put(`http://localhost:9090/api/users/${id}/role/${e.target.value}`);
    } catch (error) {
        alert(error);
    }
  }

  const handleDeleteUser = () => {
    // axios
    //   .put("http://localhost:9090/api/accounts/" + email + "/isAdmin/false")
    //   .then((response) => {
        closeViewPopup();
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
  };

  const role = 0; //temp
  return (
    <div className="user-list">
      <table className="table-1 user-list-table">
        <tr>
          <th>ID</th>
          <th>Họ tên</th>
          <th>Số điện thoại</th>
          <th>Email</th>
          <th>Phân quyền</th>
          <th>Thao tác</th>
        </tr>
        {User.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>
              {/*admin.role.id === 0*/ role === 0 ? (
                <Select className='select-box' defaultValue={item.role.id} size='small' onChange={(e) => updateRole(e, item.role.id)}>
                  {Role.map((role) =>  (
                    <MenuItem value={role.id}>{role.type}</MenuItem>
                  ))}
                </Select>
              ) : (
                item.role.type
              )}
            </td>
            <td>
              <Button
                className={role !== 0 ? "del-btn disabled" : "del-btn"}
                onClick={() => {
                  openViewPopup();
                  setEmail(item.email);
                }}
                disabled={role === 0 ? false : true}
              >
                Xóa
              </Button>
            </td>
          </tr>
        ))}
      </table>

      <Dialog
        open={viewPopup} TransitionComponent={Transition}
        keepMounted onClose={closeViewPopup}
      >
        <DialogTitle>Thông báo</DialogTitle>
        <DialogContent>
          Bạn có chắc muốn xóa tài khoản này?
        </DialogContent>
        <DialogActions>
          <Button onClick={closeViewPopup}>Không</Button>
          <Button onClick={handleDeleteUser}>Có</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default UserList;
