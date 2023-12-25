import React from "react";
import "./user-info.css";
import {  PersonRounded } from "@mui/icons-material";

const UserInfo = ({ admin }) => {
  return (
    <div className="user-info">
      <div className="user-info__icon">
        <PersonRounded className="person-icon" />
      </div>
      <div className="user-info__name">
        <span>{admin.name}</span>
      </div>
    </div>
  );
};

export default UserInfo;
