import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';
import {Card} from "antd";
import Meta from "antd/es/card/Meta";

const Product = (props) => {
    const handleClick = () => {
        props.click(props.product)
    }
    return (
        <Card
            style={{background: "white"}}
            cover={
                <img style={{height: "150px"}} src={props.product.image} alt="empty"/>
            }
            actions={[<div onClick={handleClick}>{props.isCartView ? "Remove from Cart" : "Add to Cart" }</div>]}
        >
            <Meta title={props.product.name}/>
        </Card>
    )
};

Product.propTypes = {
    product: PropTypes.object,
    click: PropTypes.func,
    isCartView: PropTypes.bool
};

export default Product;
