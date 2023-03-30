import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Products = (props) => {

    const { name, price, ratings, seller, img } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='products'>
            <img src={img} alt='' />
            <div className='container'>
                <h2>{name}</h2>
                <h3>Price : ${price}</h3>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings}</p>

            </div>
            <button onClick={() => { handleAddToCart(props.product) }} className='btn-cart'><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
        </div>
    );
};

export default Products;