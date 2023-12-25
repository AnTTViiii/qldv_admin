import { Slide } from "@mui/material";
import { forwardRef } from "react";

export const colors = {
    bodyBg: "#edefff",
    mainBg: "#fff",
    mainColor: "#4B49AC",
    txtColor: "#444444",
    white: "#fff",
    black: "#000",
    blue: "#8583D4",
    red: "#C50202",
}

export const bookingStatus = [
    "Chờ xác nhận",
    "Đã duyệt",
    "Từ chối"
]

export const getBookingStatusNotify = (status) => {
    if (status === 1) return "đã được duyệt";
    else if (status === 2) return "đã bị từ chối";
}

export const dot3digits = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const getItemQuantity = (item) => {
    let qty = 0;
    item.map((i) => (qty += i.quantity));
    return qty;
}

export const getBookingStatusName = (status) => {
    let name = '';
    switch (status) {
        case 0: name = "Chờ xác nhận"; break;
        case 1: name = "Đã duyệt"; break;
        case 2: name = "Từ chối"; break;
        default: break;
    }
    return name;
}

export const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}