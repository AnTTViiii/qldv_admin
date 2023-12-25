import { AddBoxOutlined } from '@mui/icons-material';
import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import "./add-structure.css"
import axios from 'axios';
const AddStructure = () => {
    const [floorList, setFloorList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9090/api/floor-levels')
            .then((res) => {
                setFloorList(res.data)
            })
            .catch((err) => console.log(err))
    }, [floorList])

    const [floor, setFloor] = useState(1)

    const floorRef = useRef()

    const handleCreateFloor = () => {
        const body = { name: floorRef.current.value }
        axios.post('http://localhost:9090/api/floor-levels/construction/1', body)
            .then((res) => {
                alert("Thêm " + res.data.name + " thành công!")
            })
            .catch((err) => console.log(err))
    }

    const [structureType, setStructureType] = useState('simple');

    const handleChangeStructureType = (event) => {
        setStructureType(event.target.value);
    };

    const simpStructNameRef = useRef(), simpStructHeightRef = useRef(), simpStructColorRef = useRef(), simpStructCoordsRef = useRef()

    const handleCreateSimpleStructure = () => {
        const name = simpStructNameRef.current.value
        const height = simpStructHeightRef.current.value
        const color = simpStructColorRef.current.value
        const inputCoords = simpStructCoordsRef.current.value
        if (!name || !height || !color || !inputCoords)
            alert("Vui lòng điền đủ các trường trong form bên phải!")
        else {
            axios.post('http://localhost:9090/api/faces')
                .then((face) => {
                    const body = {
                        name: name,
                        height: height,
                        color: color,
                        faceId: face.data.id,
                        floorLevelId: floor
                    }

                    axios.post('http://localhost:9090/api/simp-structures', body)
                        .then((res) => {
                            const regex = /\[(.*?), (.*?)(?:, (.*?))?\]/g;
                            let match;
                            const listCoords = [];

                            while ((match = regex.exec(inputCoords)) !== null) {
                                const coords = [parseFloat(match[1]), parseFloat(match[2])];
                                if (match[3]) {
                                    coords.push(parseFloat(match[3]));
                                }
                                listCoords.push(coords);
                            }
                            
                            for (let i = 0; i < listCoords.length; i++) {
                                const node = {
                                    x: listCoords[i][0],
                                    y: listCoords[i][1],
                                    z: listCoords[i][2] !== undefined ? listCoords[i][2] : 0
                                }

                                axios.post('http://localhost:9090/api/nodes', node)
                                    .then((node) => {
                                        axios.put(`http://localhost:9090/api/faces/${face.data.id}/nodes/${node.data.id}`)
                                            .catch((err) => {console.log('FaceNode: ' + err)})
                                    })
                                    .catch((err) => {console.log('Node: ' + err)})
                            }
                            alert("Thêm thành công!")
                            simpStructNameRef.current.value = ''
                            simpStructHeightRef.current.value = ''
                            simpStructCoordsRef.current.value = ''
                        })
                        .catch((err) => {console.log('Simple Structure: ' + err)})
                })
                .catch((err) => {console.log('Face: ' + err)})
        }
    }

    const complexStructNameRef = useRef()

    const handleCreateComplexStructure = () => {
        const body = { 
            name: complexStructNameRef.current.value,
            floorLevelId: floor
        }
        axios.post('http://localhost:9090/api/comp-structures', body)
            .then((res) => {
                alert("Thêm " + res.data.name + " thành công!")
                complexStructNameRef.current.value = ''
            })
            .catch((err) => console.log(err))
    }

    const [complexStruct, setComplexStruct] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9090/api/comp-structures')
            .then((res) => {
                setComplexStruct(res.data)
            })
    }, [])

    const handleChangeComplexStructList = () => {
        axios.get('http://localhost:9090/api/comp-structures')
            .then((res) => {

            })
    }

    const [bodyType, setBodyType] = useState('simple');

    const handleChangeBodyType = (event) => {
        setBodyType(event.target.value);
    };

    const [faceList, setFaceList] = useState([{height: "", color: "", face: ""}])

    // console.log(faceList)

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
                <FormControl>
                    <InputLabel id="component-title">-- Chọn tầng --</InputLabel>
                    <Select labelId='component-title' defaultValue={floor} fullWidth className='select-box' onChange={(e) => {setFloor(e.target.value)}} >
                        {
                            floorList.map((floor) => (
                                <MenuItem value={floor.id}>{floor.name}</MenuItem>
                            ))
                        }
                        <MenuItem value={0}>Thêm tầng mới</MenuItem>
                    </Select>
                </FormControl>
                
                {floor === 0 ? (
                    <>
                    <TextField inputRef={floorRef} className='text-field' variant='outlined' label='Tầng *' placeholder='1' />
                    <Button className="btn-main-theme large-btn" onClick={handleCreateFloor}>Thêm tầng</Button>
                    </>
                ) : ('')}

                <RadioGroup value={structureType} onChange={handleChangeStructureType} >
                    <FormControlLabel value="simple" control={<Radio className='radio-btn' />} label="Kiến trúc đơn giản" />
                    <FormControlLabel value="complex" control={<Radio className='radio-btn' />} label="Kiến trúc phức tạp" />
                </RadioGroup>

                {structureType === "complex" ? (
                    <div className="structure-name">
                        <TextField inputRef={complexStructNameRef} className="text-field structure-name" label='Tên kiến trúc' />
                        <Button className="btn-main-theme large-btn" onClick={handleCreateComplexStructure}>Thêm kiến trúc</Button>
                    </div>
                ) : ('')}
            </div>

            <div className="right-panel">
                {structureType === "simple" ? (
                    <div className="simple-struct">
                        <TextField inputRef={simpStructNameRef} className='text-field' fullWidth variant='outlined' label='Tên thành phần *' placeholder='Nền gác mái' />
                        <div className='textfield-list'>
                            <TextField inputRef={simpStructHeightRef} className='text-field' variant='outlined' label='Chiều cao *' type='number' placeholder='2.38' />
                            <TextField inputRef={simpStructColorRef} className='text-field' variant='outlined' label='Màu sắc *' placeholder='#4b49ac' />
                        </div>
                        <TextField inputRef={simpStructCoordsRef} className='text-field' variant='outlined' fullWidth label='Tọa độ mặt phẳng *' placeholder='[x,y,z],[x,y,z],...' />
                        <Button className="btn-main-theme large-btn" onClick={handleCreateSimpleStructure}>Thêm</Button>
                    </div>
                ) : (
                    <div className="complex-structure-form">
                        <FormControl>
                            <InputLabel id="component-title">-- Chọn tên kiến trúc --</InputLabel>
                            <Select labelId='component-title' fullWidth className='select-box' >
                                {complexStruct.map((comp) => (
                                    <MenuItem value={comp.id}>{comp.name}</MenuItem>
                                ))}
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
                                    <TextField className='text-field' variant='outlined' label='Chiều cao *' type='number' placeholder='2.38' />
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
                                                        variant='outlined' label='Chiều cao *' type='number' placeholder='2.38' />
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
