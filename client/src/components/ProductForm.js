import React, { useState } from 'react';

const ProductForm = (props) => {
    const {formSubmitHandler, initTitle, initPrice, initDescription} = props;
    const [title, setTitle] = useState(initTitle);
    const [price, setPrice] = useState(initPrice);
    const [description, setDescription] = useState(initDescription);

    return (
        <form onSubmit={formSubmitHandler}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type='text'
                    name='title'
                    id='title'
                    onChange={(e)=>setTitle(e.target.value)}
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
                    onChange={(e)=>setPrice(e.target.value)}
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
                    onChange={(e)=>setDescription(e.target.value)}
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