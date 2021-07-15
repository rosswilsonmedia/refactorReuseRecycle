import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { navigate } from '@reach/router';

export default props => {
    const { id } = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .then(res => {
                navigate(`/${id}`);
            });
    }

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input type="text"
                        name="title"
                        id='title'
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div>
                    <label htmlFor='price'>Price</label>
                    <input type="number"
                        min='0'
                        name="price"
                        id='price'
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }}
                    />
                </div>
                <div>
                    <label htmlFor='description'>Title</label>
                    <input type="text"
                        name="description"
                        id='description'
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </div>
                <input type="submit" value='Update Product'/>
            </form>
        </div>
    )
}

