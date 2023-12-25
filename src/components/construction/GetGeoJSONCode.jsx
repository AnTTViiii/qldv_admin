import { Button, FormControl, InputLabel, MenuItem, Pagination, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./get-json-code.css"
import { floor_level, simple_structure, simple_body } from '../configs/components'
import { complex_body } from '../construction/test'
import usePagination from '../configs/Pagination'
import axios from 'axios'

const GetGeoJSONCode = () => {
  const [floorList, setFloorList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9090/api/floor-levels')
      .then((res) => {
          setFloorList(res.data)
      })
      .catch((err) => console.log(err))
  }, [floorList])


  const [floor, setFloor] = useState(1)

  const [structType, setStructType] = useState(-1)

  const [structName, setStructName] = useState([])
  const [selectStructName, setSelectStructName] = useState([])

  const [structBody, setStructBody] = useState(-1)
  const [component, setComponent] = useState([])

  const [face, setFace] = useState([])
  const [nodes, setNodes] = useState([])

  useEffect(() => {
    if (structType === 0) {
      axios.get('http://localhost:9090/api/simp-structures/floorlevel/' + floor)
        .then((res) => {
          setStructName(res.data)
        })
        .catch((err) => console.log(err))
    } else {
      axios.get('http://localhost:9090/api/comp-structures/floor/' + floor)
        .then((res) => {
          setStructName(res.data)
        })
        .catch((err) => console.log(err))
      if (structBody === 0) {
        axios.get(`http://localhost:9090/api/simp-bodies/comp-structure/${selectStructName}`)
          .then((res) => {
            setComponent(res.data)
          })
          .catch((err) => console.log(err))
      } else {
        axios.get(`http://localhost:9090/api/comp-bodies/comp-structure/${selectStructName}`)
          .then((res) => {
            setComponent(res.data)
          })
          .catch((err) => console.log(err))
      }
    }
    

    
    
      axios.get('')
        .then((res) => {

        })
        .catch((err) => console.log(err))
  }, [floor, selectStructName, structBody, structName, structType])

  const handleGetComponent = (value) => {
    setComponent(value)
    if (structType === 0 || (structType === 1 && structBody === 0)) {
      setNodes(value.face.node)
    } else {
      setFace(value.faces)
    }
  }

  const [page, setPage] = useState(1);
  const PER_PAGE = 1;

  const count = component.components !== undefined ? Math.ceil(component.components.length / PER_PAGE) : 1;
  const _data = usePagination(component.components !== undefined ? component.components : [], PER_PAGE);

  const handleChangePage = (e, p) => {
    setPage(p);
    _data.jump(p);
  };

  const [showCode, setShowCode] = useState(false)
  const handleGenerateCode = () => {
    setShowCode(true)
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
            <Select labelId='struct-name-title' className='select-box' onChange={e => setStructType(e.target.value)} >
                {structName.map((struct) => (
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

        <FormControl disabled={(structType !== 1) || (structBody === -1) ? true: false}>
            <InputLabel id="component-title" >-- Chọn thành phần --</InputLabel>
            <Select labelId='component-title' className='select-box' onChange={e => handleGetComponent(e.target.value)} >
              {
                structType === 0 ? (
                  simple_structure.map((comp) => comp.floorlevel.id_floorlevel === floor && (
                    <MenuItem value={comp}>{comp.name}</MenuItem>
                  ))
                ) : (
                  structBody === 0 ? (
                    simple_body.map((comp) => comp.complex_structure.floorlevel.id_floorlevel === floor && (
                      <MenuItem value={comp}>{comp.name}</MenuItem>
                    ))
                  ) : (
                    complex_body.map((comp) => comp.complex_structure.floorlevel.id_floorlevel === floor && (
                      <MenuItem value={comp}>{comp.name}</MenuItem>
                    ))
                  )
                )
              }
                
            </Select>
        </FormControl>

        <Button variant='contained' className='btn-main-theme large-btn' onClick={handleGenerateCode}>Tạo mã GeoJSON</Button>
        <Button variant='contained' className="btn-del-theme large-btn">Xóa thành phần</Button>
      </div>
      <div className="right-panel">
        {showCode ? (
        <>
          {
            structType === 1 && structBody === 1 ? (
              <div className='code-pool'>
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
                                    {f.face.node.map((n, index) => (
                                      <p>[{n.x}, {n.y}, {n.z}]{index === f.face.node.length - 1 ? '' : ','}</p>
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
              <div className='code-pool'>
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
                      "name": "{component.name}",<br/>
                      "size": {component.height},<br/>
                      "color": "{component.color}"<br/>
                      </div>
                    &#125;, <br/>
                    "geometry": &#123;
                      <div className="json-code">
                      "type": "Polygon", <br/>
                      "coordinates": [
                        <div className="json-code">
                        [
                          {nodes.map((n, index) => (
                            <p>[{n.x}, {n.y}, {n.z}]{index === nodes.length - 1 ? '' : ','}</p>
                          ))}
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
            )
          }

          {structType === 1 && structBody === 1 ? (
            <Pagination count={count} size="large" page={page} className='pagination'
              variant="outlined" shape="rounded" onChange={handleChangePage}/>
          ) : ('')}
        </>
        ) : ('')}

      </div>
    </div>
  )
}

export default GetGeoJSONCode