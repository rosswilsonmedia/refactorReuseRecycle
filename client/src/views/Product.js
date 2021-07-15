import React, { useState, useEffect } from 'react';

import axios from 'axios';

import {Link} from '@reach/router';

const Product = (props) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(product)
    return (
        <>
            <Link to='/'>Home</Link>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/${product._id}/edit`}>Edit Product</Link>
        </>
    )
}

export default Product;