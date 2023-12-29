import { AddBoxOutlined } from '@mui/icons-material';
import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import "./add-structure.css"
import axios from 'axios';
const AddStructure = () => {
    const [floorList, setFloorList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9098/api/floor-levels')
            .then((res) => {
                setFloorList(res.data)
            })
            .catch((err) => console.log(err))
    }, [floorList])

    const [floor, setFloor] = useState(1)

    const floorRef = useRef()

    const handleCreateFloor = () => {
        const body = { name: floorRef.current.value }
        axios.post('http://localhost:9098/api/floor-levels/construction/1', body)
            .then((res) => {
                alert("Thêm " + res.data.name + " thành công!")
            })
            .catch((err) => {
                console.log(err)
                alert("Thêm thất bại!")
            })
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

        // const formatInputFace = /^(\s*\[\s*-?\d+(\.\d+)?,\s*-?\d+(\.\d+)?(,\s*-?\d+(\.\d+)?)?\]\s*,?\s*)+$/;

        if (!name || !height || !color || !inputCoords)
            return alert("Vui lòng điền đủ các trường trong form bên phải!")
        else if (floor < 1)
            return alert("Vui lòng chọn tầng!")
        else {
            axios.post('http://localhost:9098/api/faces')
                .then((face) => {
                    const body = {
                        name: name,
                        height: height,
                        color: color,
                        faceId: face.data.id,
                        floorLevelId: floor
                    }

                    axios.post('http://localhost:9098/api/simp-structures', body)
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

                            console.log(listCoords)
                            listCoords.map((coord) => {
                                const node = {
                                    x: coord[0],
                                    y: coord[1],
                                    z: coord[2] !== undefined ? coord[2] : 1
                                }

                                axios.post('http://localhost:9098/api/nodes', node)
                                    .then((node) => {
                                        axios.put(`http://localhost:9098/api/faces/${face.data.id}/nodes/${node.data.id}`)
                                            .catch((err) => {
                                                console.log('FaceNode: ' + err);
                                            })
                                    })
                                    .catch((err) => {console.log('Node: ' + err)})
                            })
                            
                            // var i = 0
                            // while (i < listCoords.length) {
                                
                            // }
                            alert("Thêm thành công!")
                            simpStructNameRef.current.value = ''
                            simpStructHeightRef.current.value = ''
                            simpStructCoordsRef.current.value = ''
                        })
                        .catch((err) => {console.log('Simple Structure: ' + err)})
                })
                .catch((err) => {console.log('Face: ' + err);})
        }
    }

    const complexStructNameRef = useRef()

    const handleCreateComplexStructure = () => {
        if (floor > 0) {
            const body = { 
                name: complexStructNameRef.current.value,
                floorLevelId: floor
            }
            axios.post('http://localhost:9098/api/comp-structures', body)
                .then((res) => {
                    alert("Thêm " + res.data.name + " thành công!")
                    complexStructNameRef.current.value = ''
                })
                .catch((err) => console.log(err))
        } else {
            return alert("Vui lòng chọn tầng!")
        }
    }

    const [complexStruct, setComplexStruct] = useState([])
    const [selectedComplexStruct, setSelectedComplexStruct] = useState([])

    useEffect(() => {
        // if (floor > 0) {
            axios.get('http://localhost:9098/api/comp-structures/floor/' + floor)
                .then((res) => {
                    console.log(res.data)
                    if(res.data.length > 0) {
                        setComplexStruct(res.data)
                        console.log("ko null")
                    } else {
                        console.log("nulllll")
                        setComplexStruct([])
                    }
                })
                .catch((err) => console.log(err))
        // }
        
    }, [floor, complexStruct])

    const simpleBodyNameRef = useRef(), simpleBodyHeightRef = useRef(), simpleBodyColorRef = useRef(), simpleBodyFaceRef = useRef()

    const handleCreateSimpleBody = () => {
        const name = simpleBodyNameRef.current.value
        const height = simpleBodyHeightRef.current.value
        const color = simpleBodyColorRef.current.value
        const inputCoords = simpleBodyFaceRef.current.value

        // const formatInputFace = /^(\s*\[\s*\d+\.\d+,\s*\d+\.\d+,\s*\d+\.\d+\]\s*,?\s*)+$/;

        if (!name || !height || !color || !inputCoords)
            return alert("Vui lòng điền đủ các trường trong form bên phải!")
        else {
            axios.post('http://localhost:9098/api/faces')
                .then((face) => {
                    const body = {
                        name: name,
                        height: height,
                        color: color,
                        complexStructure: selectedComplexStruct
                    }

                    axios.post(`http://localhost:9098/api/simp-bodies/face/${face.data.id}`, body)
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
                                    z: listCoords[i][2] !== undefined ? listCoords[i][2] : 0.001
                                }

                                axios.post('http://localhost:9098/api/nodes', node)
                                    .then((node) => {
                                        axios.put(`http://localhost:9098/api/faces/${face.data.id}/nodes/${node.data.id}`)
                                            .catch((err) => {console.log('FaceNode: ' + err)})
                                    })
                                    .catch((err) => {console.log('Node: ' + err)})
                            }
                            alert("Thêm thành công!")
                            simpleBodyNameRef.current.value = ''
                            simpleBodyHeightRef.current.value = ''
                            simpleBodyFaceRef.current.value = ''
                        })
                        .catch((err) => {console.log('Simple Body: ' + err)})
                })
                .catch((err) => {console.log('Face: ' + err)})
        }
    }

    const [bodyType, setBodyType] = useState('simple');

    const handleChangeBodyType = (event) => {
        setBodyType(event.target.value);
    };
    
    const [selectedStructBody, setSelectedStructBody] = useState(-1)

    const [structBodyList, setStructBodyList] = useState([])

    const [createCompBodyStatus, setCreateCompBodyStatus] = useState(false)

    useEffect(() => {
        if ((bodyType === 'complex' && selectedComplexStruct.id > 0) || createCompBodyStatus) {
            axios.get(`http://localhost:9098/api/comp-bodies/comp-structure/${selectedComplexStruct.id}`)
                .then((res) => {
                    if (res.data) {
                        setStructBodyList(res.data)
                        setCreateCompBodyStatus(false)
                    } 
                })
                .catch((err) => console.log(err))
        }
    }, [bodyType, selectedComplexStruct.id, structBodyList, createCompBodyStatus])

    const comlexBodyNameRef = useRef()

    const handleCreateComplexBody = () => {
        const name = comlexBodyNameRef.current.value
        if (selectedComplexStruct.id === undefined || !name) {
            return alert("Vui lòng chọn tên kiến trúc hoặc nhập tên thành phần!")
        } else {
            const body = {
                name: name,
                complexStructure: selectedComplexStruct
            }
            axios.post(`http://localhost:9098/api/comp-bodies`, body)
                .then(() => {
                    alert("Thêm thành công!")
                    setCreateCompBodyStatus(true)
                    comlexBodyNameRef.current.value = ''
                })
                .catch((err) => {
                    console.log(err)
                    setCreateCompBodyStatus(false)
                    alert("Thêm thất bại!")
                })
        }
    }

    const [faceList, setFaceList] = useState([{face: ""}])

    // console.log(faceList)

    const handleFaceAdd = () => {
        setFaceList([...faceList, {face: ""}])
    }

    const handleFaceRemove = (index) => {
        const list = [...faceList]
        list.splice(index, 1)
        setFaceList(list)
    }

    const handleFaceChange = (e, index) => {
        const {name, value} = e.target
        const list = [...faceList]
        list[index][name] = value
        setFaceList(list)
    }

    const complexPropNameRef = useRef(), complexPropHeightRef = useRef(), complexPropColorRef = useRef()

    const handleCreateComplexProp = () => {
        const body = JSON.parse(selectedStructBody)
        const propName = complexPropNameRef.current.value
        const height = complexPropHeightRef.current.value
        const color = complexPropColorRef.current.value

        // const formatInputFace = /^(\s*\[\s*\d+\.\d+,\s*\d+\.\d+,\s*\d+\.\d+\]\s*,?\s*)+$/;

        if (body.id === undefined || !propName || !height || !color || faceList[0].face === '') {
            return alert("Vui lòng chọn thành phần và điền đầy đủ thông tin!")
        } else {
            // for (let i = 0; i < faceList.length; i++) {
            //     if (!formatInputFace.test(faceList[i].face))
            //         return alert("Tọa độ mặt phẳng " + i+1 + " chưa đúng định dạng!")
            //     if (faceList[i].face === "")
            //         return alert("Vui lòng không bỏ trống trường tọa độ mặt phẳng!")
            // }


        const bodyProp = {
            name: propName,
            height: height,
            color: color,
            complexBody: body
        }

        axios.post(`http://localhost:9098/api/comp-body-props`, bodyProp)
            .then((propResponse) => {
                for (let inputFace = 0; inputFace < faceList.length; inputFace++) {
                    axios.post('http://localhost:9098/api/faces')
                        .then((face) => {
                            axios.put(`http://localhost:9098/api/comp-body-props/${propResponse.data.id}/face/${face.data.id}`)
                                .then((propFaceResponse) => {
                                    const regex = /\[(.*?), (.*?)(?:, (.*?))?\]/g;
                                    let match;
                                    const listCoords = [];

                                    while ((match = regex.exec(faceList[inputFace].face)) !== null) {
                                        const coords = [parseFloat(match[1]), parseFloat(match[2])];
                                        if (match[3]) {
                                            coords.push(parseFloat(match[3]));
                                        }
                                        listCoords.push(coords);
                                    }
                                    
                                    for(let i = 0; i < listCoords.length; ) {
                                        const node = {
                                            x: listCoords[i][0],
                                            y: listCoords[i][1],
                                            z: listCoords[i][2] !== undefined ? listCoords[i][2] : 0.001
                                        }

                                        axios.post('http://localhost:9098/api/nodes', node)
                                            .then((node) => {
                                                axios.put(`http://localhost:9098/api/faces/${face.data.id}/nodes/${node.data.id}`)
                                                    .then((facenode) => {
                                                        i++
                                                    })
                                                    .catch((err) => {
                                                        console.log('FaceNode: ' + err)
                                                        alert("Thêm node cho mặt phẳng thất bại!")
                                                    })
                                            })
                                            .catch((err) => {
                                                console.log('Node: ' + err)
                                                alert("Thêm tọa độ cho node thất bại!")
                                            })
                                    }
                                })
                                .catch((err) => {
                                    console.log(err)
                                    alert("Thêm mặt phẳng cho chi tiết thất bại!")
                                })
                        })
                        .catch((err) => {
                            console.log(err)
                            alert("Thêm mặt phẳng thất bại!")
                        })
                }

                alert("Thêm thành công!")
                complexPropNameRef.current.value = ''
                complexPropHeightRef.current.value = ''
                complexPropColorRef.current.value = ''
                setFaceList([{face: ""}])
            })
            .catch((err) => {
                console.log(err)
                alert("Thêm thuộc tính thất bại!")
            })
        }
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
                            <TextField inputRef={simpStructHeightRef} className='text-field' variant='outlined' label='Chiều cao *' type='number' InputProps={{ inputProps: { min: 0 } }} placeholder='2.38' />
                            <TextField inputRef={simpStructColorRef} className='text-field' variant='outlined' label='Màu sắc *' placeholder='#4b49ac' />
                        </div>
                        <TextField inputRef={simpStructCoordsRef} className='text-field' variant='outlined' fullWidth label='Tọa độ mặt phẳng *' placeholder='[x,y,z],[x,y,z],...' />
                        <Button className="btn-main-theme large-btn" onClick={handleCreateSimpleStructure}>Thêm</Button>
                    </div>
                ) : (
                    <div className="complex-structure-form">
                        <FormControl>
                            <InputLabel id="component-title">-- Chọn tên kiến trúc --</InputLabel>
                            <Select labelId='component-title' fullWidth className='select-box' onChange={(e) => setSelectedComplexStruct(JSON.parse(e.target.value))} >
                                {complexStruct.map((comp) => (
                                    <MenuItem key={comp.id} value={JSON.stringify(comp)}>{comp.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <RadioGroup className='body-type-radio' value={bodyType} onChange={handleChangeBodyType} >
                            <FormControlLabel value="simple" control={<Radio className='radio-btn' />} label="Đơn giản" />
                            <FormControlLabel value="complex" control={<Radio className='radio-btn' />} label="Phức tạp" />
                        </RadioGroup>

                        {bodyType === 'simple' ? (
                            <TextField inputRef={simpleBodyNameRef} className='text-field' fullWidth variant='outlined' label='Tên thành phần *' placeholder='Nền gác mái' />
                        ) : (
                            <div className="complex-truct-body-name">
                                <FormControl>
                                    <InputLabel id="component-prop-name-title">-- Chọn thành phần --</InputLabel>
                                    <Select labelId='component-prop-name-title' className='select-box' onChange={(e) => {setSelectedStructBody(e.target.value)}} >
                                        {
                                            structBodyList.map((body) => (
                                                <MenuItem value={JSON.stringify(body)}>{body.name}</MenuItem>
                                            ))
                                        }
                                        <MenuItem value={0}>Thêm thành phần</MenuItem>
                                    </Select>
                                </FormControl>

                                {selectedStructBody === 0 ? (
                                    <>
                                    <TextField inputRef={comlexBodyNameRef} className='text-field' variant='outlined' label='Tên thành phần *' placeholder='Gác mái' />
                                    <Button className="btn-main-theme" onClick={handleCreateComplexBody}>Thêm</Button>
                                    </>
                                ) : ('')}
                            </div>
                        )}

                        {bodyType === "simple" ? (
                            <div className="simple-body">
                                <div className='textfield-list'>
                                    <TextField inputRef={simpleBodyHeightRef} className='text-field' variant='outlined' label='Chiều cao *' type='number' InputProps={{ inputProps: { min: 0 } }} placeholder='2.38' />
                                    <TextField inputRef={simpleBodyColorRef} className='text-field' variant='outlined' label='Màu sắc *' placeholder='#4b49ac' />
                                </div>
                                <TextField inputRef={simpleBodyFaceRef} className='text-field' variant='outlined' fullWidth label='Tọa độ mặt phẳng *' placeholder='[x,y,z],[x,y,z],...' />
                                <Button className="btn-main-theme large-btn" onClick={handleCreateSimpleBody}>Thêm</Button>
                            </div>
                        ) : (
                            <div className="complex-body">
                                <div className='textfield-list'>
                                    <TextField inputRef={complexPropNameRef} className='text-field' variant='outlined' label='Tên chi tiết *' placeholder='Khung cửa sổ trên/dưới' />
                                    <TextField inputRef={complexPropHeightRef} className='text-field' variant='outlined' label='Chiều cao *' type='number' InputProps={{ inputProps: { min: 0 } }} placeholder='2.38' />
                                    <TextField inputRef={complexPropColorRef} className='text-field' variant='outlined' label='Màu sắc *' placeholder='#4b49ac' />
                                </div>
                                {faceList.map((face, index) => (
                                    <div className='insert-face-component' key={index}>
                                        <div className='textfield-list'>
                                            <TextField  className='text-field' name='face' fullWidth value={face.face} onChange={(e) => handleFaceChange(e, index)}
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
                                <Button className="btn-main-theme large-btn" onClick={handleCreateComplexProp}>Thêm</Button>
                            </div>
                        )}
                    </div>
                    
                    
                )}
            </div>
        </div>
    )
}

export default AddStructure
