import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';

const Update = props => {
    const { id } = props;
    const [product, setProduct] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title: e.target.title.value,
            price: e.target.price.value,
            description: e.target.description.value
        })
            .then(res => console.log(res))
            .then(res => {
                navigate(`/${id}`);
            });
    }

    return (
        loaded?
        <ProductForm
            formSubmitHandler={updateProduct}
            initTitle={product.title}
            initPrice={product.price}
            initDescription={product.description}
        />:
        ''
    )
}

export default Update;