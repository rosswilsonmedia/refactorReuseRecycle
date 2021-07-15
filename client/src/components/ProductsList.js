import React from 'react';

import axios from 'axios';

import { Link } from '@reach/router';

const ProductsList = (props) => {
    const{productsList, deleteHandler} = props;

    return (
        <>
            <h3>All Products</h3>
            {
                productsList[0]?
                <>
                    {
                        productsList.map((product, index) => {
                            return (
                                <>
                                    <Link key={index} to={`/${product._id}`}>{product.title}</Link>
                                    <button
                                        onClick={(e) => {deleteHandler(product._id)}}
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