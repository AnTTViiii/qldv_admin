import { Button, FormControl, InputLabel, MenuItem, Pagination, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./get-json-code.css"
import usePagination from '../configs/Pagination'
import axios from 'axios'

const GetGeoJSONCode = () => {
  const [floor, setFloor] = useState(1)
  const [floorList, setFloorList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9098/api/floor-levels')
      .then((res) => {
          setFloorList(res.data)
      })
      .catch((err) => console.log(err))
  }, [floorList])


  const [structType, setStructType] = useState(-1)

  const [structName, setStructName] = useState([])
  const [selectStructName, setSelectStructName] = useState(-1)

  const [structBody, setStructBody] = useState(-1)

  const [component, setComponent] = useState([])
  const [selectedComponent, setSelectedComponent] = useState(-1)

  useEffect(() => {
    if (structType === 0) {
      axios.get('http://localhost:9098/api/simp-structures/floorlevel/' + floor)
        .then((res) => {
          setStructName(res.data)
        })
        .catch((err) => console.log(err))
    } else {
      axios.get('http://localhost:9098/api/comp-structures/floor/' + floor)
        .then((res) => {
          setStructName(res.data)
        })
        .catch((err) => console.log(err))
    }

    if (structBody === 0) {
      axios.get(`http://localhost:9098/api/simp-bodies/comp-structure/${selectStructName}`)
        .then((res) => {
          setComponent(res.data)
        })
        .catch((err) => console.log(err))
    } else if (structBody === 1) {
      axios.get(`http://localhost:9098/api/comp-bodies/comp-structure/${selectStructName}`)
        .then((res) => {
          setComponent(res.data)
        })
        .catch((err) => console.log(err))
    }
  }, [floor, selectStructName, structBody, structType, structName, component])

  const [result, setResult] = useState([])
  
  const [showCode, setShowCode] = useState(false)

  const [codeType, setCodeType] = useState(-1)

  const [page, setPage] = useState(1);

  const handleGenerateCode = () => {
    if (structType === -1 || (structType === 1 && structBody === -1) || (structType === 1 && selectedComponent === -1) || selectStructName === -1 || (structType === 1 && selectedComponent === '')) {
      console.log(structType, structBody, selectedComponent, selectStructName)
      return alert('Vui lòng chọn thành phần!')
    }
    if (structType === 0) {
      try {
        axios.get(`http://localhost:9098/api/simp-structures/id/${selectStructName}`)
          .then((res)=>{
            if (res.data.floorLevel.id === floor) {
              setResult(res.data)
              setCodeType(0)
              setShowCode(true)
            }
          })
          .catch((err) => console.log(err))
      } catch (error) {
        console.log(error)
      }
    } else if (structType === 1) {
      if (structBody === 0) {
        try {
          axios.get(`http://localhost:9098/api/simp-bodies/${selectedComponent}`)
            .then((res)=>{
              if (res.data.complexStructure.id === selectStructName && res.data.complexStructure.floorLevel.id === floor) {
                setResult(res.data)
                setCodeType(0)
                setShowCode(true)
              }
            })
            .catch((err) => console.log(err))
        } catch (error) {
          console.log(error)
        }
      } else if (structBody === 1) {
        try {
          axios.get(`http://localhost:9098/api/comp-bodies/${selectedComponent}`)
            .then((res)=>{
              if (res.data.complexStructure.id === selectStructName && res.data.complexStructure.floorLevel.id === floor) {
                setResult(res.data)
                setCodeType(1)
                setPage(1)
                setShowCode(true)
              }
            })
            .catch((err) => console.log(err))
        } catch (error) {
          console.log(error)
        }
      }
    } 
  }

  const handleRemoveObject = () => {
    if (structType === 0) {
      if (result.floorLevel.id === floor) {
        axios.delete(`http://localhost:9098/api/simp-structures/id/${result.id}`)
          .then(()=>{
            alert("Xóa kiến trúc " + result.name + " thành công!")
            setShowCode(false)
          })
          .catch((err) => {
            console.log(err)
            alert("Xóa thất bại")
          })
      }
    } else if (structType === 1) {
      if (structBody === 0) {
        if (result.complexStructure.id === selectStructName && result.complexStructure.floorLevel.id === floor) {
          axios.delete(`http://localhost:9098/api/simp-bodies/${result.id}`)
            .then(()=>{
              alert("Xóa thành phần " + result.name + " thành công!")
              setShowCode(false)
            })
            .catch((err) => {
              console.log(err)
              alert("Xóa thất bại")
            })
        }
      } else if (structBody === 1) {
        if (result.complexStructure.id === selectStructName && result.complexStructure.floorLevel.id === floor) {
          if (result.components.length > 0) {
            axios.delete(`http://localhost:9098/api/comp-body-props/${result.components[page-1].id}`)
              .then(()=>{
                alert("Xóa chi tiết " + result.components[page-1].name + " thành công!")
                setShowCode(false)
              })
              .catch((err) => {
                console.log(err)
                alert("Xóa thất bại")
              })
          } else {
            console.log("Đang xóa thành phần phức tạp " + result.name + "......")
            axios.delete(`http://localhost:9098/api/comp-bodies/${result.id}`)
              .then((res)=>{
                if (res.data) {
                  alert("Xóa thành phần " + result.name + " thành công!")
                  setShowCode(false)
                } else alert("Xóa thất bại")
                
              })
              .catch((err) => {
                console.log(err)
                alert("Xóa thất bại")
              })
          }
        }
      }
    }
  }

  const PER_PAGE = 1;

  const count = result.components !== undefined ? Math.ceil(result.components.length / PER_PAGE) : 0;
  const _data = usePagination(result.components !== undefined ? result.components : [], PER_PAGE);

  const handleChangePage = (e, p) => {
    setPage(p);
    _data.jump(p);
  };  

  const handleCopyCode = async () => {
    try {
      const content = document.getElementById('code').innerText
      await navigator.clipboard.writeText(content);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  return (
    <div className='get-code-page'>
      <div className="left-panel">
        <FormControl>
            <InputLabel id="floor-title">-- Chọn tầng --</InputLabel>
            <Select labelId='floor-title' defaultValue={floor} className='select-box' onChange={e => setFloor(e.target.value)}>
                {floorList.map((floor) => (
                  <MenuItem value={floor.id}>{floor.name}</MenuItem>
                ))}
            </Select>
        </FormControl>

        <FormControl className='select-form'>
            <InputLabel id="struct-title">-- Chọn loại kiến trúc --</InputLabel>
            <Select labelId='struct-title' className='select-box' onChange={e => setStructType(e.target.value)} >
                <MenuItem value={0}>Kiến trúc đơn giản</MenuItem>
                <MenuItem value={1}>Kiến trúc phức tạp</MenuItem>
            </Select>
        </FormControl>

        <FormControl className='select-form' disabled={structType === -1 ? true: false}>
            <InputLabel id="struct-name-title">-- Chọn kiến trúc --</InputLabel>
            <Select labelId='struct-name-title' className='select-box' onChange={e => setSelectStructName(e.target.value)} >
                {structName.length > 0 && structName.map((struct) => (
                  <MenuItem value={struct.id}>{struct.name}</MenuItem>
                ))}
            </Select>
        </FormControl>

        <FormControl disabled={structType !== 1 ? true: false}>
            <InputLabel id="body-title">-- Chọn loại thành phần --</InputLabel>
            <Select labelId='body-title' className='select-box' onChange={e => setStructBody(e.target.value)}>
                <MenuItem value={0}>Đơn giản</MenuItem>
                <MenuItem value={1}>Phức tạp</MenuItem>
            </Select>
        </FormControl>

        <FormControl disabled={(structType !== 1) || (structBody === -1) || (selectStructName === -1) ? true: false}>
            <InputLabel id="component-title" >-- Chọn thành phần --</InputLabel>
            <Select labelId='component-title' className='select-box' onChange={e => setSelectedComponent(e.target.value)} >
              {
                component.length > 0 ? (
                  component.map((comp) => (
                    <MenuItem value={comp.id}>{comp.name}</MenuItem>
                  ))
                ) : (
                  <MenuItem value=''><i>Không có thành phần nào</i></MenuItem>
                )
              }
                
            </Select>
        </FormControl>

        <Button variant='contained' className='btn-main-theme large-btn' onClick={handleGenerateCode}>Tạo mã GeoJSON</Button>
      </div>
      <div className="right-panel">
        {showCode ? (
        <>
          {
            codeType === 1 ? (
              <div id='code' className='code-pool'>
                {
                  _data.currentData().map((data) => (
                    <div>
                    &#123;
                      <div className="json-code">
                      "type": "FeatureCollection", <br/>
                      "features": [
                        <div className="json-code">
                        &#123;
                          <div className="json-code">
                          "type": "Feature", <br/>
                          "properties": &#123;
                            <div className="json-code">
                            "name": "{data.name}",<br/>
                            "size": {data.height},<br/>
                            "color": "{data.color}"<br/>
                            </div>
                          &#125;, <br/>
                          "geometry": &#123;
                            <div className="json-code">
                            "type": "MultiPolygon", <br/>
                            "coordinates": [
                              <div className="json-code">
                              {data.faces.map((f, idx) => (
                                  <>[
                                    <div className="json-code">
                                    [
                                    {f.face.nodes.map((n, index) => (
                                      <p>[{n.x}, {n.y}{n.z !== 0.0 ? ', ' + n.z : ''}]{index === f.face.nodes.length - 1 ? '' : ','}</p>
                                    ))}
                                    ]
                                    </div>
                                  ]{idx === data.faces.length - 1 ? '' : ','}<br/></>
                              ))}
                              </div>
                            ]
                            </div>
                          &#125;
                          </div>
                        &#125;
                        </div>
                      ]
                      </div>
                    &#125;
                    </div>
                  ))
                }
              </div>
            ) : (
              codeType === 0 ? (
                <div id='code' className='code-pool'>
                &#123;
                  <div className="json-code">
                  "type": "FeatureCollection", <br/>
                  "features": [
                    <div className="json-code">
                    &#123;
                      <div className="json-code">
                      "type": "Feature", <br/>
                      "properties": &#123;
                        <div className="json-code">
                        "name": "{result.name}",<br/>
                        "size": {result.height},<br/>
                        "color": "{result.color}"<br/>
                        </div>
                      &#125;, <br/>
                      "geometry": &#123;
                        <div className="json-code">
                        "type": "Polygon", <br/>
                        "coordinates": [
                          <div className="json-code">
                          [
                            {result.face !== undefined ? (result.face.nodes.map((n, index) => (
                              <p>[{n.x}, {n.y}{n.z !== 0.0 ? ', ' + n.z : ''}]{index === result.face.nodes.length - 1 ? '' : ','}</p>
                            ))) : ('')}
                          ]
                          </div>
                        ]
                        </div>
                      &#125;
                      </div>
                    &#125;
                    </div>
                  ]
                  </div>
                &#125;
                </div>
              ) : ('')
            )
          }

          <div className="right-panel-footer">
            <Button variant='contained' className="btn-del-theme" onClick={handleRemoveObject}>Xóa</Button>
            {codeType === 1 ? (
              <Pagination count={count} size="large" page={page} className='pagination'
                variant="outlined" shape="rounded" onChange={handleChangePage}/>
            ) : ('')}
          </div>

          <Button variant='contained' className='btn-main-theme copy-btn' onClick={handleCopyCode}>Sao chép</Button>
        </>
        ) : ('')}
        
      </div>
    </div>
  )
}

export default GetGeoJSONCode