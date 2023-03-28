import React from 'react';
import './Products.css'
const Products = (props) => {
    console.log(props);
    const { name, price, ratings, seller, img } = props.product;
    return (
        <div className='products'>
            <img src={img} alt='' />
            <div className='container'>
                <h2>{name}</h2>
                <h3>Price : ${price}</h3>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings}</p>

            </div>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Products;