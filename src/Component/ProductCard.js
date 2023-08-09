import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
  const navigate = useNavigate();
  return (
    <div className='product-card' onClick={()=>{navigate(`/detail/${product.id}`)}}>
      <img src={product?.img} width={'fit-content'}></img>
      <div className='card-first-line'>
        <div>{product?.choice?"choice":""}</div>
        <div>{product?.new?"new":""}</div>
      </div>
      <div>{product?.title}</div>
      <div>₩ {product?.price}</div>

    </div>
  )
}

export default ProductCard
