import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import ProductsList from '../components/ProductsList';

import axios from 'axios';

const Main = () => {
    const [productsList, setProductsList] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProductsList(res.data))
            .catch(err => console.log(err))
    }, [])

    const formSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title: e.target.title.value,
            price: e.target.price.value,
            description: e.target.description.value
        })
            .then(res=> {
                console.log(res);
                setProductsList([...productsList, res.data])
            })
            .catch(err=>console.log(err))
    }

    const removeProduct = productId => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                setProductsList(productsList.filter(product => product._id != productId));
            })
    }

    return (
        <div>
            <ProductForm
                formSubmitHandler={formSubmitHandler}
                initTitle=''
                initPrice='0'
                initDescription=''
            />
            <ProductsList
                productsList={productsList}
                deleteHandler={removeProduct}
            />
        </div>
    )
}

export default Main;