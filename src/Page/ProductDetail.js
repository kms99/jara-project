import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Dropdown  } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const [detailData,setDetailData] = useState({});
  let {id} = useParams();
  const getDetailInfo = async()=>{
    let url = new URL(`https://my-json-server.typicode.com/kms99/jara-project/products/${id}`);
    let res = await fetch(url);
    let data = await res.json();
    setDetailData(data);
  }
  
  useEffect(()=>{
    getDetailInfo();
  },[])

  return (
    <Container>
      <Row>
        <Col className='detail-first'>
          <img src={detailData?.img} width="375px"/>
        </Col>

        <Col>
          <div className='detail-second-first'>{detailData?.choice?"choice  ":""}{detailData?.new?"new":""}</div>
          <div><h2>{detailData?.title}</h2></div>
          <div><h2>₩ {detailData?.price}</h2></div>
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">사이즈</Dropdown.Toggle>
            <Dropdown.Menu>
              {detailData.size?.map((item)=>{
                  return <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                })}
            </Dropdown.Menu>
          </Dropdown>
          <Button className='detail-second-fifth' variant="dark">추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
