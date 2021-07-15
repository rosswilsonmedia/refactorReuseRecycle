import React, { useState } from 'react';

import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const priceHandler = (e) => {
        setPrice(e.target.value)
    }
    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=> {
                console.log(res);
                setTitle('');
                setPrice(0);
                setDescription('');
            })
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type='text'
                    name='title'
                    id='title'
                    onChange={titleHandler}
                    value={title}
                    required
                    aria-required='true'
                />
            </div>
            <div>
                <label htmlFor='price'>Price</label>
                <input
                    type='number'
                    min='0'
                    name='price'
                    id='price'
                    onChange={priceHandler}
                    value={price}
                    required
                    aria-required='true'
                />
            </div>
            <div>
                <label htmlFor='description'>Description</label>
                <input
                    type='text'
                    name='description'
                    id='description'
                    onChange={descriptionHandler}
                    value={description}
                    required
                    aria-required='true'
                />
            </div>
            <input type='submit' value='Create'/>
        </form>
    )
}

export default ProductForm;