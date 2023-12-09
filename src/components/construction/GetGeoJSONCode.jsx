import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./get-json-code.css"
import { floor_level, simple_structure, simple_body, complex_body } from '../configs/components'

const GetGeoJSONCode = () => {
  const [floor, setFloor] = useState(0)
  const [structType, setStructType] = useState(-1)
  const [structBody, setStructBody] = useState(-1)
  const [component, setComponent] = useState([])
  const [face, setFace] = useState([])
  const [nodes, setNodes] = useState([])

  console.log(component, nodes)

  useEffect(()=>{},[component, face, nodes])

  console.log(floor, structType, structBody)

  const handleGetComponent = (value) => {
    setComponent(value)
    if (structType === 0 || (structType === 1 && structBody === 0)) {
      setNodes(value.face.node)
    } else {
      setFace(value.faces)
    }
  }

  const handleGenerateCode = () => {
    const pre = document.getElementById('json-code')
    pre.innerHTML = ''
    let code = `
    <div>
      &#123;
        <div>
        &emsp;"type": "FeatureCollection", <br/>
        &emsp;"features": [
          <div>
          &emsp;&emsp;&#123;
            <div>
            &emsp;&emsp;&emsp;"type": "Feature", <br/>
            &emsp;&emsp;&emsp;"properties": &#123;
              <div>
              &emsp;&emsp;&emsp;&emsp;"name": `+ component.name +`,<br/>
              &emsp;&emsp;&emsp;&emsp;"height": `+ component.height + `,<br/>
              &emsp;&emsp;&emsp;&emsp;"color": `+ component.color + `<br/>
              </div>
            &emsp;&emsp;&emsp;&#125;, <br/>
            &emsp;&emsp;&emsp;"geometry": &#123;
              <div>
              &emsp;&emsp;&emsp;&emsp;"type": "` + (structType === 1 && structBody === 1 ? `MultiPolygon` : `Polygon`) + `", <br/>
              &emsp;&emsp;&emsp;&emsp;"coordinates": [
                <div>`;

    if (structType === 1 && structBody === 1) {
      complex_body.map((complex) => complex.id_complex_body === component.id_complex_body && (
        complex.faces.map((f, idx) => {
            code += `&emsp;&emsp;&emsp;&emsp;&emsp;[
              <div>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[`;
            f.face.node.map((n, index) => (
              code += `<p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[`+n.x+`, `+n.y+`, `+n.z+`]`+(index === f.face.node.length - 1 ? '' : ',')+`</p>`
            ))
            console.log(f.face.id_face)
            code += `&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;]
              </div>
              &emsp;&emsp;&emsp;&emsp;&emsp;]` + (idx === face.length - 1 ? '' : ',<br/>')
        })
      ))
    } else {
      code += `&emsp;&emsp;&emsp;&emsp;&emsp;[`
      nodes.map((n, index) => (
        code += `<p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[`+n.x+`, `+n.y+`, `+n.z+`]`+(index === nodes.length - 1 ? '' : ',')+`</p>`
      ))
      code += `&emsp;&emsp;&emsp;&emsp;&emsp;]`
    }
                
    code += `
                </div>
                &emsp;&emsp;&emsp;&emsp;]
              </div>
              &emsp;&emsp;&emsp;&#125;
            </div>
            &emsp;&emsp;&#125;
          </div>
          &emsp;]
        </div>
      &#125;
    </div>
    `
    console.log(code)
    pre.innerHTML = code
  }
  return (
    <div className='get-code-page'>
      <div className="left-panel">
        <FormControl>
            <InputLabel id="floor-title">-- Chọn tầng --</InputLabel>
            <Select labelId='floor-title' className='select-box' onChange={e => setFloor(e.target.value)}>
                {floor_level.map((floor) => (
                  <MenuItem value={floor.id_floorlevel}>{floor.name}</MenuItem>
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

        <FormControl disabled={structType === 0 ? true: false}>
            <InputLabel id="body-title">-- Chọn loại thành phần --</InputLabel>
            <Select labelId='body-title' className='select-box' onChange={e => setStructBody(e.target.value)}>
                <MenuItem value={0}>Đơn giản</MenuItem>
                <MenuItem value={1}>Phức tạp</MenuItem>
            </Select>
        </FormControl>

        <FormControl>
            <InputLabel id="component-title">-- Chọn thành phần --</InputLabel>
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
      <div id='json-code' className="right-panel"></div>
    </div>
  )
}

export default GetGeoJSONCode