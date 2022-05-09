import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>Update Your Product here!{id}</h2>
        </div>
    );
};

export default UpdateProduct;