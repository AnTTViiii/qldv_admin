import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import "./get-json-file.css"

const GetGeoJSONFile = () => {
  return (
    <div className='get-file-page'>
      <div className="left-panel">
        <FormControl>
            <InputLabel id="block-title">-- Chọn khu --</InputLabel>
            <Select labelId='block-title' className='select-box' >
                <MenuItem value='A'>A</MenuItem>
            </Select>
        </FormControl>

        <FormControl>
            <InputLabel id="block-title">-- Chọn tầng --</InputLabel>
            <Select labelId='block-title' className='select-box' >
                <MenuItem value='1'>1</MenuItem>
            </Select>
        </FormControl>

        <FormControl>
            <InputLabel id="struct-title">-- Chọn loại kiến trúc --</InputLabel>
            <Select labelId='struct-title' className='select-box' >
                <MenuItem value='simple'>Kiến trúc đơn giản</MenuItem>
                <MenuItem value='super'>Kiến trúc thượng tầng</MenuItem>
            </Select>
        </FormControl>

        <FormControl>
            <InputLabel id="body-title">-- Chọn loại thành phần --</InputLabel>
            <Select labelId='body-title' className='select-box' >
                <MenuItem value='simple'>Đơn giản</MenuItem>
                <MenuItem value='complex'>Phức tạp</MenuItem>
            </Select>
        </FormControl>

        <FormControl>
            <InputLabel id="component-title">-- Chọn thành phần --</InputLabel>
            <Select labelId='component-title' className='select-box' >
                <MenuItem value='wall'>Tường</MenuItem>
            </Select>
        </FormControl>

        <Button variant='contained' className='btn-main-theme large-btn'>Tạo file GeoJSON</Button>
        <Button variant='contained' className="btn-del-theme large-btn">Xóa thành phần</Button>
      </div>
      <div className="right-panel">
        <pre className='json-file'>feature</pre>
      </div>
    </div>
  )
}

export default GetGeoJSONFile
