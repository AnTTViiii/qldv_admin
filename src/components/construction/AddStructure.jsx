import { AddBoxOutlined } from '@mui/icons-material';
import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./add-structure.css"
const AddStructure = () => {
    const [structureType, setStructureType] = useState('simple');

    const handleChangeStructureType = (event) => {
        setStructureType(event.target.value);
    };

    const [bodyType, setBodyType] = useState('simple');

    const handleChangeBodyType = (event) => {
        setBodyType(event.target.value);
    };

    const [faceList, setFaceList] = useState([{height: "", color: "", face: ""}])

    console.log(faceList)

    const handleFaceAdd = () => {
        setFaceList([...faceList, {height: "", color: "", face: ""}])
    }

    const handleFaceRemove = (index) => {
        const list = [...faceList]
        list.splice(index, 1)
        setFaceList(list)
    }

    const handleHeightChange = (e, index) => {
        const {name, value} = e.target
        const list = [...faceList]
        list[index][name] = value
        setFaceList(list)
    }

    const handleColorChange = (e, index) => {
        const {name, value} = e.target
        const list = [...faceList]
        list[index][name] = value
        setFaceList(list)
    }

    const handleFaceChange = (e, index) => {
        const {name, value} = e.target
        const list = [...faceList]
        list[index][name] = value
        setFaceList(list)
    }
    return (
        <div className='add-structure'>
            <div className="left-panel">
                <TextField className='text-field' variant='outlined' label='Tầng *' placeholder='1' />

                <RadioGroup value={structureType} onChange={handleChangeStructureType} >
                    <FormControlLabel value="simple" control={<Radio className='radio-btn' />} label="Kiến trúc đơn giản" />
                    <FormControlLabel value="complex" control={<Radio className='radio-btn' />} label="Kiến trúc phức tạp" />
                </RadioGroup>

                {structureType === "complex" ? (
                    <div className="structure-name">
                        <TextField className="text-field structure-name" label='Tên kiến trúc' />
                        <Button className="btn-main-theme large-btn">Thêm</Button>
                    </div>
                ) : ('')}
            </div>

            <div className="right-panel">
                {structureType === "simple" ? (
                    <div className="simple-struct">
                        <TextField className='text-field' fullWidth variant='outlined' label='Tên thành phần *' placeholder='Nền gác mái' />
                        <div className='textfield-list'>
                            <TextField className='text-field' variant='outlined' label='Chiều cao *' placeholder='2.38' />
                            <TextField className='text-field' variant='outlined' label='Màu sắc *' placeholder='#4b49ac' />
                        </div>
                        <TextField className='text-field' variant='outlined' fullWidth label='Tọa độ mặt phẳng *' placeholder='[x,y,z],[x,y,z],...' />
                        <Button className="btn-main-theme large-btn">Thêm</Button>
                    </div>
                ) : (
                    <div className="complex-structure-form">
                        <FormControl>
                            <InputLabel id="component-title">-- Chọn tên kiến trúc --</InputLabel>
                            <Select labelId='component-title' fullWidth className='select-box' >
                                <MenuItem value='wall'>Tường</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField className='text-field' fullWidth variant='outlined' label='Tên thành phần *' placeholder='Nền gác mái' />
                        <RadioGroup className='body-type-radio' value={bodyType} onChange={handleChangeBodyType} >
                            <FormControlLabel value="simple" control={<Radio className='radio-btn' />} label="Đơn giản" />
                            <FormControlLabel value="complex" control={<Radio className='radio-btn' />} label="Phức tạp" />
                        </RadioGroup>

                        {bodyType === "simple" ? (
                            <div className="simple-body">
                                <div className='textfield-list'>
                                    <TextField className='text-field' variant='outlined' label='Chiều cao *' placeholder='2.38' />
                                    <TextField className='text-field' variant='outlined' label='Màu sắc *' placeholder='#4b49ac' />
                                </div>
                                <TextField className='text-field' variant='outlined' fullWidth label='Tọa độ mặt phẳng *' placeholder='[x,y,z],[x,y,z],...' />
                                <Button className="btn-main-theme large-btn">Thêm</Button>
                            </div>
                        ) : (
                            <div className="complex-body">
                                {faceList.map((face, index) => (
                                    <div className='insert-face-component' key={index}>
                                        <div className='textfield-list'>
                                            <TextField  className='text-field' name='height' value={face.height} onChange={(e) => handleHeightChange(e, index)}
                                                        variant='outlined' label='Chiều cao *' placeholder='2.38' />
                                            <TextField  className='text-field' name='color' value={face.color} onChange={(e) => handleColorChange(e, index)}
                                                        variant='outlined' label='Màu sắc *' placeholder='#4b49ac' />
                                            <TextField  className='text-field' name='face' value={face.face} onChange={(e) => handleFaceChange(e, index)}
                                                        variant='outlined' label='Tọa độ mặt phẳng *' placeholder='[x,y,z],[x,y,z],...' />
                                            {
                                                faceList.length > 1 && (<div className='remove-face-btn' onClick={() => handleFaceRemove(index)}>❌</div>)
                                            }
                                        </div>
                                        {
                                            faceList.length - 1 === index && 
                                            <div className='complex-body-add-btn' onClick={handleFaceAdd}>
                                                <AddBoxOutlined />
                                                Thêm mặt phẳng 
                                            </div>
                                        }
                                    </div>
                                ))}
                                <Button className="btn-main-theme large-btn">Thêm</Button>
                            </div>
                        )}
                    </div>
                    
                    
                )}
            </div>
        </div>
    )
}

export default AddStructure
