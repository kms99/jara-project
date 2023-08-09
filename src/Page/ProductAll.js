import React, {useState, useEffect} from 'react'
import ProductCard from '../Component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [products,setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const getProductData = async() =>{
    let userKeyword = searchParams.get('q')||"";
    let url = new URL(`https://my-json-server.typicode.com/kms99/jara-project/products?q=${userKeyword}`);
    let res = await fetch(url);
    let data = await res.json();
    setProducts(data);
  }

  useEffect(()=>{
    getProductData();
  },[searchParams])

  return (
    <Container>
      <Row>
        {products.map((product)=>{
          return <Col md={3}><ProductCard product={product}/></Col>
        })}
      </Row>
    </Container>
  )
}

export default ProductAll
