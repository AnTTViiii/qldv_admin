import React, { useState, useEffect } from "react";
import { MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";

function UserList() {
  const [data, setData] = useState([]);
  const [roles, setRoles] = useState([]);

  const { isAuthed } = useSelector((state) => state.auth);
  const admin = isAuthed ? JSON.parse(localStorage.getItem('admin')) : [];

  useEffect(() => {
    axios.get("http://localhost:9090/api/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get("http://localhost:9090/api/roles")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data, roles]);

  async function updateRole(e, id) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9090/api/users/${id}/role/${e.target.value}`);
    } catch (error) {
        alert(error);
    }
  }
  
  return (
    <div className="user-list">
      <table className="table-1 user-list-table">
        <tr>
          <th>ID</th>
          <th>Họ tên</th>
          <th>Số điện thoại</th>
          <th>Email</th>
          <th>Phân quyền</th>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>
              {admin.role.id === 2 ? (
                <Select className='select-box' defaultValue={item.role.id} size='small' onChange={(e) => updateRole(e, item.id)}>
                  {roles.map((role) =>  (
                    <MenuItem value={role.id}>{role.type}</MenuItem>
                  ))}
                </Select>
              ) : (
                item.role.type
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default UserList;
