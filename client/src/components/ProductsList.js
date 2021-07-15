import React from 'react';

import axios from 'axios';

import { Link } from '@reach/router';

const ProductsList = (props) => {

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                props.removeFromState(productId)
            })
    }

    console.log(props.productsList)

    return (
        <>
            <h3>All Products</h3>
            {
                props.productsList[0]?
                <>
                    {
                        props.productsList.map((product, index) => {
                            return (
                                <>
                                    <Link key={index} to={`/${product._id}`}>{product.title}</Link>
                                    <button
                                        onClick={(e) => {deleteProduct(product._id)}}
                                    >
                                        Delete Product
                                    </button>
                                </>
                            )
                        })
                    }
                </>:
                ''
            }
        </>
    )
}

export default ProductsList;