import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
   // console.log(props)
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <br />
                <p>$ {price}</p>
                <br />
                <p><small> only {stock} left in stock - Order soon</small></p>
                <button className="cart-button"
                onClick={() =>props.handleAddProduct(props.product)}
                > 
                    <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        
        </div>
    );
};

export default Product;